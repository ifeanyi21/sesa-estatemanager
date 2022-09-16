import React from 'react'
import {Link} from 'react-router-dom'
import PropertyForm from '../Form/PropertyForm'


function AddProperty() {
  return (
    <div> 
        <Link to='/properties' className='no-underline text-sm'>
            Property
        </Link> <span className='text-sm'>/ Add Property</span> 
        <div className="bg-white p-4 mt-9 rounded">
            <PropertyForm/>
        </div>
    </div>

   
  )
}

export default AddProperty

