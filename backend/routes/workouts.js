const express=require('express')
const Workout = require('../models/workoutModel')
const router= express.Router()
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutController')


//This is to get workouts
router.get('/', getWorkouts)


//Get a single workout
router.get('/:id', getWorkout)

//post a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id',deleteWorkout)

//UPDATE a workout
router.patch('/:id',updateWorkout)


module.exports=router