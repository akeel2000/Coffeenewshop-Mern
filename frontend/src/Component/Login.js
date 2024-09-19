import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:8090/auth/login', { email, password });
      localStorage.setItem('token', response.data.token); // Save token to local storage
      navigate('/dashboard'); // Redirect to dashboard after login
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link
            to="/dashboard" // Use RouterLink for navigation; this won't handle login
            onClick={handleLogin} // Call the login function on click
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </Link>
        </form>
        <div className="mt-4 flex justify-between">
          <Link
            to="/signup" // Redirect to signup page
            className="text-blue-500 hover:underline"
          >
            Don’t have an account? Sign Up
          </Link>
          <Link
            to="/forgot-password" // Redirect to forgot password page
            className="text-blue-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
