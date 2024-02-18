const express=require('express')
const Workout = require('../models/workoutModel')
const router= express.Router()
const {
    createWorkout,
    getWorkout,
    getWorkouts
}=require('../controllers/workoutController')


//This is to get workouts
router.get('/', getWorkouts)


//Get a single workout
router.get('/:id', getWorkout)

//post a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE a workout'})
})

//UPDATE a workout
router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE a new workout'})
})


module.exports=router