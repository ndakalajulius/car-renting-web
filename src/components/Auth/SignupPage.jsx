import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../styles/SignupPage.css'; // Import the CSS file

const SignupPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/auth/signup', formData)
      .then(() => {
        alert('Signup successful! Please log in.');
        navigate('/loginpage'); // Redirect to login page after successful signup
      })
      .catch((error) => {
        console.error('Signup failed:', error);
        alert('An error occurred. Please try again.');
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="redirect-text">
          Already have an account? <Link to="/loginpage" className="login-link">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
