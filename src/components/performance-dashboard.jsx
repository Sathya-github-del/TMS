"use client"

import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const PerformanceDashboard = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Performance Dashboard")
  const [expandedCard, setExpandedCard] = useState(null)

  const teacherData = [
    {
      id: 1,
      name: "Ms. Clara Bennett",
      rating: 4.8,
      reviews: 120,
      image: "https://placehold.co/600x400",
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
      image: "https://placehold.co/600x400",
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
      image: "https://placehold.co/600x400",
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
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "88/100",
        feedbackScore: "84/100",
        peerReviews: "4.4/5",
        lessonPlanQuality: "90/100",
      },
    },
    {
      id: 5,
      name: "Ms. Sophie Wright",
      rating: 4.9,
      reviews: 145,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "94/100",
        feedbackScore: "91/100",
        peerReviews: "4.8/5",
        lessonPlanQuality: "96/100",
      },
    },
    {
      id: 6,
      name: "Mr. James Anderson",
      rating: 4.7,
      reviews: 98,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "89/100",
        feedbackScore: "87/100",
        peerReviews: "4.5/5",
        lessonPlanQuality: "91/100",
      },
    },
    {
      id: 7,
      name: "Dr. Emma Thompson",
      rating: 4.8,
      reviews: 156,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "93/100",
        feedbackScore: "90/100",
        peerReviews: "4.7/5",
        lessonPlanQuality: "94/100",
      },
    },
    {
      id: 8,
      name: "Mr. William Chen",
      rating: 4.6,
      reviews: 112,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "87/100",
        feedbackScore: "85/100",
        peerReviews: "4.4/5",
        lessonPlanQuality: "89/100",
      },
    },
    {
      id: 9,
      name: "Ms. Isabella Martinez",
      rating: 4.9,
      reviews: 134,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "95/100",
        feedbackScore: "92/100",
        peerReviews: "4.8/5",
        lessonPlanQuality: "97/100",
      },
    },
    {
      id: 10,
      name: "Mr. Daniel Kim",
      rating: 4.7,
      reviews: 108,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "88/100",
        feedbackScore: "86/100",
        peerReviews: "4.5/5",
        lessonPlanQuality: "90/100",
      },
    },
    {
      id: 11,
      name: "Ms. Rachel Green",
      rating: 4.8,
      reviews: 142,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "91/100",
        feedbackScore: "89/100",
        peerReviews: "4.6/5",
        lessonPlanQuality: "93/100",
      },
    },
    {
      id: 12,
      name: "Mr. Michael Scott",
      rating: 4.5,
      reviews: 95,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "86/100",
        feedbackScore: "83/100",
        peerReviews: "4.3/5",
        lessonPlanQuality: "87/100",
      },
    },
    {
      id: 13,
      name: "Dr. Sarah Johnson",
      rating: 4.9,
      reviews: 168,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "96/100",
        feedbackScore: "93/100",
        peerReviews: "4.9/5",
        lessonPlanQuality: "98/100",
      },
    },
    {
      id: 14,
      name: "Mr. David Wilson",
      rating: 4.7,
      reviews: 115,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "90/100",
        feedbackScore: "88/100",
        peerReviews: "4.6/5",
        lessonPlanQuality: "92/100",
      },
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
        alignItems: "flex-start"
      }}>
        <div>
          <h1 style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1f2937",
            margin: "0 0 8px 0",
          }}>
            Teacher Performance Overview
          </h1>
          <p style={{
            fontSize: "16px",
            color: "#6b7280",
            margin: "0",
          }}>
            Review and analyze teacher performance metrics.
          </p>
        </div>
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

      {/* Teacher Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
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
              padding: "20px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              border: "1px solid #f1f5f9",
              cursor: "pointer",
              transition: "all 0.3s ease",
              transform: expandedCard === teacher.id ? "scale(1.02)" : "scale(1)",
            }}
            onClick={() => setExpandedCard(expandedCard === teacher.id ? null : teacher.id)}
          >
            <div style={{ display: "flex", gap: "16px", marginBottom: expandedCard === teacher.id ? "16px" : "0" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "8px",
                  backgroundColor: "#f3f4f6",
                  backgroundImage: `url(${teacher.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  flexShrink: 0,
                }}
              />
              <div>
                <h3 style={{ margin: "0 0 4px 0", fontSize: "16px", fontWeight: "600" }}>
                  {teacher.name}
                </h3>
                <div style={{ fontSize: "14px", color: "#3b82f6", marginBottom: "4px" }}>
                  Rating: {teacher.rating}
                </div>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>
                  {teacher.reviews} Reviews
                </div>
              </div>
            </div>

            {/* Expandable metrics section */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
                height: expandedCard === teacher.id ? "auto" : "0",
                overflow: "hidden",
                opacity: expandedCard === teacher.id ? 1 : 0,
                transition: "all 0.3s ease",
                marginTop: expandedCard === teacher.id ? "16px" : "0",
              }}
            >
              {Object.entries(teacher.metrics).map(([key, value]) => (
                <div key={key} style={{ fontSize: "12px" }}>
                  <span style={{ color: "#6b7280" }}>
                    {key.replace(/([A-Z])/g, " $1").trim()}:
                  </span>
                  <span style={{ color: "#1f2937", marginLeft: "4px", fontWeight: "500" }}>
                    {value}
                  </span>
                </div>
              ))}
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

      {/* Update responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .sidebar {
              left: -280px;
            }
            .main-content {
              margin-left: 0;
            }
          }
          
          @media (max-width: 480px) {
            .content-padding {
              padding: 16px;
            }
          }
        `}
      </style>
    </main>
  )
}

export default PerformanceDashboard
