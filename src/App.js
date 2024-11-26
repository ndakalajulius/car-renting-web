import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './components/Auth/AuthContext'; // Default import
import HomePage from './components/HomePage';
import LoginPage from './components/Auth/LoginPage';
import AdminDashboard from './components/Admin/AdminDashboard';
import ProtectedRoute from './utils/ProtectedRoute';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import SignupPage from './components/Auth/SignupPage';
import ManageVehicles from './components/Admin/ManageVehicles';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/manage-vehicles" element={<ManageVehicles />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="Admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
