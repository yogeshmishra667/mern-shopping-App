const express = require('express');
const ctrl = require('../controllers/user.controller');
const router = express.Router();

router.get('/createadmin', ctrl.newUser);
router.post('/signin', ctrl.loginCtrl);
router.post('/register', ctrl.registerCtrl);

module.exports = router;
