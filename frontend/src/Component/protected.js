import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Check if the user is authenticated by making a request to your backend
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get('http://localhost:8090/auth/check-session');
        setIsAuthenticated(true); // If the session exists, user is authenticated
      } catch (error) {
        setIsAuthenticated(false); // If error occurs, user is not authenticated
      }
    };

    checkAuthStatus();
  }, []);

  // If authentication status is still being checked, you can return a loading indicator
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // If authenticated, render the protected route; otherwise, redirect to login
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
