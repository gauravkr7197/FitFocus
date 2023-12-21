import { useEffect,useState } from "react"

//components
import WorkoutDetails from '../components/WorkoutDetails'

const Home=()=>{
    const [workouts,setWorkouts] = useState(null)

    //useEffect fires a function when the component is rendered
    useEffect(()=>{
        const fetchWorkouts = async()=>{
            const response = await fetch('/api/fitFocus')
            const json = await response.json()

            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    },[]) //By giving [], it means this funtion will only fire once

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout}/> //workout={workout} passing the props
                ))}
            </div>
        </div>
    )
}

export default Home