import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import '../../styles/LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/auth/login', credentials)
      .then((response) => {
        const { token, role } = response.data;
        login(token, role); // Save authentication details in context
        alert('Login successful!');
        navigate('/manage-vehicles'); // Redirect to booking page
      })
      .catch((error) => {
        console.error('Login failed:', error);
        if (error.response && error.response.status === 404) {
          // If the server indicates the user doesn't exist
          alert('User not found. Redirecting to Signup.');
          navigate('/signup'); // Redirect to signup page
        } else {
          alert('Invalid credentials or an error occurred!');
        }
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="redirect-text">
          Don’t have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
