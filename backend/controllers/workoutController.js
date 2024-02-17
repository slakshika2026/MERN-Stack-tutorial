const Workout = require('../models/workoutModel')

//get all workouts


//get a single workout


//create a new workout
const createWorkout = async (req, res) => {
    const {title,load,reps}=req.body

    try{
        const workout =await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
    res.json({mssg: 'POST a new workout'})}


//delete workout


//update a workout