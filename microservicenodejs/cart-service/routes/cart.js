const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const secretKey = 'your_secret_key';

let carts = {};

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Failed to authenticate token' });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.status(401).send({ message: 'No token provided' });
  }
};

router.get('/', authenticate, (req, res) => {
  const username = req.user.username;
  res.json(carts[username] || []);
});

router.post('/', authenticate, (req, res) => {
  const username = req.user.username;
  const product = req.body;
  if (!carts[username]) {
    carts[username] = [];
  }
  carts[username].push(product);
  res.status(201).json(product);
});

module.exports = router;
