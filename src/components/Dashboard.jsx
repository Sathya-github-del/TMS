import { useState, useEffect } from "react"
import {
  Home,
  Users,
  BarChart3,
  Monitor,
  Award,
  Lightbulb,
  Bell,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// Pie Chart Component for Workload Distribution
const WorkloadDistributionChart = () => {
  const data = [
    { label: "High", value: 25, color: "#ef4444" },
    { label: "Medium", value: 45, color: "#f59e0b" },
    { label: "Low", value: 30, color: "#10b981" },
  ]

  const total = data.reduce((sum, item) => sum + item.value, 0)
  let cumulativePercentage = 0

  const createPath = (percentage, cumulativePercentage) => {
    const startAngle = cumulativePercentage * 3.6 - 90
    const endAngle = (cumulativePercentage + percentage) * 3.6 - 90
    const largeArcFlag = percentage > 50 ? 1 : 0

    const startX = 50 + 40 * Math.cos((startAngle * Math.PI) / 180)
    const startY = 50 + 40 * Math.sin((startAngle * Math.PI) / 180)
    const endX = 50 + 40 * Math.cos((endAngle * Math.PI) / 180)
    const endY = 50 + 40 * Math.sin((endAngle * Math.PI) / 180)

    return `M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`
  }

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", fontFamily: 'Montserrat, sans-serif' }}>
      <div style={{ position: "relative" }}>
        <svg width="200" height="200" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100
            const path = createPath(percentage, cumulativePercentage)
            cumulativePercentage += percentage

            return (
              <path
                key={index}
                d={path}
                fill={item.color}
                stroke="white"
                strokeWidth="1"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
              />
            )
          })}
        </svg>

        {/* Center text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: "700", color: "#1f2937" }}>{total}%</div>
          <div style={{ fontSize: "12px", color: "#64748b" }}>Total</div>
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: item.color,
              }}
            />
            <span
              style={{
                fontSize: "14px",
                color: "#64748b",
                fontWeight: "500",
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {item.label} ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Enhanced Bar Chart Component for Performance Categories
const PerformanceCategoriesChart = () => {
  const data = [
    { label: "Exceeding Expectations", value: 35, color: "#10b981" },
    { label: "Meeting Expectations", value: 55, color: "#3b82f6" },
    { label: "Needs Improvement", value: 20, color: "#f59e0b" },
  ]

  const maxValue = Math.max(...data.map((item) => item.value))

  return (
    <div style={{ padding: "20px", fontFamily: 'Montserrat, sans-serif' }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "200px",
          gap: "32px",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        {/* Y-axis grid lines */}
        {[25, 50, 75].map((line) => (
          <div
            key={line}
            style={{
              position: "absolute",
              left: "20px",
              right: "20px",
              bottom: `${(line / 100) * 160 + 20}px`,
              height: "1px",
              backgroundColor: "#e5e7eb",
              zIndex: 1,
            }}
          />
        ))}

        {data.map((item, index) => {
          const height = (item.value / maxValue) * 160

          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "4px",
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {item.value}%
                </span>
                <div
                  style={{
                    width: "48px",
                    height: `${height}px`,
                    backgroundColor: item.color,
                    borderRadius: "4px 4px 0 0",
                    transition: "all 0.3s ease",
                    boxShadow: `0 2px 4px ${item.color}30`,
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: "12px",
                  color: "#64748b",
                  textAlign: "center",
                  lineHeight: "1.2",
                  maxWidth: "80px",
                  fontWeight: "500",
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                {item.label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Y-axis labels */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          color: "#64748b",
          padding: "0 20px",
          fontWeight: "500",
          fontFamily: 'Montserrat, sans-serif'
        }}
      >
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
      </div>
    </div>
  )
}

// Card Component
const Card = ({ children, style = {}, ...props }) => (
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      fontFamily: 'Montserrat, sans-serif',
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
)

// Button Component
const Button = ({ children, variant = "default", size = "default", onClick, style = {}, ...props }) => {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s ease",
    fontFamily: 'Montserrat, sans-serif'
  }

  const variants = {
    default: {
      backgroundColor: "#3b82f6",
      color: "white",
      padding: "8px 16px",
    },
    outline: {
      backgroundColor: "transparent",
      color: "#374151",
      border: "1px solid #d1d5db",
      padding: "8px 16px",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#374151",
      padding: "8px",
    },
  }

  const sizes = {
    default: { height: "36px" },
    icon: { height: "36px", width: "36px", padding: "8px" },
  }

  return (
    <button
      style={{
        ...baseStyles,
        ...variants[variant],
        ...sizes[size],
        ...style,
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (variant === "outline") e.target.style.backgroundColor = "#f9fafb"
        if (variant === "ghost") e.target.style.backgroundColor = "#f3f4f6"
        if (variant === "default") e.target.style.backgroundColor = "#2563eb"
      }}
      onMouseLeave={(e) => {
        if (variant === "outline") e.target.style.backgroundColor = "transparent"
        if (variant === "ghost") e.target.style.backgroundColor = "transparent"
        if (variant === "default") e.target.style.backgroundColor = "#3b82f6"
      }}
      {...props}
    >
      {children}
    </button>
  )
}

// Updated Avatar Component with fallback
const Avatar = ({ children, size = 40, fallback = "U" }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: "#f3f4f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {imageError ? (
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e5e7eb",
          color: "#4b5563",
          fontSize: `${size / 2}px`,
          fontWeight: "500",
          fontFamily: 'Montserrat, sans-serif'
        }}>
          {fallback}
        </div>
      ) : (
        children
      )}
    </div>
  )
}

// Sidebar Component
const Sidebar = ({ isOpen, onClose, isMobile = false, onNavigate }) => {
  const [activeItem, setActiveItem] = useState('dashboard')

  const menuItems = [
    { icon: Home, label: "Dashboard", page: "dashboard" },
    { icon: Users, label: "Teacher Bandwidth Tracker", page: "bandwidth" },
    { icon: BarChart3, label: "Performance Dashboard", page: "performance" },
    { icon: Monitor, label: "Integrated LMS", page: "lms" },
    { icon: Award, label: "Recognition & Rewards System", page: "recognition" },
    { icon: Lightbulb, label: "AI-Powered Insights", page: "insights" },
  ]

  const sidebarContent = (
    <div style={{ width: "280px", backgroundColor: "#f8fafc", padding: "24px", display: "flex", flexDirection: "column", gap: "8px", height: "100%", fontFamily: 'Montserrat, sans-serif' }}>
      {menuItems.map((item) => (
        <div
          key={item.page}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: activeItem === item.page ? "#e2e8f0" : "transparent",
            color: activeItem === item.page ? "#1f2937" : "#64748b",
            transition: "all 0.2s ease",
          }}
          onClick={() => {
            setActiveItem(item.page);
            onNavigate(item.page);
            if (isMobile) onClose?.();
          }}
          onMouseEnter={(e) => {
            if (activeItem !== item.page) {
              e.currentTarget.style.backgroundColor = "#f1f5f9"
            }
          }}
          onMouseLeave={(e) => {
            if (activeItem !== item.page) {
              e.currentTarget.style.backgroundColor = "transparent"
            }
          }}
        >
          <item.icon style={{ width: "20px", height: "20px" }} />
          <span style={{ fontSize: "14px", fontWeight: "500" }}>{item.label}</span>
        </div>
      ))}
    </div>
  )

  if (isMobile) {
    return (
      <>
        {isOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 50,
            }}
            onClick={onClose}
          />
        )}
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            height: "100vh",
            backgroundColor: "white",
            zIndex: 51,
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s ease",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              padding: "16px",
              borderBottom: "1px solid #e5e7eb",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "18px", fontWeight: "600", margin: 0, fontFamily: 'Montserrat, sans-serif' }}>Menu</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X style={{ width: "20px", height: "20px" }} />
            </Button>
          </div>
          {sidebarContent}
        </div>
      </>
    )
  }

  return sidebarContent
}

export default function App({ onNavigate }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(1200)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      setLoading(false)
      const handleResize = () => setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8fafc",
        fontFamily: 'Montserrat, sans-serif'
      }}>
        <div style={{ color: "#3b82f6", fontSize: "18px" }}>Loading...</div>
      </div>
    )
  }

  const isMobile = windowWidth < 1024
  const isTablet = windowWidth >= 768 && windowWidth < 1024

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", fontFamily: 'Montserrat, sans-serif' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #e5e7eb",
          padding: "16px 24px",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {/* Left side */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
                <Menu style={{ width: "20px", height: "20px" }} />
              </Button>
            )}

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#1f2937",
                  borderRadius: "4px",
                }}
              />
              <h1 style={{ fontSize: "20px", fontWeight: "600", margin: 0, color: '#000', fontFamily: 'Montserrat, sans-serif' }}>Admin</h1>
            </div>
          </div>


          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Button variant="ghost" size="icon">
              <Bell style={{ width: "20px", height: "20px" }} />
            </Button>
            <Avatar size={40} fallback="U">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="User avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </Avatar>
          </div>
        </div>
      </header>

      <div style={{ display: "flex", width: "100%" }}>
        {/* Desktop Sidebar */}
        {!isMobile && (
          <aside
            style={{
              width: "280px",
              backgroundColor: "white",
              borderRight: "1px solid #e5e7eb",
              height: "calc(100vh - 81px)",
              position: "sticky",
              top: "81px",
              overflowY: "auto",
              flexShrink: 0,
            }}
          >
            <Sidebar onNavigate={onNavigate} />
          </aside>
        )}

        {/* Mobile Sidebar */}
        {isMobile && sidebarOpen && (
          <div style={{ position: "fixed", inset: 0, zIndex: 50 }}>
            <Sidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              isMobile
              onNavigate={onNavigate}
            />
          </div>
        )}
        {/* Main Content */}
        <main
          style={{
            flex: 1,
            padding: isMobile ? "24px 16px" : "32px",
            backgroundColor: "#f8fafc",
            minHeight: "calc(100vh - 81px)",
            width: "100%",
            overflowX: "hidden",
            margin: "0 auto",
            maxWidth: "1920px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* Overview Header */}
            <h2
              style={{
                fontSize: isMobile ? "24px" : "32px",
                fontWeight: "700",
                color: "#1f2937",
                margin: 0,
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              Overview
            </h2>

            {/* Stats Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
                gap: "24px",
              }}
            >
              {[
                { title: "Total Teachers", value: "50" },
                { title: "Overworked Teachers", value: "10" },
                { title: "Teachers in Training", value: "5" },
                { title: "Teachers for Recognition", value: "3" },
              ].map((stat, index) => (
                <Card key={index} style={{ padding: "24px" }}>
                  <div style={{ marginBottom: "8px" }}>
                    <h3
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#64748b",
                        margin: 0,
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      {stat.title}
                    </h3>
                  </div>
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: "700",
                      color: "#1f2937",
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    {stat.value}
                  </div>
                </Card>
              ))}
            </div>

            {/* Workload Distribution Section */}
            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#1f2937",
                  marginBottom: "24px",
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Workload Distribution
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gap: "24px",
                }}
              >
                {/* Workload Distribution Chart */}
                <Card>
                  <div style={{ padding: "24px 24px 0 24px" }}>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#1f2937",
                        margin: 0,
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      Workload Distribution
                    </h4>
                  </div>
                  <WorkloadDistributionChart />
                </Card>

                {/* Performance Categories Chart */}
                <Card>
                  <div style={{ padding: "24px 24px 0 24px" }}>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#1f2937",
                        margin: 0,
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      Performance Categories
                    </h4>
                  </div>
                  <PerformanceCategoriesChart />
                </Card>
              </div>
            </div>

            {/* AI Insights Section */}
            <Card style={{ overflow: "hidden" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
                  gap: 0,
                }}
              >
                <div style={{ padding: "32px" }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#1f2937",
                      marginBottom: "8px",
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    3 Teachers at Risk of Burnout
                  </h3>
                  <p
                    style={{
                      color: "#64748b",
                      marginBottom: "24px",
                      lineHeight: "1.5",
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    Use AI Insights to identify and support teachers at risk of burnout.
                  </p>
                  <Button
                    variant="outline"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    View AI Insights
                    <ArrowRight style={{ width: "16px", height: "16px" }} />
                  </Button>
                </div>

                <div
                  style={{
                    background: "linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)",
                    padding: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: isMobile ? "200px" : "auto",
                  }}
                >
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #fb923c 0%, #f97316 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {/* Simple illustration placeholder */}
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Users style={{ width: "40px", height: "40px", color: "white" }} />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}