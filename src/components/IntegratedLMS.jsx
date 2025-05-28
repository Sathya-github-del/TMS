"use client"

import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const LMSDashboard = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Integrated LMS")

  const courseData = [
    {
      id: 1,
      title: "Introduction to Classroom Management",
      duration: "4 weeks",
      color: "#a7c4bc",
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn effective classroom management techniques",
    },
    {
      id: 2,
      title: "Advanced Teaching Methodologies",
      duration: "5 weeks",
      color: "#2d3748",
      image: "/placeholder.svg?height=200&width=300",
      description: "Explore modern teaching approaches",
    },
    {
      id: 3,
      title: "Effective Communication with Students",
      duration: "3 weeks",
      color: "#2d5a5a",
      image: "/placeholder.svg?height=200&width=300",
      description: "Improve student-teacher communication",
    },
    {
      id: 4,
      title: "Technology Integration in Education",
      duration: "5 weeks",
      color: "#b8d4b8",
      image: "/placeholder.svg?height=200&width=300",
      description: "Integrate technology in teaching",
    },
  ]

  const teacherProgress = [
    {
      name: "Ava Bennett",
      coursesCompleted: 3,
      badges: "Classroom Management, Communication",
    },
    {
      name: "Liam Carter",
      coursesCompleted: 2,
      badges: "Advanced Teaching",
    },
    {
      name: "Chloe Harper",
      coursesCompleted: 4,
      badges: "All Courses",
    },
  ]

  const recommendedCourses = [
    {
      id: 1,
      title: "Classroom Management",
      duration: "4 weeks",
      color: "#d4c4a8",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 2,
      title: "Advanced Teaching",
      duration: "6 weeks",
      color: "#2d3748",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 3,
      title: "Communication",
      duration: "3 weeks",
      color: "#4a5568",
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  const certificationTimeline = [
    {
      title: "Introduction to Classroom Management",
      status: "Completed",
      icon: "✓",
      color: "#10b981",
    },
    {
      title: "Advanced Teaching Methodologies",
      status: "In Progress",
      icon: "⏱",
      color: "#f59e0b",
    },
    {
      title: "Effective Communication with Students",
      status: "Not Started",
      icon: "✕",
      color: "#ef4444",
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
            Courses
          </h1>
          <p style={{
            fontSize: "16px",
            color: "#6b7280",
            margin: "0",
          }}>
            Explore and manage courses for teachers.
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

      {/* Course Catalog */}
      <div style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Course Catalog
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {courseData.map((course) => (
            <div
              key={course.id}
              style={{
                backgroundColor: course.color,
                borderRadius: "12px",
                padding: "24px",
                color: course.color === "#2d3748" ? "white" : "#1f2937",
                cursor: "pointer",
                transition: "transform 0.2s",
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    margin: "0 0 8px 0",
                    lineHeight: "1.4",
                  }}
                >
                  {course.title}
                </h3>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  opacity: 0.8,
                }}
              >
                {course.duration}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher Progress */}
      <div style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Teacher Progress
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
                minWidth: "600px",
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
                    Courses Completed
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
                    Badges/Certificates
                  </th>
                </tr>
              </thead>
              <tbody>
                {teacherProgress.map((teacher, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: index < teacherProgress.length - 1 ? "1px solid #f1f5f9" : "none",
                    }}
                  >
                    <td style={{ padding: "16px 24px", fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>
                      {teacher.name}
                    </td>
                    <td style={{ padding: "16px 24px", fontSize: "14px", color: "#6b7280" }}>
                      {teacher.coursesCompleted}
                    </td>
                    <td style={{ padding: "16px 24px", fontSize: "14px", color: "#3b82f6" }}>{teacher.badges}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recommended Courses */}
      <div style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Recommended Courses
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {recommendedCourses.map((course) => (
            <div
              key={course.id}
              style={{
                backgroundColor: course.color,
                borderRadius: "12px",
                padding: "20px",
                color: course.color === "#2d3748" || course.color === "#4a5568" ? "white" : "#1f2937",
                cursor: "pointer",
                transition: "transform 0.2s",
                minHeight: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "0 0 8px 0",
                }}
              >
                {course.title}
              </h3>
              <div
                style={{
                  fontSize: "14px",
                  opacity: 0.8,
                }}
              >
                {course.duration}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Timeline */}
      <div>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Certification Timeline
        </h2>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {certificationTimeline.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 0",
                borderBottom: index < certificationTimeline.length - 1 ? "1px solid #f1f5f9" : "none",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  flexShrink: 0,
                }}
              >
                {item.icon}
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
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: item.color,
                    fontWeight: "500",
                  }}
                >
                  {item.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default LMSDashboard
