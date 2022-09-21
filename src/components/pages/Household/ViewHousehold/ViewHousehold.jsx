import React from 'react'
import {Link} from 'react-router-dom'
import ProfilePicture from '../../../../images/House.jpeg'
import ViewImage from '../../../ViewPageImage/ViewImage'
// import Car from '../../../../images/car.jpeg'
// import { Menu, } from '@headlessui/react'
// import HouseDropDown from './DropDown'
// import { Box, Button } from '@mui/material'
// import { DataGrid } from '@mui/x-data-grid'
import HouseholdModal from './HouseholdModal/HouseholdModal'
//import { DeleteIcon } from '../../../SideBar/icons'

function ViewHousehold() {
   
    // const dummyRFid = [1,2]

    // const dummyAccessCard = [1]
  return (
    <div>
          <Link to='/household' className='no-underline text-sm'>
            Household
        </Link> <span className='text-sm'>/ Household Details</span> 

        <div className="bg-white p-5 mt-8">
            <ViewImage image={ProfilePicture}/>
            <div className="table-responsive mt-24">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                        <td>Estate</td>
                        <td>Silver land</td>
                        </tr>
                        <tr>
                        <td>Property Code</td>
                        <td>09873</td>
                        </tr>
                        <tr>
                        <td>Property Type</td>
                        <td>3 Bedroom self con</td>
                        </tr>
                        <tr>
                        <td>Property Class</td>
                        <td>Residential</td>
                        </tr>
                        <tr>
                        <td>Property Address</td>
                        <td>Block 23 ikoyi</td>
                        </tr>

                        <tr>
                        <td>Number of occupants</td>
                        <td>5</td>
                        </tr>

                        <tr>
                        <td>Number of Access Card</td>
                        <td>5</td>
                        </tr>

                        <tr>
                        <td>Number of RFID</td>
                        <td>1</td>
                        </tr>

                        <tr>
                        <td>Number of Assigned Products</td>
                        <td>5</td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>

             <footer className='flex justify-between mt-20'>
                 <HouseholdModal/>
               <button className='btn' style={{border:"1px solid #FF9500",color:"#FF9500"}}>Deactivate</button> 
            </footer>
           



{/*
                <p className='text-xl font-semibold mt-20'>Landlord Details</p>
                

                <p className='text-xl font-semibold mt-6'>RFID List</p>

                {
                    dummyRFid.map(rfid=>{
                        return(<div key={rfid} className="col-lg-12 p-4 border rounded mb-4">
                    <div className="row">
                <div className="col-lg-3 mb-4">
                <img src={Car} className='w-48 h-36 object-cover' alt="" />
                </div>
                <div className="col-lg-8 mb-4">
                    <p className='text-muted'>RFID Serial Number : <span className='text-gray-800'></span></p>
                    <p className='text-muted'>Vehicle Registration No : <span className='text-gray-800'>App hye 938</span></p>
                    <p className='text-muted'>Vehicle Type : <span className='text-gray-800'>Car</span></p>
                    <p className='text-muted'>Vehicle Make : <span className='text-gray-800'>Toyota</span></p>
                </div>

                <div className="col-lg-1 mb-4 relative">
        
                <Menu as="div" className="absolute right-0 inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 15.2751C1.08333 15.2751 0.729333 15.1291 0.438 14.8371C0.146 14.5458 0 14.1918 0 13.7751C0 13.3584 0.146 13.0041 0.438 12.7121C0.729333 12.4208 1.08333 12.2751 1.5 12.2751C1.91667 12.2751 2.27067 12.4208 2.562 12.7121C2.854 13.0041 3 13.3584 3 13.7751C3 14.1918 2.854 14.5458 2.562 14.8371C2.27067 15.1291 1.91667 15.2751 1.5 15.2751ZM1.5 9.5001C1.08333 9.5001 0.729333 9.3541 0.438 9.0621C0.146 8.77076 0 8.41676 0 8.0001C0 7.58343 0.146 7.22943 0.438 6.9381C0.729333 6.6461 1.08333 6.5001 1.5 6.5001C1.91667 6.5001 2.27067 6.6461 2.562 6.9381C2.854 7.22943 3 7.58343 3 8.0001C3 8.41676 2.854 8.77076 2.562 9.0621C2.27067 9.3541 1.91667 9.5001 1.5 9.5001ZM1.5 3.7251C1.08333 3.7251 0.729333 3.5791 0.438 3.2871C0.146 2.99576 0 2.64176 0 2.2251C0 1.80843 0.146 1.4541 0.438 1.1621C0.729333 0.870765 1.08333 0.725098 1.5 0.725098C1.91667 0.725098 2.27067 0.870765 2.562 1.1621C2.854 1.4541 3 1.80843 3 2.2251C3 2.64176 2.854 2.99576 2.562 3.2871C2.27067 3.5791 1.91667 3.7251 1.5 3.7251Z" fill="#1C1B1F"/>
                    </svg>
                </Menu.Button>
            </div>
  
                    </Menu>
                    
                
                </div>
                    </div>
                        </div>)
                    })
                }

                <p className='text-xl font-semibold mt-6'>Access Card List</p>

                {
                    dummyAccessCard.map(rfid=>{
                        return(<div key={rfid} className="col-lg-12 p-4 border rounded mb-4">
                    <div className="row">
                <div className="col-lg-3 mb-4">
                <img src={Car} className='w-48 h-36 object-cover' alt="" />
                </div>
                <div className="col-lg-8 mb-4">
                    <p className='text-muted'>Access Card Serial Number : <span className='text-gray-800'></span></p>
                    <p className='text-muted'>Name : <span className='text-gray-800'>App hye 938</span></p>
                    <p className='text-muted'>Phone Number : <span className='text-gray-800'>Car</span></p>
                </div>

                <div className="col-lg-1 mb-4 relative">

                <Menu as="div" className="absolute right-0 inline-block text-left">
                <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 15.2751C1.08333 15.2751 0.729333 15.1291 0.438 14.8371C0.146 14.5458 0 14.1918 0 13.7751C0 13.3584 0.146 13.0041 0.438 12.7121C0.729333 12.4208 1.08333 12.2751 1.5 12.2751C1.91667 12.2751 2.27067 12.4208 2.562 12.7121C2.854 13.0041 3 13.3584 3 13.7751C3 14.1918 2.854 14.5458 2.562 14.8371C2.27067 15.1291 1.91667 15.2751 1.5 15.2751ZM1.5 9.5001C1.08333 9.5001 0.729333 9.3541 0.438 9.0621C0.146 8.77076 0 8.41676 0 8.0001C0 7.58343 0.146 7.22943 0.438 6.9381C0.729333 6.6461 1.08333 6.5001 1.5 6.5001C1.91667 6.5001 2.27067 6.6461 2.562 6.9381C2.854 7.22943 3 7.58343 3 8.0001C3 8.41676 2.854 8.77076 2.562 9.0621C2.27067 9.3541 1.91667 9.5001 1.5 9.5001ZM1.5 3.7251C1.08333 3.7251 0.729333 3.5791 0.438 3.2871C0.146 2.99576 0 2.64176 0 2.2251C0 1.80843 0.146 1.4541 0.438 1.1621C0.729333 0.870765 1.08333 0.725098 1.5 0.725098C1.91667 0.725098 2.27067 0.870765 2.562 1.1621C2.854 1.4541 3 1.80843 3 2.2251C3 2.64176 2.854 2.99576 2.562 3.2871C2.27067 3.5791 1.91667 3.7251 1.5 3.7251Z" fill="#1C1B1F"/>
                    </svg>
                </Menu.Button>
                </div>
                </Menu>
                    

                </div>
                    </div>
                        </div>)
                    })
                }


                <p className='text-xl font-semibold mt-6'>Product List</p>

                {
                    dummyAccessCard.map(rfid=>{
                        return(
                            <div key={rfid} className="row border rounded-sm p-3">
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
                    })
                } */}
                

        </div>
    </div>
  )
}

export default ViewHousehold