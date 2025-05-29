"use client"

import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import {
  LogOut,
  AlertTriangle,
  TrendingUp,
  BrainCircuit,
  Users,
  Target,
  ArrowRight,
  ChartBar,
  Lightbulb
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Card Component
const Card = ({ children, style = {}, ...props }) => (
  <div style={{
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    ...style
  }} {...props}>
    {children}
  </div>
);

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

  // Add insight metrics
  const insightMetrics = [
    {
      title: "At-Risk Teachers",
      value: "3",
      trend: "+1",
      icon: <AlertTriangle size={24} />,
      color: "#ef4444"
    },
    {
      title: "Growth Opportunities",
      value: "12",
      trend: "+4",
      icon: <TrendingUp size={24} />,
      color: "#10b981"
    },
    {
      title: "Staffing Needs",
      value: "2",
      icon: <Users size={24} />,
      color: "#3b82f6"
    },
    {
      title: "AI Recommendations",
      value: "8",
      trend: "+3",
      icon: <BrainCircuit size={24} />,
      color: "#8b5cf6"
    }
  ];

  // Add teacher performance data
  const performanceData = [
    { month: 'Jan', score: 85 },
    { month: 'Feb', score: 82 },
    { month: 'Mar', score: 88 },
    { month: 'Apr', score: 86 },
    { month: 'May', score: 89 },
    { month: 'Jun', score: 85 }
  ];

  return (
    <main style={{ padding: "32px", backgroundColor: "#f8fafc" }}>
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

      {/* Insight Metrics */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "24px",
        marginBottom: "32px"
      }}>
        {insightMetrics.map((metric, index) => (
          <Card key={index}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px"
            }}>
              <div style={{
                padding: "12px",
                borderRadius: "12px",
                backgroundColor: `${metric.color}15`,
                color: metric.color
              }}>
                {metric.icon}
              </div>
              {metric.trend && (
                <div style={{
                  padding: "4px 12px",
                  borderRadius: "999px",
                  backgroundColor: "#f0fdf4",
                  color: "#16a34a",
                  fontSize: "14px"
                }}>
                  {metric.trend}
                </div>
              )}
            </div>
            <h3 style={{
              fontSize: "14px",
              color: "#6b7280",
              marginBottom: "8px"
            }}>
              {metric.title}
            </h3>
            <div style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#1f2937"
            }}>
              {metric.value}
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "24px",
        marginBottom: "32px"
      }}>
        {/* Left Column - Performance Trends */}
        <Card>
          <h2 style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#1f2937",
            marginBottom: "24px"
          }}>
            Performance Trends & Predictions
          </h2>
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Right Column - Quick Actions */}
        <Card>
          <h2 style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#1f2937",
            marginBottom: "24px"
          }}>
            Quick Actions
          </h2>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}>
            {[
              { icon: <Target size={20} />, label: "View At-Risk Teachers" },
              { icon: <ChartBar size={20} />, label: "Review Performance Metrics" },
              { icon: <Lightbulb size={20} />, label: "Get AI Recommendations" }
            ].map((action, index) => (
              <button key={index} style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                backgroundColor: "#f8fafc",
                border: "none",
                borderRadius: "8px",
                color: "#1f2937",
                cursor: "pointer",
                transition: "all 0.2s",
                fontSize: "14px",
                fontWeight: "500"
              }}>
                {action.icon}
                {action.label}
                <ArrowRight size={16} style={{ marginLeft: "auto" }} />
              </button>
            ))}
          </div>
        </Card>
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
          {/* Current Role Dropdown */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#4b5563",
              }}
            >
              Current Role
            </label>
            <select
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
                color: "#1f2937",
              }}
            >
              <option value="">Select current role</option>
              <option value="teacher">Teacher</option>
              <option value="seniorTeacher">Senior Teacher</option>
              <option value="departmentHead">Department Head</option>
            </select>
          </div>

          {/* Career Interest Dropdown */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#4b5563",
              }}
            >
              Career Interest
            </label>
            <select
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
                color: "#1f2937",
              }}
            >
              <option value="">Select area of interest</option>
              <option value="curriculum">Curriculum Development</option>
              <option value="administration">Administration</option>
              <option value="coaching">Teacher Coaching</option>
              <option value="technology">Educational Technology</option>
            </select>
          </div>
        </div>

        {/* Detailed Career Suggestion - Made Clickable */}
        <div
          onClick={() => alert("Opening detailed career path information")}
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "flex-start",
            gap: "24px",
            flexWrap: "wrap",
            cursor: "pointer",
            transition: "transform 0.2s",
            ':hover': {
              transform: "scale(1.01)",
            }
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
  );
};

export default AIInsightsDashboard;
