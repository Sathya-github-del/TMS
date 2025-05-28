"use client"

import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import {
  Users,
  ArrowRight,
} from 'lucide-react';

// Workload Distribution Chart Component
function WorkloadDistributionChart() {
  // ...existing code for WorkloadDistributionChart...
}

// Performance Categories Chart Component
function PerformanceCategoriesChart() {
  // ...existing code for PerformanceCategoriesChart...
}

// Card Component
function Card({ children, style }) {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      ...style
    }}>
      {children}
    </div>
  )
}

// Button Component
function Button({ onClick, children, variant, style }) {
  const baseStyle = {
    padding: "12px 24px",
    borderRadius: "4px",
    fontWeight: "500",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "background-color 0.3s, color 0.3s",
  }

  const variantStyle = variant === "outline" ? {
    backgroundColor: "transparent",
    color: "#1f2937",
    border: "2px solid #1f2937",
  } : {
    backgroundColor: "#1f2937",
    color: "white",
  }

  return (
    <button
      onClick={onClick}
      style={{
        ...baseStyle,
        ...variantStyle,
      }}
    >
      {children}
    </button>
  )
}

// Main Dashboard Component
export default function PublicDashboard() {
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
    <main style={{ padding: "32px", maxWidth: "1400px", margin: "0 auto" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {/* Login Options */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "16px", marginBottom: "16px" }}>
          <Button onClick={() => navigate('/teacher-login')}>
            Teacher Login
            <ArrowRight size={16} />
          </Button>
          <Button onClick={() => navigate('/login')}>
            Admin Login
            <ArrowRight size={16} />
          </Button>
        </div>

        {/* Overview Header */}
        <h2 style={{
          fontSize: isMobile ? "24px" : "32px",
          fontWeight: "700",
          color: "#1f2937",
          margin: 0,
          fontFamily: 'Montserrat, sans-serif'
        }}>
          Teacher Management System Overview
        </h2>

        {/* Stats Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: "24px",
        }}>
          {[
            { title: "Active Teachers", value: "50+" },
            { title: "Managed Courses", value: "25+" },
            { title: "Success Rate", value: "92%" },
            { title: "Teaching Hours", value: "1.2k" },
          ].map((stat, index) => (
            <Card key={index} style={{ padding: "24px" }}>
              <div style={{ marginBottom: "8px" }}>
                <h3 style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#64748b",
                  margin: 0
                }}>
                  {stat.title}
                </h3>
              </div>
              <div style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#1f2937"
              }}>
                {stat.value}
              </div>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div>
          <h3 style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "24px"
          }}>
            System Performance
          </h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "24px",
          }}>
            <Card>
              <div style={{ padding: "24px 24px 0 24px" }}>
                <h4 style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: 0
                }}>
                  Workload Distribution
                </h4>
              </div>
              <WorkloadDistributionChart />
            </Card>

            <Card>
              <div style={{ padding: "24px 24px 0 24px" }}>
                <h4 style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: 0
                }}>
                  Performance Categories
                </h4>
              </div>
              <PerformanceCategoriesChart />
            </Card>
          </div>
        </div>

        {/* Feature Highlight */}
        <Card style={{ overflow: "hidden" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
            gap: 0,
          }}>
            <div style={{ padding: "32px" }}>
              <h3 style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#1f2937",
                marginBottom: "8px"
              }}>
                Comprehensive Management System
              </h3>
              <p style={{
                color: "#64748b",
                marginBottom: "24px",
                lineHeight: "1.5"
              }}>
                Login to access advanced features and detailed insights.
              </p>
              <Button variant="outline" style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                Learn More
                <ArrowRight size={16} />
              </Button>
            </div>

            <div style={{
              background: "linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)",
              padding: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: isMobile ? "200px" : "auto",
            }}>
              <div style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #fb923c 0%, #f97316 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Users size={40} color="white" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
