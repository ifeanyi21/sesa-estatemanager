import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import PropertyResult from '../PropertyResult'
import AddOccupant from './AddOccupant'


function AddHousehold() {

  const [showOccupant, setShowOccupant] = useState(false)

  const handleSearch = (e)=>{
    e.preventDefault()
    setShowOccupant(true)
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
        showOccupant&& <AddOccupant/>
      }
     

     
    </div>
  )
}

export default AddHousehold