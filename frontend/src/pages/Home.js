import { useEffect } from "react"

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm.js"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.js"

const Home=()=>{
    // const [workouts,setWorkouts] = useState(null)
    const {workouts,dispatch}=useWorkoutsContext()

    //useEffect fires a function when the component is rendered
    useEffect(()=>{
        const fetchWorkouts = async()=>{
            const response = await fetch('/api/fitFocus')
            const json = await response.json()

            if(response.ok){
                // setWorkouts(json)
                dispatch({type:'SET_WORKOUTS',payload:json})
            }
        }
        fetchWorkouts()
    },[dispatch]) 
    //By giving [], it means this funtion will only fire once

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout}/> //workout={workout} passing the props
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home