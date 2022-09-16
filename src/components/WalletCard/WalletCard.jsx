import React from 'react'
import WalletLogo from '../../images/walletlogo.png'
import { Link,useLocation } from 'react-router-dom'
import { NairaIcon, WalletCircleBottom, WalletCircleTop, WalletGroupedIcon } from '../SideBar/icons'

function WalletCard({name, to}) {
    const location = useLocation()
  return (
    <Link to={to} className='no-underline text-white'>
    <div style={{backgroundColor:'#6200EA',height:205}} className='overflow-hidden flex relative text-center m-auto w-full rounded-md text-white mb-12'>
       
        <img className='absolute left-1 -top-1 z-10' style={{width:100}} src={WalletLogo} alt="Sesa Logo" />

        <div className={`absolute top-20 ${location.pathname === "/overview" || location.pathname === '/wallet' || location.pathname === '/commission-request' ?'left-1/2':'left-2/3' }`}>
            <WalletCircleBottom/>
        </div>
        <div className="absolute left-6">
            <WalletCircleTop/>
        </div>
        <div className="absolute -bottom-2">
            <WalletGroupedIcon/>
        </div>
        
        <p className='absolute z-40 left-3 text-sm bottom-1 text-white'>{name}</p>
       
    <p className='m-auto z-40 text-3xl font-bold flex items-center'><span className='mr-2'><NairaIcon/></span>233,500 <span className='font-extralight text-sm ml-3'></span></p>
</div>
</Link>
  )
}

export default WalletCard