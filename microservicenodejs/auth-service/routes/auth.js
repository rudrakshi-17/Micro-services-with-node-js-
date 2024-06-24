const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const secretKey = 'your_secret_key';

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Simple authentication logic (replace with real authentication logic)
  if (username === 'user' && password === 'pass') {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

router.post('/logout', (req, res) => {
  // No specific action needed for logout in this stateless authentication approach
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;
