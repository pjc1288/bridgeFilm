const express = require('express');
const { render } = require('pug');
const authController= require('../controllers/auth')
const router = express.Router();

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/logout', authController.logout);


module.exports = router;