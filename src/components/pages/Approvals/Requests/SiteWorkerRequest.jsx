import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SiteWorkerRequest() {
        const [decline, setDecline] = useState(false)
  return (
    <div>
        <Link to={'/approvals'} className='no-underline'>Approvals</Link> <span>/ Site Worker Request</span>
        <div className="bg-white mt-8 p-4">
            {
                !decline? <div className="row">
                <div className="col-lg-6 mb-2">
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <p className='text-muted'>Event Code</p>
                            <p>R83983</p>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <p className='text-muted'>Event Name</p>
                            <p>Child Dedication</p>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <p className='text-muted'>Resident Code</p>
                            <p>H83983</p>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <p className='text-muted'>House Code</p>
                            <p>H083983</p>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <p className='text-muted'>Address Description</p>
                            <p>Something avenue</p>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <p className='text-muted'>Expected Number of Guest(s)</p>
                            <p>28</p>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <p className='text-muted'>Start Date </p>
                            <p>28 May, 2020</p>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <p className='text-muted'>End Date </p>
                            <p>28 May, 2021</p>
                        </div>
                        <div className="col-lg-12 mb-5">
                            <p className='text-muted'>Description</p>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div className="flex">
                            <button onClick={()=>setDecline(true)} className='btn btn-outline-danger btn-sm'>Decline</button>
                            <button className='btn btn-primary btn-sm ml-3'>Approve</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <p className='text-muted'>Status</p>
                    <div className="flex">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="10.6562" fill="white" stroke="#1D9F5F" strokeWidth="0.6875"/>
                        <mask id="mask0_538_20694" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="2" y="2" width="18" height="18">
                        <rect x="2.75" y="2.75" width="16.5" height="16.5" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_538_20694)">
                        <path d="M9.3156 14.8859L5.65466 11.225L6.37654 10.4859L9.3156 13.425L15.6234 7.11719L16.3453 7.85625L9.3156 14.8859Z" fill="#1D9F5F"/>
                        </g>
                        </svg>

                    <p className='ml-3 text-success'>Approved</p>
                    </div>

                    <div className="flex">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="10.6562" fill="white" stroke="#FF2B2B" strokeWidth="0.6875"/>
                    <mask id="mask0_1332_33091" style={{maskType:"alpha"}}  maskUnits="userSpaceOnUse" x="2" y="2" width="18" height="18">
                    <rect x="2.75" y="2.75" width="16.5" height="16.5" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_1332_33091)">
                    <path d="M7.14961 15.5734L6.42773 14.8516L10.2777 11.0016L6.42773 7.15156L7.14961 6.42969L10.9996 10.2797L14.8496 6.42969L15.5715 7.15156L11.7215 11.0016L15.5715 14.8516L14.8496 15.5734L10.9996 11.7234L7.14961 15.5734Z" fill="#FF2B2B"/>
                    </g>
                    </svg>
                    <p className='ml-3 text-danger'>Declined</p>
                    </div>

                   
                   

           
                </div>
            </div>
            :<div className='col-lg-8'>
            <Form className='mb-20'>
                <div className="row mb-12">
                    <div className="col-lg-12 mt-12 mb-4">
                        <label className='text-muted mb-3'>Reason for Decline</label>
                        <Form.Control as={'textarea'} rows={6} placeholder="Reason"/>
                    </div>
                    <div className="col-lg-12">
                        <div className="flex justify-end">
                            <div className='mt-4'>
                            <button onClick={()=>setDecline(false)} className='btn btn-outline-danger btn-sm'>Cancel</button>
                            <button className='btn btn-primary btn-sm ml-3'>Send</button>
                            </div>

                        </div>
                    </div>
                </div>
            </Form>
            
        </div>
            }
           
        </div>
    </div>
  )
}

export default SiteWorkerRequest