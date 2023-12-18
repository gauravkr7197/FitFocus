const express = require('express')
const router = express.Router()
const {getWorkouts,getWorkout,createWorkout,deleteWorkout,updateWorkout}=require('../controllers/workoutController')



router.get('/',getWorkouts) //GET all workouts
router.get('/:id',getWorkout) //GET single workout
router.post('/',createWorkout) //Post a workout
router.delete('/:id',deleteWorkout) //Delete a workout
router.patch('/:id',updateWorkout) //Update a workout





module.exports = router