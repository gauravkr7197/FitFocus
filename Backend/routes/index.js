const express = require('express')
const router = express.Router()
const {getWorkouts,getWorkout,createWorkout}=require('../controllers/workoutController')

router.get('/',getWorkouts) //GET all workouts
router.get('/:id',getWorkout) //GET single workout
router.post('/',createWorkout) //Post a workout





module.exports = router