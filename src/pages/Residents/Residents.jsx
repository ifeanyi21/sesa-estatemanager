import React from 'react'
import { ResidentIcon } from '../../components/SideBar/icons'
import ResidentsTab from './Tab'
import EmptyData from '../../components/EmptyData/EmptyData'

function Residents() {
    const residents = [
        {
            resCode:6262
        }
    ]
  return (
    <>
    {
        residents.length>0?        <div>
        <h6 className='font-medium text-xl'>Residents</h6>

        <div className="row">
            <div className="col-lg-4 col-md-6 p-2 mb-1">
                <div className="bg-white p-3 border shadow-sm rounded mx-auto" style={{width:'100%',height:156}}>
                    <div className="flex">
                        <ResidentIcon/>
                        <div style={{marginLeft:33}}>
                            <p className='mb-2'>Unique Residents</p>
                            <p className='m-0 text-success font-semibold' style={{fontSize:26}}>18,000</p>
                        </div>
                    </div>
                    <hr />
                    <span className='text-sm text-muted mr-10'>Alpha 56%</span>  <span className='text-sm text-muted'>Res. User 46%</span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-2 mb-1">
                <div className="bg-white p-3 border shadow-sm rounded mx-auto" style={{width:'100%',height:156}}>
                    <div className="flex">
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="54" height="54" rx="27" fill="#D9EBFB"/>
                        <path d="M27.333 17.6393C26.6955 17.6393 26.1465 17.4149 25.6858 16.9661C25.2256 16.5179 24.9956 15.975 24.9956 15.3375C24.9956 14.6762 25.2199 14.1212 25.6687 13.6724C26.117 13.2241 26.6718 13 27.333 13C27.9705 13 28.5196 13.2241 28.9803 13.6724C29.4405 14.1212 29.6705 14.6643 29.6705 15.3018C29.6705 15.9631 29.4461 16.5179 28.9973 16.9661C28.5491 17.4149 27.9943 17.6393 27.333 17.6393ZM24.358 40.0224V21.3581C22.8235 21.2402 21.3595 21.0809 19.9661 20.8804C18.5732 20.6792 17.2512 20.4253 16 20.1188L16.2831 18.95C18.1247 19.375 19.9369 19.6819 21.7196 19.8706C23.5024 20.0593 25.3735 20.1536 27.333 20.1536C29.2926 20.1536 31.1637 20.0593 32.9464 19.8706C34.7292 19.6819 36.5533 19.375 38.4187 18.95L38.6661 20.1188C37.4149 20.4253 36.0929 20.6792 34.7 20.8804C33.3066 21.0809 31.8426 21.2402 30.308 21.3581V40.0224H29.1036V30.9911H25.5625V40.0224H24.358Z" fill="#0446B9"/>
                        </svg>

                        <div style={{marginLeft:33}}>
                            <p className='mb-2'>KYR Validation</p>
                            <p className='m-0 font-semibold'  style={{color:'#0446B9', fontSize:26}}>45%</p>
                        </div>
                    </div>
                    <hr />
                    <span className='text-muted' style={{fontSize:13}}>% of residents whose identity has been Validated</span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-2 mb-1">
                <div className="bg-white p-3 border shadow-sm rounded mx-auto" style={{width:'100%',height:156}}>
                    <div className="flex">
                        <ResidentIcon/>
                        <div style={{marginLeft:33}}>
                            <p className='mb-2'>Resident Profiles</p>
                            <p className='m-0 font-semibold text-success' style={{fontSize:26}}>18,000</p>
                        </div>
                    </div>
                    <hr />
                    <span className='text-sm text-muted mr-3'>LR 39%</span>  <span className='text-sm text-muted mr-3'>TR 29%</span>  <span className='text-sm text-muted mr-3'>LD 10%</span>  <span className='text-sm text-muted'>LNR 29%</span> 
                </div>
                      </div>
                      <div style={{marginTop:32}}>
                        <ResidentsTab/>
                      </div>
 
        </div>
    </div>:<EmptyData text='Residents'/>
    }

    </>

  )
}

export default Residents