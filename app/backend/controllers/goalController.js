const asyncHandler = require('express-async-handler')
// const getGoals = asyncHandler(async (req, res) => {
// res.json({ message: 'Get goals' })
// })

const GoalModel = require('../models/goalModel')

const createGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field');
    }
    const goal = await GoalModel.create({ text: req.body.text })
    res.status(200).json(goal)
})


const updateGoal = asyncHandler(async (req, res) => {
const goal = await GoalModel.findById(req.params.id)
    if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
    }
    const updatedGoal = await GoalModel.findByIdAndUpdate(req.params.id,
    req.body)
    res.status(200).json(updatedGoal)
})

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await GoalModel.findById(req.params.id)
    if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
    }
    const deletedGoal = await GoalModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedGoal)
})
module.exports = {
createGoal,
updateGoal,
deleteGoal,
createGoal,
}