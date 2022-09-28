import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SecurityForm from '../Form/SecurityForm'

function AddSecurityGuard() {
  return (
    <div>
      <div className='justify-between flex'>
        <div>
        <Link to='/security' className='no-underline text-sm'>
            Security Guard
        </Link> <span className='text-sm'>/ Add Security</span> 
        </div>
        <Button size="sm">Bulk upload</Button>
      </div>
        <div className="bg-white p-4 mt-8 rounded">
            <SecurityForm/>
        </div>
    </div>
  )
}

export default AddSecurityGuard