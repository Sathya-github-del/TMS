"use client"

import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import {
  LogOut,
  Book,
  Users,
  Calendar,
  Search,
  Plus,
  ChevronDown,
  BarChart2,
  Clock,
  CheckCircle,
  AlertCircle,
  Briefcase
} from 'lucide-react';

// Card Component
const Card = ({ children, style = {}, ...props }) => (
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);

const IntegratedLMS = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Integrated LMS")
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [workloadStats] = useState({
    overworked: 3,
    optimal: 12,
    available: 5
  });

  // Add course analytics data
  const courseAnalytics = {
    totalEnrollments: 245,
    completionRate: 78,
    averageProgress: 65,
    activeUsers: 180,
    averageWorkload: 5.2
  };

  // Analytics Stats Data
  const analyticsStats = [
    {
      title: "Average Workload",
      value: `${courseAnalytics.averageWorkload.toFixed(1)}h`,
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

  // Filter Options
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


  // Add course categories
  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'inProgress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' },
    { id: 'upcoming', label: 'Upcoming' }
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate('/');
  };

  return (
    <main style={{ padding: "32px", backgroundColor: "#f8fafc" }}>
      {/* Header Section */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "32px"
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

      {/* Analytics Stats Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "24px",
        marginBottom: "32px"
      }}>
        {analyticsStats.map((stat, index) => (
          <Card key={index} style={{ padding: "24px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "16px"
            }}>
              <div style={{
                padding: "12px",
                borderRadius: "12px",
                backgroundColor: `${stat.color}15`,
                color: stat.color
              }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: "14px", color: "#6b7280" }}>{stat.title}</div>
                <div style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>{stat.value}</div>
              </div>
            </div>
          </Card>
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
            position: "relative",
            width: "100%"
          }}>
            <input
              type="text"
              placeholder="Search courses..."
              style={{
                width: "100%",
                padding: "10px 16px",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                fontSize: "14px",
                color: "#1f2937",
                backgroundColor: "white",
                outline: "none",
                transition: "border-color 0.2s"
              }}
            />
            <div style={{
              position: "absolute",
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              pointerEvents: "none"
            }}>
              <Search size={16} color="#6b7280" />
            </div>
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

      {/* Course Management Section */}
      <Card style={{ marginBottom: "32px" }}>
        <div style={{ padding: "24px", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <h2 style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>Course Management</h2>
            <button style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              <Plus size={16} />
              Add Course
            </button>
          </div>
        </div>

        {/* Course Categories */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto"
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: category.id === 'all' ? "#3b82f6" : "#f3f4f6",
                  color: category.id === 'all' ? "white" : "#6b7280",
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div style={{
          padding: "24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px"
        }}>
          {courseData.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Card>

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
  );
};

// CourseCard Component
const CourseCard = ({ course }) => (
  <Card style={{
    overflow: "hidden",
    transition: "transform 0.2s",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-4px)"
    }
  }}>
    <div style={{
      height: "160px",
      backgroundColor: course.color,
      backgroundImage: `url(${course.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }} />
    <div style={{ padding: "16px" }}>
      <h3 style={{
        fontSize: "16px",
        fontWeight: "600",
        marginBottom: "8px"
      }}>
        {course.title}
      </h3>
      <p style={{
        fontSize: "14px",
        color: "#6b7280",
        marginBottom: "16px"
      }}>
        {course.description}
      </p>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <span style={{
          fontSize: "14px",
          color: "#6b7280"
        }}>
          {course.duration}
        </span>
        <button style={{
          padding: "6px 12px",
          backgroundColor: "#f3f4f6",
          border: "none",
          borderRadius: "6px",
          fontSize: "14px",
          color: "#4b5563",
          cursor: "pointer"
        }}>
          View Course
        </button>
      </div>
    </div>
  </Card>
);

export default IntegratedLMS;
