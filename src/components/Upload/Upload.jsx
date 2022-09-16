import  {useCallback,useContext} from 'react'
import { Form } from 'react-bootstrap'
import {useDropzone} from 'react-dropzone'
import { ACTION_TYPES } from '../store/Actions/Actions'
import ImageUploadContext from '../store/ImageUploader/ImageUploader'

export const Upload =({bodyText,labelText,labelClassName,required})=> {
    const {dispatch} = useContext(ImageUploadContext)


    const onDrop = useCallback(acceptedFiles => {
      dispatch({type:ACTION_TYPES.UPLOAD_IMAGE,payload:acceptedFiles[0]})

      }, [dispatch])
      const {getRootProps, getInputProps, isDragActive,acceptedFiles} = useDropzone({onDrop,accept: {
      'image/jpeg': [],
      'image/png': []
    },
  multiple:false})

   const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
    
  return (
    <div>
      {labelText && <Form.Label className={labelClassName}>{labelText}{required && <span className="text6">*</span>}</Form.Label>}
          <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
          <div className=' rounded cursor-pointer' style={{border:'1px dashed'}}>
       { isDragActive &&
        <div className=''>
          
            {bodyText}
        </div>
          }
           <div>
          
            {bodyText}
        </div>
          </div>
      }
    </div>
     <ul>{acceptedFileItems}</ul>
    </div>
  )
}
