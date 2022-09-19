import {createContext, useReducer} from 'react'
import { ImageUploaderReducer } from '../Reducer/UploadImage'


const ImageUploadContext = createContext()

const INITIAL_STATE = []

export function ImageUploader({children}){

    const [state, dispatch] = useReducer(ImageUploaderReducer, INITIAL_STATE)

    return <ImageUploadContext.Provider value={{state, dispatch}}>
        {children}
    </ImageUploadContext.Provider>
}

export default ImageUploadContext