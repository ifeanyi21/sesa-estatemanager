import React from 'react'
import {Link} from 'react-router-dom'
import ResidentForm from '../Form/Form'


function EditResident() {
  return (
    <div>
         <Link to='/residents' className='no-underline text-sm'>
            Residents
        </Link> <span className='text-sm'>/ Edit Resident</span> 
        <div className="bg-white p-4 mt-9 rounded">
      
            <ResidentForm/>
        </div>
    </div>
  )
}

export default EditResident