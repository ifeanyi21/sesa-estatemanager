import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ResidentForm from '../Form/Form'

function AddResident() {
  
  return (
    <div>
      <div className='justify-between flex'>
        <div>
        <Link to='/residents' className='no-underline text-sm'>
            Residents
        </Link> <span className='text-sm'>/ Add Resident</span> 
        </div>
        <Button size="sm">Bulk upload</Button>
      </div>
          
        <div className="bg-white p-4 mt-9 rounded">
            <ResidentForm/>
        </div>
    
    </div>
  
  )
}

export default AddResident