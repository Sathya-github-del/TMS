import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, 
  MessageSquare, 
  ThumbsUp,
  Star,
  Users,
  TrendingUp 
} from 'lucide-react';

const TeacherFeedbackDashboard = () => {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState("Feedback")

    const handleLogout = () => {
        localStorage.removeItem("teacherAuthenticated");
        navigate('/login');
    };

    const relatedContent = [
        {
            title: "Giving Constructive Feedback",
            type: "Workshop",
            duration: "1.5 hours",
            link: "#"
        },
        {
            title: "Student Communication Skills",
            type: "Course",
            duration: "1 week",
            link: "#"
        },
        {
            title: "Parent-Teacher Conference Guide",
            type: "Guide",
            duration: "20 min read",
            link: "#"
        }
    ];

    // Add feedback analytics
    const feedbackAnalytics = {
        summary: {
            averageRating: 4.8,
            totalFeedback: 156,
            positivePercentage: 92,
            responseRate: 88
        },
        categories: [
            {
                name: "Teaching Methods",
                rating: 4.9,
                responses: 45,
                trend: "+0.3"
            },
            {
                name: "Student Engagement",
                rating: 4.7,
                responses: 38,
                trend: "+0.2"
            }
        ],
        recentFeedback: [
            {
                student: "Anonymous Student",
                rating: 5,
                comment: "Very clear explanations",
                date: "2024-02-15",
                helpful: 12
            }
        ],
        improvements: [
            {
                area: "Group Activities",
                suggestion: "More interactive sessions",
                status: "In Progress"
            }
        ]
    };

    return (
        <div style={{ padding: "32px", backgroundColor: "#f8fafc" }}>
            <h1>Teacher Feedback Dashboard</h1>
            {/* Add feedback system and reviews */}

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

            <main style={{ padding: "32px" }}>
                <div style={{ marginBottom: "32px" }}>
                    <h1>Feedback Analysis</h1>
                </div>

                {/* Add Feedback Overview */}
                {/* Add Rating Trends */}
                {/* Add Recent Feedback */}
                {/* Add Improvement Suggestions */}
                {/* Add Response Analytics */}
            </main>
        </div>
    );
};

export default TeacherFeedbackDashboard;
