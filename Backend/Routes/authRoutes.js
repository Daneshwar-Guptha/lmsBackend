const express = require('express');
const router = express.Router();

const { signup } = require('../controllers/authentication/signup.js');
const { login } = require('../controllers/authentication/login.js');
const { logout } = require('../controllers/authentication/logout.js');
const { updateProfile } = require('../controllers/authentication/updateProfile.js');
const { authenticate } = require('../middlewares/authenticate.js');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', authenticate, logout);
router.put('/update-profile', authenticate, updateProfile);

module.exports = router;
