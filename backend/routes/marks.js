const express = require('express')
const router = express.Router();
const student = require('../controller/markscontroller')

router.route('/').get(student.getstudentmarks)
router.route('/').post(student.poststudentmarks)
router.route('/:roll').get(student.specificstudent)

module.exports = router;