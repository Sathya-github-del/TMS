import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, 
  TrendingUp, 
  Target, 
  Award,
  BarChart2,
  Star 
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TeacherPerformanceDashboard = () => {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState("Performance")

    const performanceData = [
        { month: "Jan", score: 75 },
        { month: "Feb", score: 82 },
        { month: "Mar", score: 78 },
        { month: "Apr", score: 85 },
        { month: "May", score: 88 },
        { month: "Jun", score: 72 },
    ];

    const relatedContent = [
        {
            title: "Effective Teaching Strategies",
            type: "Course",
            duration: "2 weeks",
            link: "#"
        },
        {
            title: "Student Engagement Techniques",
            type: "Webinar",
            duration: "45 mins",
            link: "#"
        },
        {
            title: "Performance Improvement Guide",
            type: "PDF Guide",
            duration: "15 min read",
            link: "#"
        }
    ];

    // Add performance KPIs
    const performanceKPIs = [
        {
            title: "Student Success Rate",
            value: "92%",
            trend: "+5%",
            icon: <TrendingUp size={24} />,
            color: "#10b981"
        },
        {
            title: "Lesson Effectiveness",
            value: "88%",
            trend: "+3%",
            icon: <Target size={24} />,
            color: "#3b82f6"
        }
    ];

    // Add competency metrics
    const competencyMetrics = [
        {
            area: "Teaching Methods",
            score: 85,
            benchmark: 80,
            improvement: [
                "Interactive learning techniques",
                "Technology integration"
            ]
        }
        // ...add more metrics
    ];

    // Add performance metrics
    const performanceMetrics = {
        overall: {
            score: 92,
            trend: "+5%",
            previousScore: 87
        },
        categories: [
            {
                name: "Teaching Quality",
                score: 95,
                trend: "+3%",
                insights: "Excellent student engagement"
            },
            {
                name: "Student Progress",
                score: 88,
                trend: "+6%",
                insights: "Steady improvement in test scores"
            }
        ],
        recentFeedback: [
            {
                from: "Department Head",
                rating: 4.8,
                comment: "Excellent classroom management",
                date: "2024-02-15"
            }
        ]
    };

    const handleLogout = () => {
        localStorage.removeItem("teacherAuthenticated");
        navigate('/login');
    };

    return (
        <div style={{ padding: "32px", backgroundColor: "#f8fafc" }}>
            <h1>Teacher Performance Dashboard</h1>
            {/* Add Overview Section */}
            {/* Add Performance Trends */}
            {/* Add Feedback Section */}
            {/* Add Goals & Objectives */}
            {/* Add Professional Development Tracking */}

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
                    Recommended Learning
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

export default TeacherPerformanceDashboard;
