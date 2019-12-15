const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

const User = require('../models/user.model');
// const auth = require('../middleware/auth');

require('dotenv').config();

// @route   POST /auth
// @desc    Auth user / login
// @access  Public
router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: 'User does not exist' });

    //validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

      jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            email: user.email,
          },
        });
      });
    });
  });
});

// @route   GET /auth/user
// @desc    get user data & validate user constantly
// @access  Private
router.get('/user', (req, res) => {
  User.findById(req.user.id)
    .select('-password') // disregard the password
    .then(user => res.json(user));
});

module.exports = router;
