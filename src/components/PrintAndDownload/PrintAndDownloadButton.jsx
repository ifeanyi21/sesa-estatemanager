import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {FaPrint, FaDownload} from 'react-icons/fa'

function PrintAndDownload() {
    const location = useLocation()
  return (
    <div className={`flex justify-end`}>
    <div className='mr-4'>
    <button className='btn btn-outline-primary items-center btn-sm'>Print <FaPrint className='inline ml-3'/></button>
    </div>

    <div className='mr-4'>
    <button className='btn btn-outline-primary btn-sm'>Download <FaDownload className='inline ml-3'/></button>
    </div>
    
 {location.pathname === '/residents' &&  <Link to='add-residents' className='btn btn-primary btn-sm'><span className='mr-2'>+</span>Add Resident</Link>}
 {location.pathname === '/properties' &&  <Link to='add-property' className='btn btn-primary btn-sm'><span className='mr-2'>+</span>Add Property</Link>}
 {location.pathname === '/household' &&  <Link to='add-house' className='btn btn-primary btn-sm'><span className='mr-2'>+</span>Add Household</Link>}
 {location.pathname === '/estate-staff' &&  <Link to='add-estate-staff' className='btn btn-primary btn-sm'><span className='mr-2'>+</span>Add Estate Staff</Link>}
 {location.pathname === '/site-worker' &&  <Link to='add-site-worker' className='btn btn-primary btn-sm'><span className='mr-2'>+</span>Add Site Worker</Link>}
 {location.pathname === '/security' &&  <Link to='add-security' className='btn btn-primary btn-sm'><span className='mr-2'>+</span>Add Security Guard</Link>}
    
</div>
  )
}

export default PrintAndDownload