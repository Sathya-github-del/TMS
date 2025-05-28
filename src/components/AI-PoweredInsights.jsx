"use client"

import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const AIInsightsDashboard = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("AI-Powered Insights")

  const sidebarItems = [
    { icon: "🏠", label: "Dashboard", page: "dashboard" },
    { icon: "👥", label: "Teacher Bandwidth Tracker", page: "bandwidth" },
    { icon: "📊", label: "Performance Dashboard", page: "performance" },
    { icon: "📚", label: "Integrated LMS", page: "lms" },
    { icon: "🏆", label: "Recognition & Rewards System", page: "recognition" },
    { icon: "💡", label: "AI-Powered Insights", page: "insights" },
  ]

  const topNavItems = [
    "Dashboard",
    "Teacher Bandwidth Tracker",
    "Performance Dashboard",
    "Integrated LMS",
    "Recognition & Rewards System",
    "AI-Powered Insights",
  ]

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate('/');
  };

  return (
    <main style={{ padding: "32px" }}>
      {/* Header with Logout */}
      <div style={{ 
        marginBottom: "32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1 style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#1f2937",
          margin: "0",
        }}>
          AI-Powered Insights
        </h1>
        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            borderRadius: "6px",
            border: "1px solid #ef4444",
            color: "#ef4444",
            background: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500"
          }}
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>

      {/* Burnout Risk Section */}
      <div style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Burnout Risk
        </h2>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "flex-start",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 12px 0",
              }}
            >
              Alert: Ms. Olivia shows signs of burnout.
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                margin: "0",
                lineHeight: "1.5",
              }}
            >
              Based on recent performance data and feedback, Ms. Olivia may be experiencing burnout. Consider
              offering support and resources.
            </p>
          </div>
          <div
            style={{
              width: "200px",
              height: "120px",
              borderRadius: "12px",
              backgroundColor: "#e5f3f0",
              backgroundImage: "url(/placeholder.svg?height=120&width=200)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexShrink: 0,
            }}
          ></div>
        </div>
      </div>

      {/* Career Path Suggestions */}
      <div style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Career Path Suggestions
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {/* Placeholder suggestion boxes */}
          {[1, 2].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                border: "2px dashed #e2e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "60px",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  border: "2px solid #d1d5db",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9ca3af",
                }}
              >
                ⌄
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Career Suggestion */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "flex-start",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 12px 0",
              }}
            >
              Suggested Growth Path: Curriculum Development Lead
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                margin: "0",
                lineHeight: "1.5",
              }}
            >
              This role offers a new challenge and allows Ms. Olivia to leverage her expertise in a different
              capacity.
            </p>
          </div>
          <div
            style={{
              width: "200px",
              height: "120px",
              borderRadius: "12px",
              backgroundColor: "#f5f1e8",
              backgroundImage: "url(/placeholder.svg?height=120&width=200)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexShrink: 0,
            }}
          ></div>
        </div>
      </div>

      {/* Staffing Optimization */}
      <div>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Staffing Optimization
        </h2>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "flex-start",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 12px 0",
              }}
            >
              Hire 1 more Science teacher for Grade 8.
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                margin: "0",
                lineHeight: "1.5",
              }}
            >
              Based on student-teacher ratio and class size projections, an additional Science teacher is
              recommended for Grade 8.
            </p>
          </div>
          <div
            style={{
              width: "200px",
              height: "120px",
              borderRadius: "12px",
              backgroundColor: "#f0f4f3",
              backgroundImage: "url(/placeholder.svg?height=120&width=200)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexShrink: 0,
            }}
          ></div>
        </div>
      </div>
    </main>
  )
}

export default AIInsightsDashboard
