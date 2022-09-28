import { Button } from '@mui/material'
import React from 'react'
import { DotIcon } from '../SideBar/icons'

function Notifications() {
  return (
    <div className='px-3 py-3' style={{width:400}}>
        <header className='flex justify-between items-baseline mb-3'>
        <p className='font-medium'>Notifications</p>
        <Button className='text-black'> <span style={{textTransform:'initial',fontSize:12}} className="text-blue-500">Mark all as read</span> </Button>
        </header>
  
        <div className='flex justify-between text-xs mb-3'>
            <div className='flex'>
                <DotIcon color={'#0660FE'}/>
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
                <DotIcon color={'#0660FE'}/>
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