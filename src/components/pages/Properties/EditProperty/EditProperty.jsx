import React from 'react'
import {Link} from 'react-router-dom'
import PropertyForm from '../Form/PropertyForm'
import House from '../../../../images/House.jpeg'


function EditProperty() {
  return (
    <div> 
        <Link to='/properties' className='no-underline text-sm'>
            Property
        </Link> <span className='text-sm'>/ Edit Property</span> 
    
        <div className="bg-white p-4 mt-9 rounded">
            <div className="row items-center">
                <div className="col-lg-3 mb-3">
                    <img src={House} className='w-44 h-32 object-cover rounded' alt='something'/>
                    </div>
                    <div className="col-lg-4 mb-3">
                    <p className='text-muted text-sm'>Property Code: <span className='text-gray-800'>73737</span> </p>
                        </div>
                </div>
            <PropertyForm/>
        </div>
    </div>

   
  )
}

export default EditProperty

