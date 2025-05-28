"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Layout = ({ children, currentPage, onNavigate }) => {
  const navigate = useNavigate()

  const sidebarItems = [
    { icon: "🏠", label: "Dashboard", page: "admin/dashboard" },
    { icon: "👥", label: "Teacher Bandwidth Tracker", page: "admin/bandwidth" },
    { icon: "📊", label: "Performance Dashboard", page: "admin/performance" },
    { icon: "📚", label: "Integrated LMS", page: "admin/lms" },
    { icon: "🏆", label: "Recognition & Rewards System", page: "admin/recognition" },
    { icon: "💡", label: "AI-Powered Insights", page: "admin/insights" },
  ]

  const handleNavigation = (page) => {
    onNavigate(page)
    navigate(`/${page}`)
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
      {/* Sidebar */}
      <div
        style={{
          width: "280px",
          backgroundColor: "white",
          borderRight: "1px solid #e2e8f0",
          padding: "0",
          flexShrink: 0,
          position: "fixed",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {/* Logo/Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#1f2937",
              margin: "0",
            }}
          >
            Admin
          </h2>
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
                backgroundColor: item.page === currentPage ? "#eff6ff" : "transparent",
                borderRight: item.page === currentPage ? "3px solid #3b82f6" : "none",
                color: item.page === currentPage ? "#1d4ed8" : "#4b5563",
                fontWeight: item.page === currentPage ? "500" : "400",
              }}
              onClick={() => handleNavigation(item.page)}
            >
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              <span style={{ fontSize: "14px" }}>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: "280px" }}>
        {children}
      </div>
    </div>
  )
}

export default Layout
