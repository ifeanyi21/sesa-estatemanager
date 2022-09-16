import {createContext, useReducer} from 'react'
import { ImageUploaderReducer } from '../Reducer/UploadImage'


const ImageUploadContext = createContext()

const INITIAL_STATE = []

export function ImageUploader({children}){

    const [state, dispatch] = useReducer(ImageUploaderReducer, INITIAL_STATE)

    // useEffect(() => {
    //     localStorage.setItem("sesauser", JSON.stringify(state.currentUser));
    //   }, [state.currentUser]);

    return <ImageUploadContext.Provider value={{state, dispatch}}>
        {children}
    </ImageUploadContext.Provider>
}

export default ImageUploadContext