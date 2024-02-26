var express = require('express');

var router = express.Router();
const SignupstationControllers = require('../controllers/station')
const LoginstationControllers = require('../controllers/station')

// cat

router.post('/signupstation', SignupstationControllers.Signupstation);
router.post('/loginstation', LoginstationControllers.loginstation);

module.exports = router;