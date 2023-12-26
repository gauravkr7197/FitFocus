import { createContext, useReducer } from "react";

export const WorkoutContext = createContext()
export const workoutsReducer=(state,action)=>{ //state: reliable previous state value
    switch(action.type){
        case 'SET_WORKOUTS':
            return {
                workouts:action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts:[action.payload,...state.workouts]
            }  
        default:
            return state      
    }
}

export const WorkoutsContextProvider = ({children}) =>{  //Children property represents the app components that we wrapped inside the index file
    const [state,dispatch]=useReducer(workoutsReducer,{
        workouts:null
    })
    // workoutsReducer is reducer funtion name and initial value is workouts:null

    dispatch({type:'SET_WORKOUTS',payload:[{},{}]})

    return (
        <WorkoutContext.Provider value={{...state,dispatch}}>
            {children} 
            {/*outputting the root app component */}
        </WorkoutContext.Provider>
        // Now all components will have access to our workout context because out app is wrapped inside WorkoutsContextProvider
    )
}
