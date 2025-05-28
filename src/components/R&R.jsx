"use client"

import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const RecognitionDashboard = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Recognition & Rewards System")

  const leaderboardData = [
    {
      rank: 1,
      teacher: "Ms. Harper",
      badge: "🌟",
      badgeColor: "#fbbf24",
    },
    {
      rank: 2,
      teacher: "Mr. Bennett",
      badge: "⭐",
      badgeColor: "#9ca3af",
    },
    {
      rank: 3,
      teacher: "Ms. Carter",
      badge: "⭐",
      badgeColor: "#92400e",
    },
    {
      rank: 4,
      teacher: "Mr. Davis",
      badge: "⭐",
      badgeColor: "#0891b2",
    },
    {
      rank: 5,
      teacher: "Ms. Evans",
      badge: "⭐",
      badgeColor: "#059669",
    },
  ]

  const kudosWall = [
    {
      title: "Great Job!",
      giver: "Ms. Harper",
      receiver: "Mr. Bennett",
    },
    {
      title: "Excellent Work!",
      giver: "Mr. Davis",
      receiver: "Ms. Carter",
    },
    {
      title: "Outstanding Performance!",
      giver: "Ms. Evans",
      receiver: "Ms. Harper",
    },
  ]

  const achievementsTimeline = [
    {
      teacher: "Ms. Harper",
      achievement: "100 Kudos Received",
      icon: "🌟",
      color: "#fbbf24",
    },
    {
      teacher: "Mr. Bennett",
      achievement: "50 Kudos Given",
      icon: "⭐",
      color: "#9ca3af",
    },
    {
      teacher: "Ms. Carter",
      achievement: "25 Kudos Received",
      icon: "⭐",
      color: "#92400e",
    },
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
          Teacher Recognition and Rewards
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

      {/* Leaderboard */}
      <div style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Leaderboard
        </h2>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
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
                      padding: "16px 24px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    Rank
                  </th>
                  <th
                    style={{
                      padding: "16px 24px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    Teacher
                  </th>
                  <th
                    style={{
                      padding: "16px 24px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    Badges
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((item, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: index < leaderboardData.length - 1 ? "1px solid #f1f5f9" : "none",
                    }}
                  >
                    <td style={{ padding: "16px 24px", fontSize: "14px", color: "#3b82f6", fontWeight: "500" }}>
                      {item.rank}
                    </td>
                    <td style={{ padding: "16px 24px", fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>
                      {item.teacher}
                    </td>
                    <td style={{ padding: "16px 24px" }}>
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          backgroundColor: item.badgeColor,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "16px",
                        }}
                      >
                        {item.badge}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Kudos Wall */}
      <div style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Kudos Wall
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {kudosWall.map((kudos, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0 0 8px 0",
                }}
              >
                {kudos.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#3b82f6",
                  margin: "0",
                }}
              >
                {kudos.giver} gave Kudos to {kudos.receiver}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Timeline */}
      <div style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Achievements Timeline
        </h2>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {achievementsTimeline.map((achievement, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 0",
                borderBottom: index < achievementsTimeline.length - 1 ? "1px solid #f1f5f9" : "none",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: achievement.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  flexShrink: 0,
                }}
              >
                {achievement.icon}
              </div>
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1f2937",
                  }}
                >
                  {achievement.teacher} - {achievement.achievement}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher of the Month */}
      <div>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Teacher of the Month
        </h2>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "250px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 8px 0",
              }}
            >
              Ms. Harper
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                margin: "0",
                lineHeight: "1.5",
              }}
            >
              Recommended by AI for outstanding student engagement and positive feedback.
            </p>
          </div>
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "12px",
              backgroundColor: "#f3f4f6",
              backgroundImage: "url(/placeholder.svg?height=120&width=120)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexShrink: 0,
            }}
          ></div>
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
            .content-padding {
              padding: 16px;
            }
            .teacher-of-month {
              flex-direction: column;
              text-align: center;
            }
            .teacher-photo {
              width: 100px;
              height: 100px;
            }
          }
          
          @media (max-width: 480px) {
            .table-container {
              font-size: 12px;
            }
            .kudos-card {
              padding: 16px;
            }
            .achievement-item {
              flex-direction: column;
              align-items: flex-start;
              gap: 8px;
            }
          }
        `}
      </style>
    </main>
  )
}

export default RecognitionDashboard
