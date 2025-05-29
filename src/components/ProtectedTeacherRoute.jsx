import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedTeacherRoute = ({ children }) => {
  const [isTeacherAuthenticated, setIsTeacherAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check authentication status from localStorage
    const checkAuth = () => {
      const authStatus = localStorage.getItem("teacherAuthenticated") === "true";
      setIsTeacherAuthenticated(authStatus);
      setIsLoading(false);
    };

    checkAuth();

    // Add event listener for storage changes
    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  if (isLoading) {
    return null; // or a loading spinner
  }

  if (!isTeacherAuthenticated) {
    // Store the attempted location
    sessionStorage.setItem('teacherRedirectPath', location.pathname);
    return <Navigate to="/teacher-login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedTeacherRoute;
