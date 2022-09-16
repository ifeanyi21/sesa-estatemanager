import {ACTION_TYPES} from '../Actions/Actions'

export const ImageUploaderReducer = (state,action)=>{
    switch (action.type) {
        case ACTION_TYPES.UPLOAD_IMAGE:
            return{
                ...state,
                image:action.payload
            }
    
        default:
            return  state
    }
}
