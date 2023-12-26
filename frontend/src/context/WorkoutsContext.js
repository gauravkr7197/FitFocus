import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()
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
        case 'DELETE_WORKOUT':
            return{
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
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

    // dispatch({type:'SET_WORKOUTS',payload:[{},{}]})

    // {/* outputting the root app component */}

    return (
        <WorkoutsContext.Provider value={{...state,dispatch}}>
            {children} 
        </WorkoutsContext.Provider>
    )
}
