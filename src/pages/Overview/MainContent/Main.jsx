import React from 'react'
import{ ResidentIcon, PropertiesOverview, SecurityGuardsIcon }from '../../../components/SideBar/icons'
import CSS from '../Overview.module.css'

function Main() {
  return (
    <div className={`${CSS.overViewContainer}`} style={{width:'56%'}}>
        {/* <div className='w-full'>
            <img src={AdvertImage} alt="" />
        </div> */}

        <div className='mt-8'>
            <div className={CSS.isUhe}>
                <h4 className='mb-5 font-medium'>Current Overview</h4>
                <div className="row">
                    <div className="col-lg-5 bg-white mb-16 mr-8 border shadow-sm rounded">
                        <div className="p-3">
                            <div className="flex">
                                <ResidentIcon/>
                                <div style={{marginLeft:33}}>
                                    <p className='mb-2'>Residents</p>
                                    <p className='m-0 text-success text-2xl font-bold'>18,000</p>
                                </div>
                            </div>
                              <hr />
                              <span className='text-sm text-muted mr-10'>Alpha 56%</span>  <span className='text-sm text-muted'>Res. User 46%</span>  

           
                        </div>
                    </div>
                    <div className="col-lg-5 bg-white mb-16 mr-8 border shadow-sm rounded">
                        <div className="p-3">
                            <div className="flex">
                                <PropertiesOverview/>
                                <div style={{marginLeft:33}}>
                                    <p className='mb-2'>Properties</p>
                                    <p className='m-0 text-2xl font-bold' style={{color:'#B65800'}}>5,000</p>
                                </div>
                            </div>
                            <hr />
                            <span className='text-sm text-muted mr-10'>Residential 56%</span>  <span className='text-sm text-muted'>Business 46%</span>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-16 mr-8 border shadow-sm rounded bg-white">
                        <div className="p-3">
                            <div className="flex">
                                <SecurityGuardsIcon/>
                                <div style={{marginLeft:33}}>
                                    <p className='mb-2'>Security Guards</p>
                                    <p className='m-0 text-2xl font-bold' style={{color:'#3297EF'}}>18,000</p>
                                </div>
                            </div>
                            <hr />
                            <span className='text-sm text-muted'>23 guards on duty</span> 
                        </div>
                    </div>
                    <div className="col-lg-5 mb-16 mr-8 border shadow-sm rounded bg-white">
                        <div className="p-3 flex justify-between" style={{height:147}}>
                            <div className='px-3'>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="36" height="36" rx="18" fill="#EAFEE7"/>
                                <mask id="mask0_596_37562" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="6" y="6" width="24" height="24">
                                <rect x="6.66669" y="6.33398" width="22.6667" height="22.6667" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_596_37562)">
                                <path d="M19.4167 11.5288C18.8973 11.5288 18.4527 11.3436 18.0832 10.9734C17.7129 10.6038 17.5278 10.1593 17.5278 9.63987C17.5278 9.12042 17.7129 8.67559 18.0832 8.30537C18.4527 7.93577 18.8973 7.75098 19.4167 7.75098C19.9362 7.75098 20.381 7.93577 20.7512 8.30537C21.1208 8.67559 21.3056 9.12042 21.3056 9.63987C21.3056 10.1593 21.1208 10.6038 20.7512 10.9734C20.381 11.3436 19.9362 11.5288 19.4167 11.5288ZM14.5292 28.0565C14.1829 28.0565 13.9074 27.9347 13.7028 27.691C13.4982 27.4467 13.4352 27.1593 13.5139 26.8288L15.9223 14.7399L14.2223 15.401V17.6676C14.2223 17.9352 14.1319 18.1594 13.9512 18.3401C13.7699 18.5214 13.5454 18.6121 13.2778 18.6121C13.0102 18.6121 12.7858 18.5214 12.6044 18.3401C12.4237 18.1594 12.3334 17.9352 12.3334 17.6676V15.4246C12.3334 15.0468 12.4357 14.7005 12.6403 14.3857C12.8449 14.0709 13.1283 13.8348 13.4903 13.6774L17.1028 12.1426C17.5593 11.9538 18.0237 11.9339 18.4959 12.0831C18.9681 12.233 19.338 12.5204 19.6056 12.9454L20.55 14.4565C20.8963 15.0075 21.3449 15.4797 21.8959 15.8732C22.4468 16.2667 23.0764 16.5264 23.7848 16.6524C24.0209 16.6838 24.2176 16.7899 24.375 16.9706C24.5324 17.152 24.6112 17.3528 24.6112 17.5732C24.6112 17.8723 24.5051 18.1203 24.2929 18.3174C24.0801 18.5139 23.8399 18.5885 23.5723 18.5413C22.738 18.4153 21.9629 18.1515 21.247 17.7498C20.5305 17.3487 19.9204 16.8491 19.4167 16.251L18.85 19.0843L20.2431 20.4065C20.432 20.5954 20.5777 20.8038 20.6804 21.0318C20.7824 21.2603 20.8334 21.5084 20.8334 21.776V27.1121C20.8334 27.3797 20.743 27.6038 20.5623 27.7845C20.381 27.9659 20.1565 28.0565 19.8889 28.0565C19.6213 28.0565 19.3972 27.9659 19.2165 27.7845C19.0352 27.6038 18.9445 27.3797 18.9445 27.1121V22.3899L16.9612 20.501L15.4264 27.3482C15.3792 27.5371 15.2731 27.7024 15.1082 27.844C14.9426 27.9857 14.7496 28.0565 14.5292 28.0565Z" fill="#33F110"/>
                                </g>
                            </svg>
                            <p>Check In</p>
                            <p className='text-2xl' style={{color:'#33F110'}}>5,000</p>
                            </div>
                            <div className='px-3'>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="36" height="36" rx="18" fill="#EEE5FB"/>
                                <mask id="mask0_596_37566" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="6" y="6" width="24" height="24">
                                <rect x="6.66669" y="6.33398" width="22.6667" height="22.6667" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_596_37566)">
                                <path d="M19.4167 11.5288C18.8973 11.5288 18.4527 11.3436 18.0832 10.9734C17.7129 10.6038 17.5278 10.1593 17.5278 9.63987C17.5278 9.12042 17.7129 8.67559 18.0832 8.30537C18.4527 7.93577 18.8973 7.75098 19.4167 7.75098C19.9362 7.75098 20.381 7.93577 20.7512 8.30537C21.1208 8.67559 21.3056 9.12042 21.3056 9.63987C21.3056 10.1593 21.1208 10.6038 20.7512 10.9734C20.381 11.3436 19.9362 11.5288 19.4167 11.5288ZM14.5292 28.0565C14.1829 28.0565 13.9074 27.9347 13.7028 27.691C13.4982 27.4467 13.4352 27.1593 13.5139 26.8288L15.9223 14.7399L14.2223 15.401V17.6676C14.2223 17.9352 14.1319 18.1594 13.9512 18.3401C13.7699 18.5214 13.5454 18.6121 13.2778 18.6121C13.0102 18.6121 12.7858 18.5214 12.6044 18.3401C12.4237 18.1594 12.3334 17.9352 12.3334 17.6676V15.4246C12.3334 15.0468 12.4357 14.7005 12.6403 14.3857C12.8449 14.0709 13.1283 13.8348 13.4903 13.6774L17.1028 12.1426C17.5593 11.9538 18.0237 11.9339 18.4959 12.0831C18.9681 12.233 19.338 12.5204 19.6056 12.9454L20.55 14.4565C20.8963 15.0075 21.3449 15.4797 21.8959 15.8732C22.4468 16.2667 23.0764 16.5264 23.7848 16.6524C24.0209 16.6838 24.2176 16.7899 24.375 16.9706C24.5324 17.152 24.6112 17.3528 24.6112 17.5732C24.6112 17.8723 24.5051 18.1203 24.2929 18.3174C24.0801 18.5139 23.8399 18.5885 23.5723 18.5413C22.738 18.4153 21.9629 18.1515 21.247 17.7498C20.5305 17.3487 19.9204 16.8491 19.4167 16.251L18.85 19.0843L20.2431 20.4065C20.432 20.5954 20.5777 20.8038 20.6804 21.0318C20.7824 21.2603 20.8334 21.5084 20.8334 21.776V27.1121C20.8334 27.3797 20.743 27.6038 20.5623 27.7845C20.381 27.9659 20.1565 28.0565 19.8889 28.0565C19.6213 28.0565 19.3972 27.9659 19.2165 27.7845C19.0352 27.6038 18.9445 27.3797 18.9445 27.1121V22.3899L16.9612 20.501L15.4264 27.3482C15.3792 27.5371 15.2731 27.7024 15.1082 27.844C14.9426 27.9857 14.7496 28.0565 14.5292 28.0565Z" fill="#A36EE6"/>
                                </g>
                            </svg>
                            <p>Check Out</p>
                            <p className='text-2xl' style={{color:'#A36EE6'}}>5,000</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Main