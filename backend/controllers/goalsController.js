const asyncHandler = require("express-async-handler");
const Goal = require("../models/GoalsModal");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});
  res.status(200).json({ goals });
});

const setGoal = asyncHandler(async (req, res) => {
  const { text } = req.body;

  if(!text) {
    res.status(400)
    throw new Error('Please provide a text field')
  }

  const goal = await Goal.create({ text });
  res.status(201).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const { id: goalID } = req.params;

  const goal = await Goal.findOneAndUpdate({ _id: goalID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!goal) {
    res.status(400);
    throw new Error(`Cannot Update, Goal not found with id: ${goalID}`);
  }
  res.status(200).json({ msg: `Updated goal ${goalID}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  const { id: goalID } = req.params;

  const goal = await Goal.findOneAndDelete({ _id: goalID });

  if (!goal) {
    res.status(400);
    throw new Error(`Cannot delete, Goal not found with id: ${goalID}`);
  }

  res.status(200).json({ msg: `Deleted goal ${goalID}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
