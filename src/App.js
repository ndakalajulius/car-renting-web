import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import VehicleListings from "./components/Vehicles/VehicleListings";
import VehicleDetails from "./components/Vehicles/VehicleDetails";
import BookingForm from "./components/BookingForm";
import LoginPage from "./components/Auth/LoginPage";
import SignupPage from "./components/Auth/SignupPage";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicles/:category" element={<VehicleListings />} />
        <Route path="/vehicles/details/:id" element={<VehicleDetails />} />
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <BookingForm />
            </ProtectedRoute>
          }
        />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
