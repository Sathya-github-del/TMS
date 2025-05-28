import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import {
  Users,
  ArrowRight,
  BarChart3,
  Lightbulb,
  Award,
  BookOpen,
} from 'lucide-react';

// Import the chart components from Dashboard.jsx
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
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
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
              />
            )
          })}
        </svg>
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "20px", fontWeight: "700", color: "#1f2937" }}>{total}%</div>
          <div style={{ fontSize: "12px", color: "#64748b" }}>Total</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: item.color
            }} />
            <span style={{ fontSize: "14px", color: "#64748b" }}>
              {item.label} ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Performance Categories Chart
const PerformanceCategoriesChart = () => {
  const data = [
    { label: "Exceeding", value: 35, color: "#10b981" },
    { label: "Meeting", value: 55, color: "#3b82f6" },
    { label: "Needs Help", value: 20, color: "#f59e0b" },
  ]

  return (
    <div style={{ padding: "20px" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
        height: "200px"
      }}>
        {data.map((item, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}>
              {item.value}%
            </div>
            <div style={{
              width: "48px",
              height: `${item.value * 2}px`,
              backgroundColor: item.color,
              borderRadius: "4px 4px 0 0",
              transition: "all 0.3s ease"
            }} />
            <div style={{
              marginTop: "8px",
              fontSize: "12px",
              color: "#64748b",
              maxWidth: "80px"
            }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Card Component
const Card = ({ children, style = {}, ...props }) => (
  <div style={{
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    ...style
  }} {...props}>
    {children}
  </div>
)

// Feature Card Component
const FeatureCard = ({ icon, title, description, color }) => (
  <Card style={{
    padding: "24px",
    backgroundColor: color,
    cursor: "pointer",
    border: "none"
  }}
  onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
  onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
  >
    <div style={{
      width: "48px",
      height: "48px",
      borderRadius: "12px",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px"
    }}>
      {icon}
    </div>
    <h3 style={{
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "8px"
    }}>
      {title}
    </h3>
    <p style={{
      fontSize: "14px",
      color: "#4b5563",
      margin: 0
    }}>
      {description}
    </p>
  </Card>
)

export default function DefaultAdminDashboard() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", padding: "32px" }}>
      {/* Header */}
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "48px"
      }}>
        {/* Navigation */}
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h1 style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#1f2937"
          }}>
            TMS Dashboard
          </h1>
          <div style={{ display: "flex", gap: "16px" }}>
            <button onClick={() => navigate('/login')} style={{
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              Admin Login <ArrowRight size={16} />
            </button>
            <button onClick={() => navigate('/teacher-login')} style={{
              backgroundColor: "white",
              color: "#3b82f6",
              border: "1px solid #3b82f6",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              Teacher Login <ArrowRight size={16} />
            </button>
          </div>
        </nav>

        {/* Stats Overview */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
          gap: "24px"
        }}>
          {[
            { title: "Total Teachers", value: "50+" },
            { title: "Active Courses", value: "25+" },
            { title: "Average Rating", value: "4.8" },
            { title: "Success Rate", value: "95%" }
          ].map((stat, index) => (
            <Card key={index} style={{ padding: "24px" }}>
              <h3 style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "8px"
              }}>
                {stat.title}
              </h3>
              <div style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#1f2937"
              }}>
                {stat.value}
              </div>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: "24px"
        }}>
          <Card>
            <div style={{ padding: "24px" }}>
              <h3 style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1f2937",
                marginBottom: "16px"
              }}>
                Workload Distribution
              </h3>
              <WorkloadDistributionChart />
            </div>
          </Card>
          <Card>
            <div style={{ padding: "24px" }}>
              <h3 style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1f2937",
                marginBottom: "16px"
              }}>
                Performance Overview
              </h3>
              <PerformanceCategoriesChart />
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: "24px"
        }}>
          <FeatureCard
            icon={<Users size={24} color="#3b82f6" />}
            title="Teacher Management"
            description="Comprehensive teacher workload and performance tracking"
            color="#dbeafe"
          />
          <FeatureCard
            icon={<BarChart3 size={24} color="#10b981" />}
            title="Analytics Dashboard"
            description="Detailed insights and performance metrics"
            color="#d1fae5"
          />
          <FeatureCard
            icon={<Lightbulb size={24} color="#f59e0b" />}
            title="AI-Powered Insights"
            description="Smart recommendations and predictive analytics"
            color="#fef3c7"
          />
        </div>

        {/* Call to Action */}
        <Card style={{
          padding: "48px",
          textAlign: "center",
          background: "linear-gradient(to right, #3b82f6, #2563eb)"
        }}>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "white",
            marginBottom: "16px"
          }}>
            Ready to Transform Your School?
          </h2>
          <p style={{
            fontSize: "18px",
            color: "#e0e7ff",
            marginBottom: "32px"
          }}>
            Get started with our comprehensive teacher management system
          </p>
          <button
            onClick={() => navigate('/login')}
            style={{
              backgroundColor: "white",
              color: "#3b82f6",
              border: "none",
              padding: "16px 32px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Get Started Now
          </button>
        </Card>
      </div>
    </div>
  );
}
