const express = require('express')
const router = express.Router();
const student = require('../controller/markscontroller')

router.route('/').get(student.getstudentmarks)
router.route('/').post(student.poststudentmarks)
router.route('/:roll').get(student.specificstudent)
router.route('/:roll/sessions').get(student.totalsessions)
router.route('/:roll/:session').get(student.specificsessionmarks)
router.route('/:roll/:session/subjects').get(student.specificsubjects)

module.exports = router;