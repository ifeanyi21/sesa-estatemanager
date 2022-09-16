import React from 'react'
import { Link } from 'react-router-dom'
import SecurityForm from '../Form/SecurityForm'

function EditSecurityGuard() {
  return (
    <div>
        <Link to='/security' className='no-underline text-sm'>
            Security Guard
        </Link> <span className='text-sm'>/ Edit Security Guard</span> 
        <div className="bg-white p-4 mt-9 rounded">
       
          <SecurityForm/>
          </div>
    </div>
  )
}

export default EditSecurityGuard