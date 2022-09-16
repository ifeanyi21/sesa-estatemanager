import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import CSS from './EmptyData.module.css'


function EmptyData(props) {
    const location = useLocation()
    const {text} = props
  return (
    <div className={`${CSS.emptyContainer} flex justify-center mx-auto p-24`}>
            <div className='bg-white w-full text-center rounded-lg p-16'>
            <svg width="100%" height="334" viewBox="0 0 334 334" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="174.478" cy="166.313" r="71.103" fill="#F0F0F0"/>
              <path d="M185.525 149.538L252.216 168.359L245.261 242.415L165.477 222.366L185.525 149.538Z" fill="#D2D2D2"/>
              <path d="M251.807 167.95L181.843 149.948C178.434 154.857 169.651 167.541 161.795 178.997C153.939 190.453 140.247 204.5 134.382 210.092L216.211 234.232C217.712 233.413 224.067 227.44 237.487 210.092C250.907 192.744 252.625 174.769 251.807 167.95Z" fill="#F3F3F3" stroke="#CCCCCC" strokeWidth="0.818293"/>
              <circle cx="187.98" cy="169.177" r="3.27317" fill="#C4C4C4"/>
              <circle cx="178.161" cy="186.362" r="3.27317" fill="#C4C4C4"/>
              <circle cx="168.341" cy="201.909" r="3.27317" fill="#C4C4C4"/>
              <circle cx="122.216" cy="132.018" r="29.8586" transform="rotate(25.8347 122.216 132.018)" fill="#F0F0F0" stroke="#D2D2D2" strokeWidth="0.818293"/>
              <rect width="16.3659" height="2.45488" transform="matrix(1 0 0 -1 112.806 140.61)" fill="#C4C4C4"/>
              <circle cx="105.032" cy="127.108" r="4.50061" fill="#C4C4C4"/>
              <circle cx="136.946" cy="127.108" r="4.50061" fill="#C4C4C4"/>
              <rect x="186.524" y="189.186" width="39.2781" height="1.63659" rx="0.818293" transform="rotate(15.5 186.524 189.186)" fill="#C4C4C4"/>
              <rect x="177.957" y="205.769" width="35.5522" height="1.63659" rx="0.818293" transform="rotate(15.5 177.957 205.769)" fill="#C4C4C4"/>
              <rect x="197.306" y="171.669" width="39.2781" height="1.63659" rx="0.818293" transform="rotate(14.5 197.306 171.669)" fill="#C4C4C4"/>
              </svg>

              <p className='my-3'>Oops you have not added any {text} yet</p>
              {location.pathname === '/residents'&&<Link to='add-residents' className='btn btn-primary btn-sm'><span className='mr-2'>+</span>Add Residents</Link>}
              {location.pathname === '/properties'&&<Link to='add-property' className='btn btn-primary btn-sm'><span className='mr-2'>+</span>Add Property</Link>}
              {location.pathname === '/household'&&<Link to='add-house' className='btn btn-primary btn-sm'><span className='mr-2'>+</span>Add Household</Link>}
              {location.pathname === '/estate-staff'&&<Link to='add-estate-staff' className='btn btn-primary btn-sm'><span className='mr-2'>+</span>Add Estate staff</Link>}
              {location.pathname === '/site-worker'&&<Link to='add-site-worker' className='btn btn-primary btn-sm'><span className='mr-2'>+</span>Add Site Worker</Link>}
              {location.pathname === '/security'&&<Link to='add-security' className='btn btn-primary btn-sm'><span className='mr-2'>+</span>Add Security Guard</Link>}
              {location.pathname === '/payments'&&<Link to='add-payment' className='btn btn-primary btn-sm'><span className='mr-2'>+</span>Add Payment</Link>}
              {location.pathname === "/rules" &&  <div>
                    <Link className='btn-primary btn no-underline btn-sm mr-3' to={'/rules/add-rule'}>Add Rules</Link>
                    <Link className='btn-warning btn no-underline btn-sm' to={'/rules/add-message'}>Add Vistior Message</Link>
                </div> }
             
            </div>
          </div>
  )
}

export default EmptyData