const express = require('express');
const ctrl = require('../controllers/user.controller');
const router = express.Router();

router.get('/createadmin', ctrl.newUser);
router.post('/signin', ctrl.loginCtrl);

module.exports = router;
