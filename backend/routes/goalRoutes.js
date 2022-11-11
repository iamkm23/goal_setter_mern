const express = require("express");
const { set } = require("mongoose");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalsController");

const authentication = require('../middleware/authMiddleware')

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").patch(updateGoal).delete(deleteGoal);

module.exports = router;
