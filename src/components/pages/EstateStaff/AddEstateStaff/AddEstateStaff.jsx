import React from 'react'
import { Link } from 'react-router-dom'
import EstateStaffForm from '../Form/EstateStaffForm'

function AddEstateStaff() {
  return (
    <div>
        <Link to='/estate-staff' className='no-underline text-sm'>
            Estate Staff
        </Link> <span className='text-sm'>/ Add Estate Staff</span> 

        <div className="bg-white p-4 mt-8 rounded">
            <EstateStaffForm/>
        </div>
    </div>
  )
}

export default AddEstateStaff