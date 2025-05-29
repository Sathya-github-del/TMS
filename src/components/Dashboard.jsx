"use client"

import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import {
  Users,
  BarChart3,
  LogOut,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  GraduationCap,
  ArrowRight,
  Award
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  BookOpenIcon,
  TrophyIcon,
  LightBulbIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'

// Enhanced Workload Distribution Chart Component
const WorkloadDistributionChart = () => {
  const data = [
    { name: "High", value: 25, color: "#ef4444" },
    { name: "Medium", value: 45, color: "#f59e0b" },
    { name: "Low", value: 30, color: "#10b981" },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: '12px', fontWeight: '500' }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          backgroundColor: 'white',
          padding: '8px 12px',
          border: '1px solid #e5e7eb',
          borderRadius: '6px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            color: payload[0].payload.color,
            fontWeight: '600',
            fontSize: '14px'
          }}>
            {payload[0].name}: {payload[0].value}%
          </div>
          <div style={{
            fontSize: '12px',
            color: '#6b7280',
            marginTop: '4px'
          }}>
            {payload[0].value} teachers
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            animationDuration={1000}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                style={{
                  filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              paddingTop: '20px',
              fontSize: '14px',
              fontFamily: 'Montserrat, sans-serif'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// Enhanced Performance Categories Chart Component
const PerformanceCategoriesChart = () => {
  const data = [
    {
      category: "Exceeding",
      value: 35,
      totalTeachers: 12,
      color: "#10b981",
      description: "Exceeding Expectations"
    },
    {
      category: "Meeting",
      value: 55,
      totalTeachers: 18,
      color: "#3b82f6",
      description: "Meeting Expectations"
    },
    {
      category: "Needs",
      value: 20,
      totalTeachers: 6,
      color: "#f59e0b",
      description: "Needs Improvement"
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{
          backgroundColor: 'white',
          padding: '12px',
          border: '1px solid #e5e7eb',
          borderRadius: '6px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            color: data.color,
            fontWeight: '600',
            marginBottom: '4px'
          }}>
            {data.description}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280'
          }}>
            {data.totalTeachers} teachers ({data.value}%)
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ padding: "20px", height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          barSize={40}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f1f5f9"
          />
          <XAxis
            dataKey="category"
            axisLine={false}
            tickLine={false}
            stroke="#94a3b8"
            fontSize={12}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            stroke="#94a3b8"
            fontSize={12}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'transparent' }}
          />
          <Bar
            dataKey="value"
            radius={[4, 4, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                style={{
                  filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
                  cursor: 'pointer'
                }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
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

// Updated Dashboard Component
export default function Dashboard() {
  const navigate = useNavigate();
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

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate('/');
  };

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

  const statsData = [
    {
      title: "Total Teachers",
      value: "50",
      icon: <Users size={24} color="#3b82f6" />,
      change: "+5",
      trend: "up",
      color: "#3b82f6",
      bgColor: "#eff6ff",
      detail: "Active faculty members"
    },
    {
      title: "Overworked Teachers",
      value: "10",
      icon: <AlertTriangle size={24} color="#ef4444" />,
      change: "-2",
      trend: "down",
      color: "#ef4444",
      bgColor: "#fef2f2",
      detail: "Above optimal workload"
    },
    {
      title: "Teachers in Training",
      value: "5",
      icon: <GraduationCap size={24} color="#10b981" />,
      change: "+2",
      trend: "up",
      color: "#10b981",
      bgColor: "#f0fdf4",
      detail: "Professional development"
    },
    {
      title: "Teachers for Recognition",
      value: "3",
      icon: <Award size={24} color="#f59e0b" />,
      change: "+1",
      trend: "up",
      color: "#f59e0b",
      bgColor: "#fefce8",
      detail: "Outstanding performance"
    }
  ];

  const sidebarItems = [
    { icon: <HomeIcon className="h-5 w-5" />, label: "Dashboard", page: "dashboard" },
    { icon: <UsersIcon className="h-5 w-5" />, label: "Teacher Bandwidth", page: "bandwidth" },
    { icon: <ChartBarIcon className="h-5 w-5" />, label: "Performance", page: "performance" },
    { icon: <BookOpenIcon className="h-5 w-5" />, label: "Integrated LMS", page: "lms" },
    { icon: <TrophyIcon className="h-5 w-5" />, label: "Recognition", page: "recognition" },
    { icon: <LightBulbIcon className="h-5 w-5" />, label: "AI Insights", page: "insights" }
  ];

  return (
    <main style={{ padding: "32px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {/* Overview Header with Logout */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h2 style={{
            fontSize: isMobile ? "24px" : "32px",
            fontWeight: "700",
            color: "#1f2937",
            margin: 0,
            fontFamily: 'Montserrat, sans-serif'
          }}>
            Overview
          </h2>
          <Button
            onClick={handleLogout}
            variant="outline"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#ef4444",
              borderColor: "#ef4444"
            }}
          >
            <LogOut size={16} />
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: "24px",
        }}>
          {statsData.map((stat, index) => (
            <Card
              key={index}
              style={{
                padding: "24px",
                transition: "all 0.2s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }
              }}
              onClick={() => console.log(`Clicked ${stat.title}`)}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "16px"
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: stat.bgColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  backgroundColor: stat.trend === "up" ? "#f0fdf4" : "#fef2f2",
                  padding: "4px 8px",
                  borderRadius: "9999px",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: stat.trend === "up" ? "#16a34a" : "#dc2626"
                }}>
                  {stat.trend === "up" ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {stat.change}
                </div>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <h3 style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#6b7280",
                  margin: "0 0 4px 0",
                }}>
                  {stat.title}
                </h3>
                <div style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#1f2937",
                  lineHeight: "1.2"
                }}>
                  {stat.value}
                </div>
              </div>
              <div style={{
                fontSize: "13px",
                color: "#6b7280",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}>
                {stat.detail}
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
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
            gap: "24px"
          }}>
            <div style={{ padding: "32px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px"
              }}>
                <div style={{
                  backgroundColor: "#fef2f2",
                  padding: "8px",
                  borderRadius: "50%"
                }}>
                  <AlertTriangle size={24} color="#dc2626" />
                </div>
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#1f2937",
                  margin: 0
                }}>
                  3 Teachers at Risk of Burnout
                </h3>
              </div>

              {/* Teacher Risk List */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "24px"
              }}>
                {/*
                  Teacher data can be mapped here. This is just static data for illustration.
                */}
                {/*
                  { name: "Sarah Johnson", department: "Science", risk: "High", workload: "45hrs/week" },
                  { name: "Michael Chen", department: "Mathematics", risk: "Medium", workload: "42hrs/week" },
                  { name: "Emma Davis", department: "English", risk: "Medium", workload: "40hrs/week" },
                */}
                {/*
                  Sample static data for illustration
                */}
                {["Sarah Johnson", "Michael Chen", "Emma Davis"].map((name, index) => (
                  <div key={index} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "12px",
                    backgroundColor: "#fafafa",
                    borderRadius: "8px",
                    border: "1px solid #f3f4f6"
                  }}>
                    <div style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#e5e7eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#4b5563"
                    }}>
                      {name.charAt(0)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#1f2937",
                        marginBottom: "4px"
                      }}>
                        {name}
                      </div>
                      <div style={{
                        fontSize: "12px",
                        color: "#6b7280"
                      }}>
                        Science • 45hrs/week
                      </div>
                    </div>
                    <div style={{
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      fontSize: "12px",
                      fontWeight: "500",
                      backgroundColor: "#fef2f2",
                      color: "#dc2626"
                    }}>
                      High Risk
                    </div>
                  </div>
                ))}
              </div>

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

            <div style={{
              background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "16px"
            }}>
              <div style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "16px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "8px"
                }}>
                  <TrendingUp size={20} color="#16a34a" />
                  <span style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#1f2937"
                  }}>
                    Recommended Actions
                  </span>
                </div>
                <ul style={{
                  margin: "0",
                  padding: "0 0 0 16px",
                  fontSize: "13px",
                  color: "#4b5563"
                }}>
                  <li>Schedule wellness check-ins</li>
                  <li>Review workload distribution</li>
                  <li>Offer support resources</li>
                </ul>
              </div>

              <div style={{
                textAlign: "center",
                padding: "16px",
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: "12px"
              }}>
                <div style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#92400e",
                  marginBottom: "4px"
                }}>
                  42hrs
                </div>
                <div style={{
                  fontSize: "14px",
                  color: "#92400e"
                }}>
                  Average Weekly Workload
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}