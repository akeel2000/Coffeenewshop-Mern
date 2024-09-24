const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../Models/User');
const authMiddleware = require('../middleware/authMiddleware'); // Import middleware for protected routes
const router = express.Router();

// Register a new user
router.post('/signup', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Validate inputs
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ msg: 'Passwords do not match' });
  }

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Store the user ID in the session (no JWT here)
    req.session.userId = user._id;

    // Respond with success message
    res.status(200).json({ msg: 'User registered and logged in' });
  } catch (err) {
    console.error('Signup error:', err.message);
    res.status(500).json({ msg: 'Server error during signup' });
  }
});

// Login a user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Store the user ID in the session (no JWT)
    req.session.userId = user._id;

    // Respond with success message
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Logout route (Destroy session)
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.clearCookie('connect.sid'); // Clear the session cookie
    res.status(200).json({ message: 'Logged out' });
  });
});

// Check session route (add this for checking if the session is active)
router.get('/check-session', (req, res) => {
  if (req.session && req.session.userId) {
    // If the session exists and has a userId, send a success response
    res.status(200).json({ isAuthenticated: true, userId: req.session.userId });
  } else {
    // If the session does not exist or userId is not present, send a failed response
    res.status(200).json({ isAuthenticated: false });
  }
});

// Protected route (dashboard)
router.get('/dashboard', authMiddleware, (req, res) => {
  res.status(200).json({ message: `Welcome, User ID: ${req.session.userId}` });
});

module.exports = router;
