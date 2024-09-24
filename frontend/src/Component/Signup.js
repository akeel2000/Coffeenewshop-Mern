import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate password match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Send signup request to the backend
      const response = await axios.post('http://localhost:8090/auth/signup', {
        name,
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setSuccess('Successfully signed up! Redirecting to login...');
      
      // Redirect to login page after 2 seconds
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.msg || 'Signup failed');
    }
  };

  return (
    <div className="flex items-start justify-center h-screen bg-customColor pt-36">
      <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600 backdrop-blur-md p-10 rounded-xl shadow-xl w-full max-w-md h-auto flex flex-col justify-center">
        <h1 className="text-3xl font-light mb-6 text-white">Signup</h1>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSignup}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-100 mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-100 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-100 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-100 mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg text-gray-800 bg-white rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
