"use client"

import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import {
  LogOut,
  Book,
  Users,
  Calendar,
  Plus,
  ChevronDown,
  BarChart2,
  Clock,
  CheckCircle,
  AlertCircle,
  Briefcase,
  X // Add X icon for close button
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
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    duration: '',
    status: 'upcoming',
    color: '#3b82f6',
    startDate: '',
    endDate: ''
  });
  const [workloadStats] = useState({
    overworked: 3,
    optimal: 12,
    available: 5
  });
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8; // Changed from 6 to 8

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

  // Convert courseData to state
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to Classroom Management",
      duration: "4 weeks",
      color: "#a7c4bc",
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn effective classroom management techniques",
      status: "in_progress",
      progress: 65,
      startDate: "2024-01-15",
      endDate: "2024-02-12"
    },
    {
      id: 2,
      title: "Advanced Teaching Methodologies",
      duration: "5 weeks",
      color: "#2d3748",
      image: "/placeholder.svg?height=200&width=300",
      description: "Explore modern teaching approaches",
      status: "completed",
      progress: 100,
      completionDate: "2024-01-10"
    },
    {
      id: 3,
      title: "Effective Communication with Students",
      duration: "3 weeks",
      color: "#2d5a5a",
      image: "/placeholder.svg?height=200&width=300",
      description: "Improve student-teacher communication",
      status: "upcoming",
      startDate: "2024-03-01",
      endDate: "2024-03-21"
    },
    {
      id: 4,
      title: "Technology Integration in Education",
      duration: "5 weeks",
      color: "#b8d4b8",
      image: "/placeholder.svg?height=200&width=300",
      description: "Integrate technology in teaching",
      status: "in_progress",
      progress: 45,
      startDate: "2024-02-01",
      endDate: "2024-03-15"
    },
    {
      id: 5,
      title: "Digital Learning Tools",
      duration: "3 weeks",
      color: "#7c3aed",
      image: "/placeholder.svg?height=200&width=300",
      description: "Master modern digital teaching tools",
      status: "upcoming",
      startDate: "2024-03-01",
      endDate: "2024-03-21"
    },
    {
      id: 6,
      title: "Student Assessment Strategies",
      duration: "4 weeks",
      color: "#0891b2",
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn effective assessment methods",
      status: "completed",
      progress: 100,
      completionDate: "2024-01-10"
    },
    {
      id: 7,
      title: "Educational Leadership",
      duration: "6 weeks",
      color: "#818cf8",
      image: "/placeholder.svg?height=200&width=300",
      description: "Develop leadership skills in education",
      status: "upcoming",
      startDate: "2024-04-01",
      endDate: "2024-05-15"
    },
    {
      id: 8,
      title: "Special Education Fundamentals",
      duration: "4 weeks",
      color: "#14b8a6",
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn special education teaching methods",
      status: "in_progress",
      progress: 30,
      startDate: "2024-02-15",
      endDate: "2024-03-15"
    },
    {
      id: 9,
      title: "STEM Teaching Methods",
      duration: "5 weeks",
      color: "#f472b6",
      image: "/placeholder.svg?height=200&width=300",
      description: "Advanced STEM teaching strategies",
      status: "upcoming",
      startDate: "2024-04-15",
      endDate: "2024-05-20"
    },
    {
      id: 10,
      title: "Student Assessment Strategies",
      duration: "4 weeks",
      color: "#0891b2",
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn effective assessment methods",
      status: "completed",
      progress: 100,
      completionDate: "2024-01-10"
    },
  ]);

  // Update teacherProgress data to include recommended courses
  const teacherProgress = [
    {
      name: "Ava Bennett",
      coursesCompleted: 3,
      badges: "Classroom Management, Communication",
      recommendedCourses: "Advanced Teaching Methods, Digital Learning",
    },
    {
      name: "Liam Carter",
      coursesCompleted: 2,
      badges: "Advanced Teaching",
      recommendedCourses: "Communication Skills, Student Assessment",
    },
    {
      name: "Chloe Harper",
      coursesCompleted: 4,
      badges: "All Courses",
      recommendedCourses: "Leadership in Education",
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
      teachers: [
        "Ms. Clara Bennett",
        "Mr. James Carter",
        "Mrs. Sophia Lewis"
      ],
      completion: 100 // Add completion percentage
    },
    {
      title: "Advanced Teaching Methodologies",
      status: "In Progress",
      icon: "⏱",
      color: "#f59e0b",
      teachers: [
        "Mrs. Olivia Thompson",
        "Mr. Liam Parker",
        "Mr. Ethan Wright"
      ],
      completion: 65 // Add completion percentage
    },
    {
      title: "Effective Communication with Students",
      status: "Not Started",
      icon: "✕",
      color: "#ef4444",
      teachers: [
        "Ms. Ava Martinez",
        "Mr. Noah Walker",
        "Ms. Mia Robinson"
      ],
      completion: 0 // Add completion percentage
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

  // Add pagination component
  const Pagination = ({ totalCourses }) => {
    const totalPages = Math.ceil(totalCourses / coursesPerPage);

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        padding: '24px'
      }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            style={{
              padding: '8px 12px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: currentPage === number ? '#3b82f6' : '#f3f4f6',
              color: currentPage === number ? 'white' : '#6b7280',
              cursor: 'pointer',
              fontWeight: currentPage === number ? '600' : '400'
            }}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };

  // Update getFilteredCourses to use courses state instead of courseData
  const getFilteredCourses = () => {
    let filtered;
    switch (activeTab) {
      case 'inProgress':
        filtered = courses.filter(course => course.status === 'in_progress');
        break;
      case 'completed':
        filtered = courses.filter(course => course.status === 'completed');
        break;
      case 'upcoming':
        filtered = courses.filter(course => course.status === 'upcoming');
        break;
      default:
        filtered = courses;
    }

    // Calculate pagination
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    return {
      courses: filtered.slice(indexOfFirstCourse, indexOfLastCourse),
      totalCourses: filtered.length
    };
  };

  // Add new course handler
  const handleAddCourse = (e) => {
    e.preventDefault();
    const course = {
      id: courses.length + 1,
      ...newCourse,
      image: "/placeholder.svg?height=200&width=300",
    };

    // Add progress if status is in_progress
    if (course.status === 'in_progress') {
      course.progress = 0;
    }
    // Add completion date if status is completed
    if (course.status === 'completed') {
      course.completionDate = new Date().toISOString().split('T')[0];
      course.progress = 100;
    }

    setCourses(prevCourses => [...prevCourses, course]);
    setShowAddCourseModal(false);
    setNewCourse({
      title: '',
      description: '',
      duration: '',
      status: 'upcoming',
      color: '#3b82f6',
      startDate: '',
      endDate: ''
    });
    setCurrentPage(1);
  };

  // Add Course Modal Component
  const AddCourseModal = () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: 'auto',
        maxHeight: '90vh'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #e5e7eb',
          position: 'relative'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827'
          }}>
            Add New Course
          </h2>
          <button
            onClick={() => setShowAddCourseModal(false)}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              color: '#6b7280'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Container */}
        <div style={{
          padding: '24px',
          overflowY: 'auto'
        }}>
          <form onSubmit={handleAddCourse}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {/* Form Fields Container */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                {/* Title Field */}
                <FormField>
                  <FormLabel>Course Title</FormLabel>
                  <input
                    type="text"
                    required
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                    className="form-input"
                    style={formInputStyle}
                    placeholder="Enter course title"
                  />
                </FormField>

                {/* Description Field */}
                <FormField>
                  <FormLabel>Description</FormLabel>
                  <textarea
                    required
                    value={newCourse.description}
                    onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                    style={{
                      ...formInputStyle,
                      height: '100px',
                      resize: 'none'
                    }}
                    placeholder="Enter course description"
                  />
                </FormField>

                {/* Duration Field */}
                <FormField>
                  <FormLabel>Duration</FormLabel>
                  <input
                    type="text"
                    required
                    value={newCourse.duration}
                    onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                    style={formInputStyle}
                    placeholder="e.g., 4 weeks"
                  />
                </FormField>

                {/* Status Field */}
                <FormField>
                  <FormLabel>Status</FormLabel>
                  <select
                    value={newCourse.status}
                    onChange={(e) => setNewCourse({ ...newCourse, status: e.target.value })}
                    style={formInputStyle}
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </FormField>

                {/* Color Field */}
                <FormField>
                  <FormLabel>Color Theme</FormLabel>
                  <input
                    type="color"
                    value={newCourse.color}
                    onChange={(e) => setNewCourse({ ...newCourse, color: e.target.value })}
                    style={{
                      ...formInputStyle,
                      padding: '6px'
                    }}
                  />
                </FormField>
              </div>

              {/* Form Actions */}
              <div style={{
                display: 'flex',
                gap: '12px',
                marginTop: '12px',
                borderTop: '1px solid #e5e7eb',
                paddingTop: '20px'
              }}>
                <button
                  type="button"
                  onClick={() => setShowAddCourseModal(false)}
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    backgroundColor: 'white',
                    color: '#374151',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: 'none',
                    borderRadius: '6px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  Add Course
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

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

      {/* Course Management Section */}
      <Card style={{ marginBottom: "32px" }}>
        <div style={{ padding: "24px", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <h2 style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>Course Management</h2>
            <button
              onClick={() => setShowAddCourseModal(true)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
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
                onClick={() => setActiveTab(category.id)}
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: category.id === activeTab ? "#3b82f6" : "#f3f4f6",
                  color: category.id === activeTab ? "white" : "#6b7280",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease"
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid - Update to use filtered courses with pagination */}
        <div style={{
          padding: "24px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Changed to show exactly 4 columns
          gap: "24px",
          maxWidth: "100%",
          overflow: "hidden"
        }}>
          {getFilteredCourses().courses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              showProgress={course.status === 'in_progress'}
              showStartDate={course.status === 'upcoming'}
              showCompletionDate={course.status === 'completed'}
            />
          ))}
        </div>

        {/* Add Pagination */}
        <Pagination totalCourses={getFilteredCourses().totalCourses} />
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
                    Recommended Courses
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
                    <td style={{ padding: "16px 24px", fontSize: "14px", color: "#3b82f6" }}>
                      {teacher.badges}
                    </td>
                    <td style={{ padding: "16px 24px", fontSize: "14px", color: "#10b981" }}>
                      {teacher.recommendedCourses}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                <div style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#1f2937",
                  marginBottom: "4px",
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: "14px",
                  color: item.color,
                  fontWeight: "500",
                  marginBottom: "8px",
                }}>
                  {item.status}
                </div>
                {/* Add mini progress bar */}
                <div style={{
                  width: "100%",
                  height: "4px",
                  backgroundColor: "#f3f4f6",
                  borderRadius: "2px",
                  marginBottom: "8px",
                  overflow: "hidden"
                }}>
                  <div style={{
                    width: `${item.completion}%`,
                    height: "100%",
                    backgroundColor: item.color,
                    transition: "width 0.3s ease"
                  }} />
                </div>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px"
                }}>
                  <span style={{
                    fontSize: "12px",
                    color: "#6b7280"
                  }}>
                    Completion
                  </span>
                  <span style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: item.color
                  }}>
                    {item.completion}%
                  </span>
                </div>
                <div style={{
                  fontSize: "14px",
                  color: "#6b7280",
                }}>
                  Teachers: {item.teachers.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Course Modal */}
      {showAddCourseModal && <AddCourseModal />}
    </main>
  );
};

// CourseCard Component
const CourseCard = ({ course, showProgress, showStartDate, showCompletionDate }) => (
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

      {showProgress && (
        <div style={{ marginBottom: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
            <span style={{ fontSize: "12px", color: "#6b7280" }}>Progress</span>
            <span style={{ fontSize: "12px", color: "#3b82f6" }}>{course.progress}%</span>
          </div>
          <div style={{
            width: "100%",
            height: "4px",
            backgroundColor: "#f3f4f6",
            borderRadius: "2px",
            overflow: "hidden"
          }}>
            <div style={{
              width: `${course.progress}%`,
              height: "100%",
              backgroundColor: "#3b82f6",
              transition: "width 0.3s ease"
            }} />
          </div>
        </div>
      )}

      {showStartDate && (
        <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px" }}>
          Starts: {new Date(course.startDate).toLocaleDateString()}
        </div>
      )}

      {showCompletionDate && (
        <div style={{ fontSize: "14px", color: "#10b981", marginBottom: "12px" }}>
          Completed: {new Date(course.completionDate).toLocaleDateString()}
        </div>
      )}

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

// Helper Components
const FormField = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    {children}
  </div>
);

const FormLabel = ({ children }) => (
  <label style={{
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151'
  }}>
    {children}
  </label>
);

// Shared Styles
const formInputStyle = {
  width: '100%',
  padding: '8px 12px',
  borderRadius: '6px',
  border: '1px solid #e5e7eb',
  fontSize: '14px',
  color: '#111827',
  backgroundColor: 'white',
  outline: 'none'
};

export default IntegratedLMS;
