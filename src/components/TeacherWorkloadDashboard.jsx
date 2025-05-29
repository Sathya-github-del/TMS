import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, 
  Clock, 
  BookOpen, 
  Users, 
  ClipboardList,
  BarChart2,
  Calendar,
  AlertTriangle,
  CheckCircle 
} from 'lucide-react';

const TeacherWorkloadDashboard = () => {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState("Workload")

    const workloadData = [
        { label: "Teaching", value: 80, color: "#3b82f6" },
        { label: "Lesson Planning", value: 60, color: "#8b5cf6" },
        { label: "Grading", value: 45, color: "#06b6d4" },
        { label: "Meetings", value: 30, color: "#10b981" },
    ];

    const relatedContent = [
        {
            title: "Workload Management Tips",
            type: "Article",
            duration: "5 min read",
            link: "#"
        },
        {
            title: "Time Management for Teachers",
            type: "Video",
            duration: "10 mins",
            link: "#"
        },
        {
            title: "Stress Management Workshop",
            type: "Workshop",
            duration: "1 hour",
            link: "#"
        }
    ];

    // Add detailed workload analytics
    const workloadAnalytics = {
        currentWeek: {
            teachingHours: 25,
            planningHours: 10,
            adminHours: 8,
            totalHours: 43,
            target: 40,
            trend: "+5%"
        },
        deadlines: [
            {
                task: "Grade Submissions",
                due: "2024-02-20",
                priority: "High",
                status: "Pending"
            },
            {
                task: "Lesson Plans",
                due: "2024-02-18",
                priority: "Medium",
                status: "In Progress"
            }
        ],
        weeklySchedule: [
            {
                day: "Monday",
                classes: [
                    { time: "08:00-09:30", subject: "Advanced Biology", students: 28 },
                    { time: "10:00-11:30", subject: "Chemistry Lab", students: 24 }
                ],
                totalHours: 6
            },
            // Add more days...
        ]
    };

    const handleLogout = () => {
        localStorage.removeItem("teacherAuthenticated");
        navigate('/login');
    };

    return (
        <div style={{ padding: "32px", backgroundColor: "#f8fafc" }}>
            {/* Header Section */}
            <div style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between" }}>
                <div>
                    <h1 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "8px" }}>
                        Workload Management Dashboard
                    </h1>
                    <p style={{ color: "#6b7280" }}>Monitor and manage teaching workload efficiently</p>
                </div>
                {/* Add export/print buttons */}
            </div>

            {/* Add Workload Overview Cards */}
            <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                gap: "24px",
                marginBottom: "32px" 
            }}>
                {/* Add cards here */}
            </div>

            {/* Add Weekly Schedule Calendar */}
            {/* Add Task Management Section */}
            {/* Add Workload Distribution Chart */}
            
            {/* Add responsive styles */}

            {/* Related Content Section */}
            <div style={{
                marginTop: "32px",
                padding: "24px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
                <h2 style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "16px"
                }}>
                    Related Resources
                </h2>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "16px"
                }}>
                    {relatedContent.map((item, index) => (
                        <div key={index} style={{
                            padding: "16px",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                            cursor: "pointer"
                        }}>
                            <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>{item.title}</h3>
                            <div style={{
                                display: "flex",
                                gap: "8px",
                                fontSize: "14px",
                                color: "#6b7280"
                            }}>
                                <span>{item.type}</span>
                                <span>•</span>
                                <span>{item.duration}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeacherWorkloadDashboard;
