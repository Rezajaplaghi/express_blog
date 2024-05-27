const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth');

router.get('/login',authControllers.showlogin);
router.post('/login',authControllers.dologin);
router.get('/register',authControllers.showregister);
router.post('/register',authControllers.doregister);

module.exports = router;