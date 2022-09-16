import React from 'react'
import Car from '../../../../images/car.jpeg'


function ProductList() {
  return (
    <div className="border rounded-lg">
            <div className="row p-3">
                    <div className="col-lg-3 p-3 mb-3">
                        <img src={Car} className='rounded' alt="" />
                    </div>
                    <div className="col-lg-3 p-3 mb-3">
                       <p className='text-muted mb-2 text-sm'>Property Code: </p>
                       <p className='text-muted mb-2 text-sm'>Product Name: </p>
                       <p className='text-muted mb-2 text-sm'>Amount Type: </p>
                       <p className='text-muted mb-2 text-sm'>Amount Pay Type: </p>
                       <p className='text-muted mb-2 text-sm'>Amount (Total): </p>
                    </div>
                    <div className="col-lg-3 p-3 mb-3">
                       <p className='text-muted mb-2 text-sm'>Start Date: </p>
                       <p className='text-muted mb-2 text-sm'>End Date: </p>
                       <p className='text-muted mb-2 text-sm'>Track Payment: </p>
                    </div>
                </div>
                <div className="p-3 flex overflow-auto">
                    <div className='text-center mx-4'>
                    <div style={{backgroundColor:'#23C375'}} className="rounded-full w-7 h-7 mx-auto"></div>
                    <p style={{color:'#23C375'}}>₦5,000</p>
                    </div>
                    <div className='text-center mx-4'>
                    <div style={{backgroundColor:'#23C375'}} className="rounded-full w-7 h-7 mx-auto"></div>
                    <p style={{color:'#23C375'}}>₦5,000</p>
                    </div>
                    <div className='text-center mx-4'>
                    <div style={{backgroundColor:'#23C375'}} className="rounded-full w-7 h-7 mx-auto"></div>
                    <p style={{color:'#23C375'}}>₦5,000</p>
                    </div>
                   
                </div>
            </div>
  )
}

export default ProductList