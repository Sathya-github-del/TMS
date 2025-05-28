import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./components/Dashboard"
import TeacherBandwidthTracker from "./components/TeacherBandwidthTracker"
import PerformanceDashboard from "./components/performance-dashboard"
import IntegratedLMS from "./components/IntegratedLMS"
import RecognitionDashboard from "./components/R&R"
import AIInsightsDashboard from "./components/AI-PoweredInsights"
import AdminLogin from "./components/AdminLogin"
import TeacherProfile from "./components/TeacherProfile"
import TeacherLogin from "./components/TeacherLogin"

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true"
  });
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true"
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<AdminLogin onLogin={handleLogin} />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/teacher-profile/*" element={<TeacherProfile />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin/*"
          element={
            isAuthenticated ? (
              <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="bandwidth" element={<TeacherBandwidthTracker />} />
                  <Route path="performance" element={<PerformanceDashboard />} />
                  <Route path="lms" element={<IntegratedLMS />} />
                  <Route path="recognition" element={<RecognitionDashboard />} />
                  <Route path="insights" element={<AIInsightsDashboard />} />
                  <Route path="/" element={<Navigate to="dashboard" replace />} />
                </Routes>
              </Layout>
            ) : (
              <Navigate to="/login" state={{ from: "/admin" }} replace />
            )
          }
        />
        
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}