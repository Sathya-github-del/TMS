"use client"

import { useState } from "react"

const TeacherProfile = () => {
  const [activeNav, setActiveNav] = useState("Overview")

  const sidebarItems = [
    { icon: "📊", label: "Overview", active: true },
    { icon: "💼", label: "Workload", active: false },
    { icon: "📈", label: "Performance", active: false },
    { icon: "💬", label: "Feedback", active: false },
  ]

  const courseData = [
    {
      name: "Advanced Biology",
      status: "Completed",
      progress: 100,
      statusColor: "#10b981",
    },
    {
      name: "Chemistry 101",
      status: "In Progress",
      progress: 65,
      statusColor: "#3b82f6",
    },
    {
      name: "Physics Fundamentals",
      status: "Not Started",
      progress: 0,
      statusColor: "#6b7280",
    },
  ]

  const recognitions = [
    {
      icon: "🏆",
      title: "Teacher of the Year 2022",
      description: "Awarded for excellence in teaching",
    },
    {
      icon: "💡",
      title: "Innovation in Education Award",
      description: "Recognized for innovative teaching methods",
    },
  ]

  const suggestedSteps = [
    {
      icon: "❤️",
      text: "Encourage participation in wellness programs",
    },
    {
      icon: "👥",
      text: "Provide mentorship opportunities",
    },
    {
      icon: "📚",
      text: "Offer professional development in stress management",
    },
  ]

  // Simple line chart data points for KPI visualization
  const kpiDataPoints = [
    { month: "Jan", value: 75 },
    { month: "Feb", value: 82 },
    { month: "Mar", value: 78 },
    { month: "Apr", value: 85 },
    { month: "May", value: 88 },
    { month: "Jun", value: 72 },
    { month: "Jul", value: 85 },
  ]

  const createSVGPath = (points, width, height) => {
    const maxValue = Math.max(...points.map((p) => p.value))
    const minValue = Math.min(...points.map((p) => p.value))
    const range = maxValue - minValue || 1

    const pathData = points
      .map((point, index) => {
        const x = (index / (points.length - 1)) * width
        const y = height - ((point.value - minValue) / range) * height
        return `${index === 0 ? "M" : "L"} ${x} ${y}`
      })
      .join(" ")

    return pathData
  }

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Left Sidebar */}
      <div
        style={{
          width: "280px",
          backgroundColor: "white",
          borderRight: "1px solid #e2e8f0",
          padding: "0",
          flexShrink: 0,
          display: "block",
        }}
      >
        {/* Logo/Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#1f2937",
              transform: "rotate(45deg)",
            }}
          ></div>
          <span
            style={{
              fontWeight: "600",
              fontSize: "18px",
              color: "#1f2937",
            }}
          >
            Admin
          </span>
        </div>

        {/* Navigation Menu */}
        <nav style={{ padding: "16px 0" }}>
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "12px 24px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                backgroundColor: item.active ? "#eff6ff" : "transparent",
                borderRight: item.active ? "3px solid #3b82f6" : "none",
                color: item.active ? "#1d4ed8" : "#4b5563",
                fontWeight: item.active ? "500" : "400",
              }}
              onClick={() => setActiveNav(item.label)}
            >
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              <span style={{ fontSize: "14px" }}>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, overflow: "auto", display: "flex" }}>
        {/* Center Content */}
        <div style={{ flex: 1, padding: "0" }}>
          {/* Top Navigation */}
          <div
            style={{
              backgroundColor: "white",
              padding: "16px 32px",
              borderBottom: "1px solid #e2e8f0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
            </div>

            {/* User Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              {/* Notification Bell */}
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                  color: "#6b7280",
                }}
              >
                🔔
              </div>

              {/* User Avatar */}
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#f3f4f6",
                  backgroundImage: "url(/placeholder.svg?height=32&width=32)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                }}
              ></div>
            </div>
          </div>

          {/* Content Area */}
          <div style={{ padding: "32px" }}>
            {/* Header */}
            <div style={{ marginBottom: "32px" }}>
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#1f2937",
                  margin: "0 0 8px 0",
                }}
              >
                Teacher Profile
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: "#6b7280",
                  margin: "0",
                }}
              >
                View detailed information about a specific teacher.
              </p>
            </div>

            {/* Teacher Profile Card */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "32px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                marginBottom: "32px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#f3f4f6",
                  backgroundImage: "url(/placeholder.svg?height=80&width=80)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  margin: "0 auto 16px auto",
                }}
              ></div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0 0 4px 0",
                }}
              >
                Ms. Evelyn Reed
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#6b7280",
                  margin: "0 0 4px 0",
                }}
              >
                Science Teacher
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#9ca3af",
                  margin: "0",
                }}
              >
                Joined 2018
              </p>
            </div>

            {/* Workload Breakdown */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                marginBottom: "32px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0 0 24px 0",
                }}
              >
                Workload Breakdown
              </h3>

              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    marginBottom: "8px",
                  }}
                >
                  Workload Distribution
                </div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "700",
                    color: "#1f2937",
                    marginBottom: "4px",
                  }}
                >
                  100%
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  Current
                </div>
              </div>

              {/* Simple Bar Chart */}
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                  gap: "16px",
                  height: "120px",
                  marginBottom: "16px",
                }}
              >
                {[
                  { label: "Teaching", height: "80%", color: "#3b82f6" },
                  { label: "Lesson Planning", height: "60%", color: "#8b5cf6" },
                  { label: "Grading", height: "45%", color: "#06b6d4" },
                  { label: "Meetings", height: "30%", color: "#10b981" },
                ].map((bar, index) => (
                  <div key={index} style={{ textAlign: "center", flex: 1 }}>
                    <div
                      style={{
                        height: bar.height,
                        backgroundColor: bar.color,
                        borderRadius: "4px",
                        marginBottom: "8px",
                        minHeight: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        fontWeight: "500",
                      }}
                    >
                      {bar.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* KPI Scores Over Time */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                marginBottom: "32px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0 0 24px 0",
                }}
              >
                KPI Scores Over Time
              </h3>

              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    marginBottom: "8px",
                  }}
                >
                  KPI Scores
                </div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "700",
                    color: "#1f2937",
                    marginBottom: "4px",
                  }}
                >
                  85
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  Last 12 Months
                </div>
              </div>

              {/* Simple Line Chart */}
              <div style={{ height: "120px", position: "relative" }}>
                <svg width="100%" height="100%" style={{ overflow: "visible" }}>
                  <path
                    d={createSVGPath(kpiDataPoints, 300, 80)}
                    stroke="#3b82f6"
                    strokeWidth="2"
                    fill="none"
                    style={{ transform: "translate(0, 10px)" }}
                  />
                </svg>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "8px",
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  {kpiDataPoints.map((point, index) => (
                    <span key={index}>{point.month}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                marginBottom: "32px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0 0 24px 0",
                }}
              >
                Courses
              </h3>

              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "500px",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "#f8fafc" }}>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#374151",
                          borderBottom: "1px solid #e2e8f0",
                        }}
                      >
                        Course Name
                      </th>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#374151",
                          borderBottom: "1px solid #e2e8f0",
                        }}
                      >
                        Status
                      </th>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#374151",
                          borderBottom: "1px solid #e2e8f0",
                        }}
                      >
                        Progress
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseData.map((course, index) => (
                      <tr
                        key={index}
                        style={{
                          borderBottom: index < courseData.length - 1 ? "1px solid #f1f5f9" : "none",
                        }}
                      >
                        <td style={{ padding: "16px", fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>
                          {course.name}
                        </td>
                        <td style={{ padding: "16px", fontSize: "14px", color: course.statusColor }}>
                          {course.status}
                        </td>
                        <td style={{ padding: "16px" }}>
                          <div
                            style={{
                              width: "100%",
                              height: "8px",
                              backgroundColor: "#f1f5f9",
                              borderRadius: "4px",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                width: `${course.progress}%`,
                                height: "100%",
                                backgroundColor: course.statusColor,
                                borderRadius: "4px",
                              }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recognitions */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0 0 24px 0",
                }}
              >
                Recognitions
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {recognitions.map((recognition, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px 0",
                      borderBottom: index < recognitions.length - 1 ? "1px solid #f1f5f9" : "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "24px",
                        flexShrink: 0,
                      }}
                    >
                      {recognition.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "#1f2937",
                          marginBottom: "4px",
                        }}
                      >
                        {recognition.title}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#6b7280",
                        }}
                      >
                        {recognition.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          style={{
            width: "320px",
            backgroundColor: "white",
            borderLeft: "1px solid #e2e8f0",
            padding: "32px 24px",
            flexShrink: 0,
          }}
        >
          {/* Burnout Risk */}
          <div style={{ marginBottom: "32px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 24px 0",
              }}
            >
              Burnout Risk
            </h3>

            <div style={{ marginBottom: "16px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1f2937",
                  }}
                >
                  Moderate Risk
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#f59e0b",
                  }}
                >
                  60%
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  backgroundColor: "#f1f5f9",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "60%",
                    height: "100%",
                    backgroundColor: "#f59e0b",
                    borderRadius: "4px",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Suggested Next Steps */}
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 24px 0",
              }}
            >
              Suggested Next Steps
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {suggestedSteps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "12px 0",
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {step.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#4b5563",
                      lineHeight: "1.5",
                    }}
                  >
                    {step.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 1024px) {
            .right-sidebar {
              display: none;
            }
          }
          
          @media (max-width: 768px) {
            .left-sidebar {
              position: fixed;
              left: -280px;
              top: 0;
              height: 100vh;
              z-index: 1000;
              transition: left 0.3s ease;
            }
            .left-sidebar.open {
              left: 0;
            }
            .main-content {
              margin-left: 0;
            }
            .content-padding {
              padding: 16px;
            }
            .top-nav {
              flex-direction: column;
              gap: 16px;
              align-items: flex-start;
            }
            .nav-items {
              display: none;
            }
          }
          
          @media (max-width: 480px) {
            .teacher-profile-card {
              padding: 20px;
            }
            .chart-container {
              height: 80px;
            }
            .table-container {
              font-size: 12px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default TeacherProfile
