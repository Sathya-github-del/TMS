import { useState } from "react"
import Dashboard from "./components/Dashboard"
import TeacherBandwidthTracker from "./components/TeacherBandwidthTracker"
import PerformanceDashboard from "./components/performance-dashboard"
import IntegratedLMS from "./components/IntegratedLMS"
import RecognitionDashboard from "./components/R&R"
import AIInsightsDashboard from "./components/AI-PoweredInsights"
import TeacherProfile from "./components/TeacherProfilePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard")

  // Component mapping
  const pages = {
    dashboard: Dashboard,
    bandwidth: TeacherBandwidthTracker,
    performance: PerformanceDashboard,
    lms: IntegratedLMS,
    recognition: RecognitionDashboard,
    insights: AIInsightsDashboard,
    profile: TeacherProfile
  }

  // Render the current component
  const CurrentComponent = pages[currentPage] || Dashboard

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<CurrentComponent onNavigate={setCurrentPage} />}
        />
        <Route
          path="/teacher-profile"
          element={<TeacherProfile onNavigate={setCurrentPage} />}
        />
      </Routes>
    </BrowserRouter>
  )
}