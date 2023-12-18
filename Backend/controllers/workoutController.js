const Workout = require('../models/workoutModels')
const mongoose = require('mongoose')


//get all workouts
const getWorkouts = async(req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1}) //leaving the object as blank to get all the objects
    // .sort({createdAt:-1}) to get the sorting order as latest first
    res.status(200).json(workouts)
}


//get a single workout
const getWorkout = async(req,res)=>{
    const {id} = req.params
    //To check for a valid id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Not valid Id'})
    }

    const workout = await Workout.findById(id)
    if (!workout){
        return res.status(404).json({error:'No such workout'})
    }
    res.status(200).json(workout)
} 



//create new workout
const createWorkout = async(req,res)=>{
    const{title,load,reps}=req.body
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}


//delete a workout
const deleteWorkout = async(req,res)=>{
    const {id} = req.params
    //To check for a valid id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Not valid Id'})
    }
    const workout = await Workout.findOneAndDelete({_id:id})
    if (!workout){
        return res.status(404).json({error:'No such workout'})
    }
    res.status(200).json(workout)
}



//update a workout
const updateWorkout = async(req,res)=>{
    const {id} = req.params
    //To check for a valid id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Not valid Id'})
    }
    const workout = await Workout.findOneAndUpdate({_id:id},{...req.body})
    if (!workout){
        return res.status(404).json({error:'No such workout'})
    }
    res.status(200).json(workout)
}




module.exports={getWorkouts,getWorkout,createWorkout,deleteWorkout,updateWorkout}