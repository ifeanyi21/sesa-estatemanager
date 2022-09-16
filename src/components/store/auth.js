import {createContext, useEffect, useReducer} from 'react'
import { UserReducer } from './Reducer/UserReducer'

const User = createContext()

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("sesauser")) || null,
  };

export function UserProvider({children}){

    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("sesauser", JSON.stringify(state.currentUser));
      }, [state.currentUser]);

    return <User.Provider value={{currentUser:state.currentUser, dispatch}}>
        {children}
    </User.Provider>
}

export default User