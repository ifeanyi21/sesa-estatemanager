import House from '../../../../images/House.jpeg'
import React from 'react'

function PropertyResult() {
  return (
      <div className='p-1 mb-8'>
        <div className="row">
          <div className="col-lg-3 mb-3">
            <img src={House} className='w-36 h-36 object-cover rounded-full' alt="" />
          </div>
          <div className="col-lg-3 mb-3">
            <p className='text-muted'>Property Type : <span></span></p>
            <p className='text-muted'>Property Category : <span></span></p>
            <p className='text-muted'>Property Name : <span></span></p>
            <p className='text-muted'>Address : <span></span></p>
            
          </div>
        </div>
      </div>
  )
}

export default PropertyResult