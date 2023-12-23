import { createContext, useReducer } from "react";

export const WorkoutContext = createContext()

const WorkoutsContextProvider = ({children}) =>{
    const [state,dispatch]=useReducer(workoutsReducer,{
        workouts:null
    })

    dispatch({type:'SET_WORKOUTS',payload:[{},{}]})

    return (
        <WorkoutContext.Provider>
            {children}
        </WorkoutContext.Provider>
    )
}