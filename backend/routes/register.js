const express = require('express')
const router = express.Router();
const registeruser = require('../controller/registercontroller')

router.route('/').post(registeruser.handlenewuser)

module.exports = router;