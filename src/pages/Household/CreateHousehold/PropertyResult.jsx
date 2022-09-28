import House from '../../../images/House.jpeg'
import React from 'react'
import { Skeleton } from '@mui/material'

function PropertyResult(props) {
  const {show} = props
  return (
      <div className='p-1 mb-8'>
        <div className="row">
          <div className="col-lg-3 mb-3">
                {show ? (
              <img
                src={House}
                style={{ border: "3px solid rgb(94 204 94)" }}
                className="w-36 h-36 object-cover rounded-full"
                alt=""
              />
            ) : (
               <Skeleton animation="wave" variant="circular" width={144} height={144} />

            )}
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