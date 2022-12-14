import React from 'react'
import {Link} from 'react-router-dom'
import PropertyForm from '../Form/PropertyForm'
import House from '../../../images/House.jpeg'


function EditProperty() {
  return (
    <div> 
        <Link to='/properties' className='no-underline text-sm'>
            Property
        </Link> <span className='text-sm'>/ Edit Property</span> 
    
        <div className="bg-white p-4 mt-9 rounded">
                <div className="mt-16">
                    <img src={House} className='w-36 h-36 rounded-full object-cover' alt='something'/>
                    </div>
                    <div className="mb-20 mt-7">
                    <p className='text-muted text-sm'>Property Code: <span className='text-gray-800'>73737</span> </p>
                        </div>
            <PropertyForm/>
        </div>
    </div>

   
  )
}

export default EditProperty

