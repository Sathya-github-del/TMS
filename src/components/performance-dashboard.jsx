"use client"

import { useState } from "react"

const PerformanceDashboard = ({ onNavigate }) => {
  const [activeNav, setActiveNav] = useState("Performance Dashboard")

  const teacherData = [
    {
      id: 1,
      name: "Ms. Clara Bennett",
      rating: 4.8,
      reviews: 120,
      image: "/placeholder.svg?height=120&width=120",
      metrics: {
        engagementScore: "92/100",
        feedbackScore: "88/100",
        peerReviews: "4.5/5",
        lessonPlanQuality: "95/100",
      },
    },
    {
      id: 2,
      name: "Mr. Ethan Carter",
      rating: 4.5,
      reviews: 110,
      image: "/placeholder.svg?height=120&width=120",
      metrics: {
        engagementScore: "85/100",
        feedbackScore: "82/100",
        peerReviews: "4.2/5",
        lessonPlanQuality: "88/100",
      },
    },
    {
      id: 3,
      name: "Ms. Olivia Davis",
      rating: 4.7,
      reviews: 130,
      image: "/placeholder.svg?height=120&width=120",
      metrics: {
        engagementScore: "90/100",
        feedbackScore: "85/100",
        peerReviews: "4.6/5",
        lessonPlanQuality: "92/100",
      },
    },
    {
      id: 4,
      name: "Mr. Noah Evans",
      rating: 4.6,
      reviews: 105,
      image: "/placeholder.svg?height=120&width=120",
      metrics: {
        engagementScore: "88/100",
        feedbackScore: "84/100",
        peerReviews: "4.4/5",
        lessonPlanQuality: "90/100",
      },
    },
  ]

  const sidebarItems = [
    { icon: "🏠", label: "Dashboard", page: "dashboard" },
    { icon: "👥", label: "Teacher Bandwidth Tracker", page: "bandwidth" },
    { icon: "📊", label: "Performance Dashboard", page: "performance" },
    { icon: "📚", label: "Integrated LMS", page: "lms" },
    { icon: "🏆", label: "Recognition & Rewards System", page: "recognition" },
    { icon: "💡", label: "AI-Powered Insights", page: "insights" },
  ]

  const topNavItems = ["Home", "Teachers", "Students", "Reports"]

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Sidebar */}
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
        {/* Sidebar Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#1f2937",
              margin: "0",
            }}
          >
            Admin
          </h3>
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
                backgroundColor: item.page === "performance" ? "#eff6ff" : "transparent",
                borderRight: item.page === "performance" ? "3px solid #3b82f6" : "none",
                color: item.page === "performance" ? "#1d4ed8" : "#4b5563",
                fontWeight: item.page === "performance" ? "500" : "400",
              }}
              onClick={() => onNavigate(item.page)}
            >
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              <span style={{ fontSize: "14px" }}>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, overflow: "auto" }}>
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
              Teacher Performance Overview
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#6b7280",
                margin: "0",
              }}
            >
              Review and analyze teacher performance metrics across various key performance indicators (KPIs).
            </p>
          </div>

          {/* Performance Summary Section */}
          <div style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0",
              }}
            >
              Performance Summary
            </h2>
          </div>

          {/* Teacher Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            {teacherData.map((teacher) => (
              <div
                key={teacher.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "24px",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #f1f5f9",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "24px",
                    marginBottom: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Teacher Info */}
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        marginBottom: "4px",
                      }}
                    >
                      Overall Performance
                    </div>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#1f2937",
                        margin: "0 0 4px 0",
                      }}
                    >
                      {teacher.name}
                    </h3>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#3b82f6",
                      }}
                    >
                      Overall Rating: {teacher.rating} • {teacher.reviews} Reviews
                    </div>
                  </div>

                  {/* Teacher Photo */}
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "12px",
                      backgroundColor: "#f3f4f6",
                      backgroundImage: `url(${teacher.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      flexShrink: 0,
                    }}
                  ></div>
                </div>

                {/* Performance Metrics */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "16px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "14px", color: "#3b82f6" }}>Engagement Score</span>
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>
                      {teacher.metrics.engagementScore}
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "14px", color: "#3b82f6" }}>Feedback Score</span>
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>
                      {teacher.metrics.feedbackScore}
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "14px", color: "#3b82f6" }}>Peer Reviews</span>
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>
                      {teacher.metrics.peerReviews}
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "14px", color: "#3b82f6" }}>Lesson Plan Quality</span>
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>
                      {teacher.metrics.lessonPlanQuality}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download Report Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              style={{
                backgroundColor: "#1f2937",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "none",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#374151"
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#1f2937"
              }}
            >
              Download Report
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .sidebar {
              position: fixed;
              left: -280px;
              top: 0;
              height: 100vh;
              z-index: 1000;
              transition: left 0.3s ease;
            }
            .sidebar.open {
              left: 0;
            }
            .main-content {
              margin-left: 0;
            }
            .top-nav {
              flex-direction: column;
              gap: 16px;
              align-items: flex-start;
            }
            .nav-items {
              display: none;
            }
            .teacher-card {
              flex-direction: column;
            }
            .teacher-photo {
              width: 80px;
              height: 80px;
              align-self: center;
            }
          }
          
          @media (max-width: 480px) {
            .content-padding {
              padding: 16px;
            }
            .teacher-metrics {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  )
}

export default PerformanceDashboard
