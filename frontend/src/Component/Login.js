import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { loginSuccess, loginFailure } from '../redux/authSlice'; // Redux actions for login
import 'react-toastify/dist/ReactToastify.css';

function LoginPage({ setIsAuthenticated }) { // Accept setIsAuthenticated as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for better UX
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  // Function to check session on component mount
  const checkSession = async () => {
    try {
      const response = await axios.get('http://localhost:8090/auth/check-session', { withCredentials: true });
      console.log(response.data);
      if (response.data.isAuthenticated) {
        // If authenticated, navigate to the protected route (e.g., '/order')
        dispatch(loginSuccess(response.data.userId)); // Dispatch login success with user ID
        setIsAuthenticated(true); // Set authentication state to true
        navigate('/order');
      }
    } catch (error) {
      console.error('Error checking session:', error);
    }
  };

  useEffect(() => {
    // Check session on component mount
    checkSession();

    if (isAuthenticated) {
      navigate('/order'); // Redirect to order page after login
    }

    if (error) {
      toast.error(error, {
        position: 'bottom-center',
        onOpen: () => {
          dispatch(loginFailure(null)); // Clear error after displaying toast
        },
      });
    }
  }, [isAuthenticated, error, navigate, dispatch]);

  // Handle the login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the login process starts

    try {
      const response = await axios.post('http://localhost:8090/auth/login', { email, password }, { withCredentials: true });

      // Save token in localStorage (optional)
      localStorage.setItem('token', response.data.token);

      // Dispatch login success action to Redux
      dispatch(loginSuccess(response.data.token));

      // Set isAuthenticated to true
      setIsAuthenticated(true);  // Update state to true after login

      // Navigate to the order page after successful login
      navigate('/order');
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Login failed';

      // Dispatch login failure action
      dispatch(loginFailure(errorMsg));
    } finally {
      setLoading(false); // Set loading to false once the login process ends
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-customColor">
      <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600 backdrop-blur-md p-10 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-light mb-6 text-white">Login</h1>

        <form onSubmit={handleLogin}>
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

          <button
            type="submit"
            className="w-full py-3 text-lg text-gray-800 bg-white rounded-lg hover:bg-gray-300 focus:outline-none"
            disabled={loading} // Disable button when loading
          >
            {loading ? 'Logging in...' : 'LOGIN'}
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

      <ToastContainer /> {/* For displaying error messages */}
    </div>
  );
}

export default LoginPage;
