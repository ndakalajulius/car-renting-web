import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../components/Auth/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { auth } = useContext(AuthContext);
  if (!auth.token || (requiredRole && auth.role !== requiredRole)) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
