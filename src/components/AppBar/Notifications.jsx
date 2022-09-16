import { Button } from '@mui/material'
import React from 'react'

function Notifications() {
  return (
    <div className='px-3 py-3' style={{width:400}}>
        <header className='flex justify-between items-baseline mb-3'>
        <p className='font-medium'>Notifications</p>
        <Button className='text-black'> <span style={{textTransform:'initial',fontSize:12}} className="text-blue-500">Mark all as read</span> </Button>
        </header>
  
        <div className='flex justify-between text-xs mb-3'>
            <div className='flex'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="7" fill="#0660FE"/>
                </svg>
                <div className='ml-3'>
                    <p className='font-semibold mb-2'>Estate Management</p>
                    <p className='font-extralight'>Sunset Estate request for money withdrawal</p>
                </div>
            </div>
            <div className='text-muted text-xs'>
                <p>1 hour ago</p>
            </div>
        </div>
        <div className='flex justify-between text-xs mb-3'>
            <div className='flex'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="7" fill="#0660FE"/>
                </svg>
                <div className='ml-3'>
                    <p className='font-semibold mb-2'>Estate Management</p>
                    <p className='font-extralight'>Sunset Estate request for money withdrawal</p>
                </div>
            </div>
            <div className='text-muted text-xs'>
                <p>1 hour ago</p>
            </div>
        </div>
       

    </div>
  )
}

export default Notifications