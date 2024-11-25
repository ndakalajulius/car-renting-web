import React, { createContext, useState, useEffect } from 'react';

// Create AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    user: null, // Stores user information (like name, role, etc.)
  });

  // Load auth data from local storage on initial render
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = JSON.parse(localStorage.getItem('authUser'));
    if (storedToken && storedUser) {
      setAuth({ token: storedToken, user: storedUser });
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      // Replace with actual API endpoint
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        // Save token and user details in state and local storage
        setAuth({ token: data.token, user: data.user });
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('authUser', JSON.stringify(data.user));
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      throw error; // Pass the error to the caller for handling
    }
  };

  // Logout function
  const logout = () => {
    setAuth({ token: null, user: null });
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
