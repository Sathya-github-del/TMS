"use client"

import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { LogOut, ChevronDown, ChevronUp, BarChart2, Award, TrendingUp, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PerformanceDashboard = () => {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [filterDepartment, setFilterDepartment] = useState('all');

  const performanceMetrics = [
    {
      title: "Average Rating",
      value: "4.7",
      trend: "+0.3",
      icon: <Award size={24} />,
      color: "#3b82f6"
    },
    {
      title: "Top Performers",
      value: "8",
      trend: "+2",
      icon: <TrendingUp size={24} />,
      color: "#10b981"
    },
    {
      title: "Total Reviews",
      value: "1,245",
      trend: "+123",
      icon: <BarChart2 size={24} />,
      color: "#f59e0b"
    },
    {
      title: "Active Teachers",
      value: "42",
      trend: "+5",
      icon: <Users size={24} />,
      color: "#8b5cf6"
    }
  ];

  const trendsData = [
    { month: 'Jan', rating: 4.2, reviews: 95 },
    { month: 'Feb', rating: 4.3, reviews: 110 },
    { month: 'Mar', rating: 4.5, reviews: 125 },
    { month: 'Apr', rating: 4.6, reviews: 140 },
    { month: 'May', rating: 4.7, reviews: 150 },
    { month: 'Jun', rating: 4.8, reviews: 165 }
  ];

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
      name: "Mr. James Carter",
      rating: 4.6,
      reviews: 98,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "89/100",
        feedbackScore: "85/100",
        peerReviews: "4.3/5",
        lessonPlanQuality: "90/100",
      },
    },
    {
      id: 3,
      name: "Mrs. Olivia Thompson",
      rating: 4.9,
      reviews: 150,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "95/100",
        feedbackScore: "90/100",
        peerReviews: "4.7/5",
        lessonPlanQuality: "96/100",
      },
    },
    {
      id: 4,
      name: "Mr. Liam Parker",
      rating: 4.7,
      reviews: 110,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "90/100",
        feedbackScore: "87/100",
        peerReviews: "4.4/5",
        lessonPlanQuality: "93/100",
      },
    },
    {
      id: 5,
      name: "Ms. Ava Martinez",
      rating: 4.5,
      reviews: 85,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "88/100",
        feedbackScore: "82/100",
        peerReviews: "4.2/5",
        lessonPlanQuality: "91/100",
      },
    },
    {
      id: 6,
      name: "Mr. Ethan Wright",
      rating: 4.6,
      reviews: 101,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "91/100",
        feedbackScore: "86/100",
        peerReviews: "4.3/5",
        lessonPlanQuality: "94/100",
      },
    },
    {
      id: 7,
      name: "Mrs. Sophia Lewis",
      rating: 4.8,
      reviews: 130,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "94/100",
        feedbackScore: "89/100",
        peerReviews: "4.6/5",
        lessonPlanQuality: "97/100",
      },
    },
    {
      id: 8,
      name: "Mr. Noah Walker",
      rating: 4.7,
      reviews: 115,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "92/100",
        feedbackScore: "87/100",
        peerReviews: "4.5/5",
        lessonPlanQuality: "95/100",
      },
    },
    {
      id: 9,
      name: "Ms. Mia Robinson",
      rating: 4.4,
      reviews: 78,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "86/100",
        feedbackScore: "80/100",
        peerReviews: "4.1/5",
        lessonPlanQuality: "89/100",
      },
    },
    {
      id: 10,
      name: "Mr. Lucas Scott",
      rating: 4.5,
      reviews: 90,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "89/100",
        feedbackScore: "84/100",
        peerReviews: "4.2/5",
        lessonPlanQuality: "91/100",
      },
    },
    {
      id: 11,
      name: "Mrs. Emma Hill",
      rating: 4.9,
      reviews: 145,
      image: "https://placehold.co/600x400",
      metrics: {
        engagementScore: "96/100",
        feedbackScore: "92/100",
        peerReviews: "4.8/5",
        lessonPlanQuality: "98/100",
      },
    },
  ];


  const handleLogout = () => {
    localStorage.removeItem("teacherAuthenticated");
    navigate('/');
  };

  const toggleCardExpand = (teacherId) => {
    setExpandedCard(expandedCard === teacherId ? null : teacherId);
  };

  return (
    <main style={{
      padding: "2rem",
      maxWidth: "1800px",
      margin: "0 auto",
      minHeight: "100vh",
      backgroundColor: "#f8fafc"
    }}>
      {/* Header with Logout */}
      <div style={{
        marginBottom: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        <div>
          <h1 style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            color: "#1f2937",
            margin: "0 0 0.5rem 0",
          }}>
            Teacher Performance Overview
          </h1>
          <p style={{
            fontSize: "1rem",
            color: "#6b7280",
            margin: "0",
          }}>
            Review and analyze teacher performance metrics
          </p>
        </div>
        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            border: "1px solid #ef4444",
            color: "#ef4444",
            background: "none",
            cursor: "pointer",
            fontSize: "0.875rem",
            fontWeight: "500",
            transition: "all 0.2s ease",
            ":hover": {
              backgroundColor: "#fee2e2"
            }
          }}
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>

      {/* Performance Metrics Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "1.5rem",
        marginBottom: "2rem"
      }}>
        {performanceMetrics.map((metric, index) => (
          <div key={index} style={{
            backgroundColor: "white",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "1rem"
            }}>
              <div style={{
                padding: "0.75rem",
                borderRadius: "0.5rem",
                backgroundColor: `${metric.color}15`,
                color: metric.color
              }}>
                {metric.icon}
              </div>
              <div style={{
                padding: "0.25rem 0.75rem",
                backgroundColor: metric.trend.startsWith('+') ? "#f0fdf4" : "#fef2f2",
                borderRadius: "999px",
                fontSize: "0.875rem",
                color: metric.trend.startsWith('+') ? "#16a34a" : "#dc2626"
              }}>
                {metric.trend}
              </div>
            </div>
            <h3 style={{
              fontSize: "0.875rem",
              color: "#6b7280",
              marginBottom: "0.5rem"
            }}>
              {metric.title}
            </h3>
            <div style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1f2937"
            }}>
              {metric.value}
            </div>
          </div>
        ))}
      </div>

      {/* Filters and Sorting */}
      <div style={{
        display: "flex",
        gap: "1rem",
        marginBottom: "1.5rem",
        flexWrap: "wrap"
      }}>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            border: "1px solid #e5e7eb",
            fontSize: "0.875rem"
          }}
        >
          <option value="rating">Sort by Rating</option>
          <option value="reviews">Sort by Reviews</option>
          <option value="name">Sort by Name</option>
        </select>

        <select
          value={filterDepartment}
          onChange={(e) => setFilterDepartment(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            border: "1px solid #e5e7eb",
            fontSize: "0.875rem"
          }}
        >
          <option value="all">All Departments</option>
          <option value="science">Science</option>
          <option value="math">Mathematics</option>
          <option value="english">English</option>
        </select>
      </div>

      {/* Performance Trends Chart */}
      <div style={{
        backgroundColor: "white",
        borderRadius: "0.75rem",
        padding: "1.5rem",
        marginBottom: "2rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{
          fontSize: "1.25rem",
          fontWeight: "600",
          marginBottom: "1.5rem"
        }}>
          Performance Trends
        </h2>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={trendsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" stroke="#3b82f6" />
              <YAxis yAxisId="right" orientation="right" stroke="#f59e0b" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="rating" fill="#3b82f6" name="Rating" />
              <Bar yAxisId="right" dataKey="reviews" fill="#f59e0b" name="Reviews" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Teacher Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        {teacherData.map((teacher) => (
          <div
            key={teacher.id}
            style={{
              backgroundColor: "white",
              borderRadius: "0.75rem",
              padding: "1.25rem",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e5e7eb",
              cursor: "pointer",
              transition: "all 0.2s ease",
              ":hover": {
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
              },
              // Add these properties to ensure independent height
              display: "flex",
              flexDirection: "column",
              height: "fit-content",
              isolation: "isolate",
              position: "relative",
              zIndex: expandedCard === teacher.id ? "1" : "0"
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: expandedCard === teacher.id ? "1rem" : "0"
              }}
              onClick={() => toggleCardExpand(teacher.id)}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "0.5rem",
                  backgroundColor: "#f3f4f6",
                  backgroundImage: `url(${teacher.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{
                  margin: "0 0 0.25rem 0",
                  fontSize: "1rem",
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  {teacher.name}
                  {expandedCard === teacher.id ? (
                    <ChevronUp size={16} color="#6b7280" />
                  ) : (
                    <ChevronDown size={16} color="#6b7280" />
                  )}
                </h3>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.25rem"
                }}>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: "#fef3c7",
                    color: "#92400e",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: "500"
                  }}>
                    {teacher.rating} ★
                  </div>
                  <div style={{
                    fontSize: "0.75rem",
                    color: "#6b7280"
                  }}>
                    {teacher.reviews} reviews
                  </div>
                </div>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "0.5rem"
                }}>
                  <div style={{
                    backgroundColor: "#ecfdf5",
                    color: "#065f46",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "0.25rem",
                    fontSize: "0.75rem",
                    fontWeight: "500"
                  }}>
                    Engagement: {teacher.metrics.engagementScore}
                  </div>
                </div>
              </div>
            </div>

            {/* Expandable metrics section */}
            {expandedCard === teacher.id && (
              <div
                style={{
                  paddingTop: "1rem",
                  borderTop: "1px solid #e5e7eb",
                  marginTop: "1rem"
                }}
              >
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem"
                }}>
                  {Object.entries(teacher.metrics).map(([key, value]) => (
                    <div key={key} style={{
                      display: "flex",
                      flexDirection: "column"
                    }}>
                      <span style={{
                        fontSize: "0.75rem",
                        color: "#6b7280",
                        textTransform: "capitalize",
                        marginBottom: "0.25rem"
                      }}>
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span style={{
                        fontSize: "0.875rem",
                        color: "#1f2937",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem"
                      }}>
                        {value}
                        {key.includes("Score") || key.includes("Quality") ? (
                          parseInt(value) > 90 ? (
                            <span style={{ color: "#16a34a" }}>★</span>
                          ) : parseInt(value) > 80 ? (
                            <span style={{ color: "#ca8a04" }}>★</span>
                          ) : (
                            <span style={{ color: "#dc2626" }}>★</span>
                          )
                        ) : null}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Download Report Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "2rem"
        }}
      >
        <button
          style={{
            backgroundColor: "#1f2937",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            border: "none",
            fontSize: "0.875rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            ":hover": {
              backgroundColor: "#374151"
            }
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L7 11L8.41 9.59L12 13.17L15.59 9.59L17 11L12 16Z" fill="currentColor" />
            <path d="M12 8L7 3L8.41 1.59L12 5.17L15.59 1.59L17 3L12 8Z" fill="currentColor" />
          </svg>
          Download Full Report
        </button>
      </div>
    </main>
  )
}

export default PerformanceDashboard