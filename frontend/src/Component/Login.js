import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // Keep toast for showing errors
import 'react-toastify/dist/ReactToastify.css';

// Dummy authentication state and error logic
const initialState = {
  isAuthenticated: false,
  error: null,
};

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [state, setState] = useState(initialState); // Local state for authentication
  const navigate = useNavigate();

  // Mimic authentication logic
  const isAuthenticated = state.isAuthenticated;
  const authError = state.error;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); // Navigate to home page if already authenticated
      return;
    }

    if (authError) {
      toast(authError, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: 'error',
        onOpen: () => {
          setState((prevState) => ({ ...prevState, error: null })); // Clear auth error when toast opens
        },
      });
    }
  }, [authError, isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:8090/auth/login', { email, password });
      localStorage.setItem('token', response.data.token); // Save token to local storage
      setState({ isAuthenticated: true, error: null });
      navigate('/order'); // Redirect to dashboard after login
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
      setState({ ...state, error: err.response?.data?.msg || 'Login failed' });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-customColor">
      <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600 backdrop-blur-md p-10 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-light mb-6 text-white">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-100 mb-2" htmlFor="email">
              Username
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your username"
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
          <button
            type="submit"
            className="w-full py-3 text-lg text-gray-800 bg-white rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            LOGIN
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <Link to="/forgot-password" className="text-sm text-gray-300 hover:underline">
            Forgot Password?
          </Link>
          <Link to="/signup" className="text-sm text-gray-300 hover:underline">
            New to Logo? <span className="text-white">Register Here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
