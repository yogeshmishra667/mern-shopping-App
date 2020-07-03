const express = require('express');
const newUser = require('../controllers/user.controller');
const router = express.Router();

router.get('/createadmin', newUser.newUser);

module.exports = router;
