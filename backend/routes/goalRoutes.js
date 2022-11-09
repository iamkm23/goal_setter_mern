const express = require('express')
const router = express.Router();
const {getGoals} = require('../controllers/goalsController')

router.route('/').get(getGoals)

module.exports = router