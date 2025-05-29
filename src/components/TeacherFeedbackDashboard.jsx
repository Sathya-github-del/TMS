import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

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

    return (
        <div style={{ padding: "32px" }}>
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
        </div>
    );
};

export default TeacherFeedbackDashboard;
