import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/auth/login', credentials)
      .then(response => {
        const { token, role } = response.data;
        login(token, role);
        alert('Login successful!');
      })
      .catch(error => console.error('Login failed:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
