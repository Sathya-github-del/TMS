"use client"

import { useState } from "react"

const TeacherDashboard = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("")

  const teacherData = [
    {
      name: "Ms. Bennett",
      subject: "Mathematics",
      totalWeeklyHours: 40,
      teachingHours: 25,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 35,
    },
    {
      name: "Mr. Carter",
      subject: "Science",
      totalWeeklyHours: 35,
      teachingHours: 20,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 25,
    },
    {
      name: "Ms. Davis",
      subject: "English",
      totalWeeklyHours: 45,
      teachingHours: 30,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 40,
    },
    {
      name: "Mr. Evans",
      subject: "History",
      totalWeeklyHours: 30,
      teachingHours: 15,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 20,
    },
    {
      name: "Ms. Foster",
      subject: "Art",
      totalWeeklyHours: 40,
      teachingHours: 25,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 35,
    },
  ]

  const getWorkloadColor = (workload) => {
    if (workload <= 20) return "#60a5fa"
    if (workload <= 30) return "#3b82f6"
    return "#1d4ed8"
  }

  const getWorkloadWidth = (workload) => {
    return Math.min((workload / 45) * 100, 100)
  }

  const filteredTeachers = teacherData.filter((teacher) => {
    return (
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedSubject === "" || teacher.subject === selectedSubject) &&
      (selectedGrade === "" || true) &&
      (selectedStatus === "" || true)
    )
  })

  const sidebarItems = [
    { icon: "🏠", label: "Dashboard", page: "dashboard" },
    { icon: "👥", label: "Teacher Bandwidth Tracker", page: "bandwidth" },
    { icon: "📊", label: "Performance Dashboard", page: "performance" },
    { icon: "📚", label: "Integrated LMS", page: "lms" },
    { icon: "🏆", label: "Recognition & Rewards System", page: "recognition" },
    { icon: "💡", label: "AI-Powered Insights", page: "insights" },
  ]

  const handleNavigation = (page) => {
    onNavigate(page);
  };

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
              fontSize: "16px",
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
                backgroundColor: item.page === "bandwidth" ? "#eff6ff" : "transparent",
                borderRight: item.page === "bandwidth" ? "3px solid #3b82f6" : "none",
                color: item.page === "bandwidth" ? "#1d4ed8" : "#4b5563",
                fontWeight: item.page === "bandwidth" ? "500" : "400",
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
              Teacher Workload Management
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#6b7280",
                margin: "0",
              }}
            >
              Manage and monitor teacher workload effectively to ensure balanced distribution and optimal performance.
            </p>
          </div>

          {/* Search and Filters */}
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              marginBottom: "24px",
            }}
          >
            {/* Search Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f1f5f9",
                borderRadius: "8px",
                padding: "12px 16px",
                marginBottom: "16px",
                gap: "8px",
              }}
            >
              <span style={{ color: "#64748b", fontSize: "16px" }}>🔍</span>
              <input
                type="text"
                placeholder="Search by teacher name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  outline: "none",
                  flex: 1,
                  fontSize: "14px",
                  color: "#374151",
                }}
              />
            </div>

            {/* Filter Dropdowns */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Subject", value: selectedSubject, setter: setSelectedSubject },
                { label: "Grade", value: selectedGrade, setter: setSelectedGrade },
                { label: "Status", value: selectedStatus, setter: setSelectedStatus },
              ].map((filter, index) => (
                <select
                  key={index}
                  value={filter.value}
                  onChange={(e) => filter.setter(e.target.value)}
                  style={{
                    padding: "8px 12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "14px",
                    backgroundColor: "white",
                    minWidth: "120px",
                  }}
                >
                  <option value="">{filter.label}</option>
                  {filter.label === "Subject" && (
                    <>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Science">Science</option>
                      <option value="English">English</option>
                      <option value="History">History</option>
                      <option value="Art">Art</option>
                    </>
                  )}
                </select>
              ))}
            </div>
          </div>

          {/* Teacher Table */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              marginBottom: "32px",
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: "800px",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#f8fafc" }}>
                    {[
                      "Name",
                      "Subject",
                      "Total Weekly Hours",
                      "Teaching Hours",
                      "Admin Hours",
                      "Extracurricular Hours",
                      "Workload",
                    ].map((header, index) => (
                      <th
                        key={index}
                        style={{
                          padding: "16px",
                          textAlign: "left",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#374151",
                          borderBottom: "1px solid #e2e8f0",
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredTeachers.map((teacher, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: "1px solid #f1f5f9",
                      }}
                    >
                      <td style={{ padding: "16px", fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>
                        {teacher.name}
                      </td>
                      <td style={{ padding: "16px", fontSize: "14px", color: "#3b82f6" }}>{teacher.subject}</td>
                      <td style={{ padding: "16px", fontSize: "14px", color: "#6b7280" }}>
                        {teacher.totalWeeklyHours}
                      </td>
                      <td style={{ padding: "16px", fontSize: "14px", color: "#3b82f6" }}>{teacher.teachingHours}</td>
                      <td style={{ padding: "16px", fontSize: "14px", color: "#6b7280" }}>{teacher.adminHours}</td>
                      <td style={{ padding: "16px", fontSize: "14px", color: "#6b7280" }}>
                        {teacher.extracurricularHours}
                      </td>
                      <td style={{ padding: "16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <div
                            style={{
                              width: "100px",
                              height: "6px",
                              backgroundColor: "#e2e8f0",
                              borderRadius: "3px",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                width: `${getWorkloadWidth(teacher.workload)}%`,
                                height: "100%",
                                backgroundColor: getWorkloadColor(teacher.workload),
                                borderRadius: "3px",
                              }}
                            ></div>
                          </div>
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                              color: "#1f2937",
                            }}
                          >
                            {teacher.workload}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Workload Distribution */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              padding: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 24px 0",
              }}
            >
              Workload Distribution
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {/* Weekly Workload Summary */}
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    marginBottom: "8px",
                  }}
                >
                  Weekly Workload Hours
                </div>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    color: "#1f2937",
                    lineHeight: "1",
                  }}
                >
                  35
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#059669",
                    marginTop: "4px",
                  }}
                >
                  This Week +5%
                </div>
              </div>

              {/* Individual Teacher Workloads */}
              <div>
                {teacherData.map((teacher, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "100px",
                        fontSize: "14px",
                        color: "#3b82f6",
                        fontWeight: "500",
                      }}
                    >
                      {teacher.name}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        height: "8px",
                        backgroundColor: "#f1f5f9",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${getWorkloadWidth(teacher.workload)}%`,
                          height: "100%",
                          backgroundColor: getWorkloadColor(teacher.workload),
                          borderRadius: "4px",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
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
          }
        `}
      </style>
    </div>
  )
}

export default TeacherDashboard
