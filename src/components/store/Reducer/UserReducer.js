import {ACTION_TYPES} from '../Actions/Actions'

export const UserReducer = (state,action)=>{
    switch (action.type) {
        case ACTION_TYPES.LOGOUT:
            return{
                currentUser: null,
            }
            case ACTION_TYPES.LOGIN:
                return{
                    currentUser: action.payload,
                }
    
        default:
            return  state
    }
}
