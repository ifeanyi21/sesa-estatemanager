import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import AddRFIDCard from './AddRFIDCard'
import PropertyResult from '../PropertyResult'

function AddRFID() {
  
    const [showRFID, setShowRFID] = useState(false)

    const handleSearch = (e)=>{
    e.preventDefault()
    setShowRFID(true)
  }

  return (
    <div className='mt-8'>
    <Form className='mb-8' onSubmit={handleSearch}>
      <div className="row items-end">
        <div className="col-lg-5 mb-3">
          <label className='mb-3 text-sm'>Property Code</label>
          <Form.Control/>
        </div>
        <div className="col-lg-5 mb-3">
          <button className='btn btn-primary'>Search</button>
        </div>
      </div>
    </Form>
      <PropertyResult/>
      <hr />

       {
        showRFID&& <AddRFIDCard/>
      }
    

 
    </div>
  )
}

export default AddRFID