"use client"

import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { LogOut, AlertCircle, BarChart2, Clock, Briefcase } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TeacherBandwidthTracker = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("")

  // Enhanced teacher data with more details
  const teacherData = [
    {
      id: 1,
      name: "Ms. Bennett",
      subject: "Mathematics",
      grade: "Grade 8",
      totalWeeklyHours: 40,
      teachingHours: 25,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 35,
      status: "Optimal",
      efficiency: 85,
      lastUpdated: "2023-12-05"
    },
    {
      id: 2,
      name: "Mr. Carter",
      subject: "Science",
      grade: "Grade 9",
      totalWeeklyHours: 35,
      teachingHours: 20,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 25,
      status: "Optimal",
      efficiency: 75,
      lastUpdated: "2023-12-05"
    },
    {
      id: 3,
      name: "Ms. Davis",
      subject: "English",
      grade: "Grade 10",
      totalWeeklyHours: 45,
      teachingHours: 30,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 40,
      status: "Overworked",
      efficiency: 90,
      lastUpdated: "2023-12-05"
    },
    {
      id: 4,
      name: "Mr. Evans",
      subject: "History",
      grade: "Grade 7",
      totalWeeklyHours: 30,
      teachingHours: 15,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 20,
      status: "Available",
      efficiency: 60,
      lastUpdated: "2023-12-05"
    },
    {
      id: 5,
      name: "Ms. Foster",
      subject: "Art",
      grade: "Grade 6",
      totalWeeklyHours: 40,
      teachingHours: 25,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 35,
      status: "Optimal",
      efficiency: 85,
      lastUpdated: "2023-12-05"
    },
  ]

  // Analytics data for workload distribution
  const workloadStats = {
    overworked: teacherData.filter(t => t.workload > 35).length,
    optimal: teacherData.filter(t => t.workload >= 25 && t.workload <= 35).length,
    available: teacherData.filter(t => t.workload < 25).length,
    averageWorkload: teacherData.reduce((acc, curr) => acc + curr.workload, 0) / teacherData.length
  };

  // Chart data for workload distribution
  const chartData = [
    { name: 'Teaching', value: teacherData.reduce((acc, curr) => acc + curr.teachingHours, 0) },
    { name: 'Admin', value: teacherData.reduce((acc, curr) => acc + curr.adminHours, 0) },
    { name: 'Extracurricular', value: teacherData.reduce((acc, curr) => acc + curr.extracurricularHours, 0) }
  ];

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

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate('/');
  };

  // Add statsCards data array
  const statsCards = [
    {
      title: "Average Workload",
      value: `${workloadStats.averageWorkload.toFixed(1)}h`,
      icon: <Clock size={24} />,
      color: "#3b82f6",
      bgColor: "#eff6ff"
    },
    {
      title: "Overworked Teachers",
      value: workloadStats.overworked,
      icon: <AlertCircle size={24} />,
      color: "#ef4444",
      bgColor: "#fef2f2"
    },
    {
      title: "Optimal Workload",
      value: workloadStats.optimal,
      icon: <BarChart2 size={24} />,
      color: "#10b981",
      bgColor: "#f0fdf4"
    },
    {
      title: "Available Capacity",
      value: workloadStats.available,
      icon: <Briefcase size={24} />,
      color: "#f59e0b",
      bgColor: "#fefce8"
    }
  ];

  // Add filterOptions array
  const filterOptions = [
    {
      label: "Subject",
      value: selectedSubject,
      setter: setSelectedSubject,
      options: ["Mathematics", "Science", "English", "History", "Art"]
    },
    {
      label: "Grade",
      value: selectedGrade,
      setter: setSelectedGrade,
      options: ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"]
    },
    {
      label: "Status",
      value: selectedStatus,
      setter: setSelectedStatus,
      options: ["Optimal", "Overworked", "Available"]
    }
  ];

  return (
    <main style={{ padding: "32px" }}>
      {/* Stats Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "24px",
        marginBottom: "32px"
      }}>
        {statsCards.map((stat, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px"
            }}>
              <div style={{
                padding: "12px",
                borderRadius: "12px",
                backgroundColor: stat.bgColor,
                color: stat.color
              }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: "14px", color: "#6b7280" }}>{stat.title}</div>
                <div style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Search and Filters */}
      <div style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        marginBottom: "24px"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto auto auto",
          gap: "16px",
          alignItems: "center"
        }}>
          {/* Search Input */}
          <div style={{
            position: "relative"
          }}>
            <input
              type="text"
              placeholder="Search teachers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 16px",
                paddingLeft: "40px",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                fontSize: "14px"
              }}
            />
            <span style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9ca3af"
            }}>
              🔍
            </span>
          </div>

          {/* Filter Dropdowns */}
          {filterOptions.map((filter, index) => (
            <select
              key={index}
              value={filter.value}
              onChange={(e) => filter.setter(e.target.value)}
              style={{
                padding: "10px 16px",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                fontSize: "14px",
                minWidth: "150px",
                color: "#1f2937",
                backgroundColor: "white"
              }}
            >
              <option value="">{filter.label}</option>
              {filter.options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ))}
        </div>
      </div>

      {/* Workload Distribution Chart */}
      <div style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        marginBottom: "24px",
        height: "400px"
      }}>
        <h2 style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#1f2937",
          marginBottom: "24px"
        }}>
          Workload Distribution
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Enhanced Teacher Table */}
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
                  "Grade",
                  "Total Weekly Hours",
                  "Teaching Hours",
                  "Admin Hours",
                  "Extracurricular Hours",
                  "Workload",
                  "Status",
                  "Efficiency",
                  "Last Updated"
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
                  <td style={{ padding: "16px", fontSize: "14px", color: "#6b7280" }}>{teacher.grade}</td>
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
                  <td style={{ padding: "16px", fontSize: "14px", color: teacher.status === "Overworked" ? "#ef4444" : "#10b981" }}>
                    {teacher.status}
                  </td>
                  <td style={{ padding: "16px", fontSize: "14px", color: "#6b7280" }}>
                    {teacher.efficiency}%
                  </td>
                  <td style={{ padding: "16px", fontSize: "14px", color: "#6b7280" }}>
                    {new Date(teacher.lastUpdated).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default TeacherBandwidthTracker
