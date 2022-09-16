import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import CSS from './SideBar.module.css'
// eslint-disable-next-line
import { ApprovalIcon, EstateStaffIcon, HouseholdIconNav, OverviewIcon,PaymentsIcon,PropertiesIcon,ReportIcon,ResidentsIcon, RulesAndRegulationsIcon, SecurityCompanyIcon, SelectedApprovalIcon, SelectedArtisanIcon, SelectedEstateStaffIcon, SelectedHouseholdIcon, SelectedOverviewIcon, SelectedPaymentIcon, SelectedPropertyIcon, SelectedReportsIcon, SelectedResidentIcon, SelectedRulesIcon, SelectedSecurityIcon, SelectedSiteWorkerIcon, SelectedWalletIcon, SiteWorkerIcon, WalletIcon} from './icons'

function SideBar() {
  const url = useLocation()

  const style = {
  top: "57px",
  left: "0px",
  bottom: "10px",
  width: "inherit",
  overflowY: "scroll",

  }


  return (
    <div className={`${CSS.SideBar}`} style={{width:'20%',maxHeight:"100%"}}>
       <div className='fixed bg-white border-r border-gray-300 border-b' style={style}>
         <div className='px-3 text-gray-400'>

        <Link to='/overview' className='text-inherit no-underline rounded p-2 text-sm'>
            <div className={`rounded p-2 ${url.pathname.includes("/overview") && `${CSS.active} text-sm text-black`}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes('/overview')?<SelectedOverviewIcon/>:<OverviewIcon/> }</span>Overview</p>
            </div>
        </Link>

        <Link to='/wallet' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes("/wallet") && `${CSS.active} text-sm text-black`}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes('/wallet')?<SelectedWalletIcon/>:<WalletIcon/> }</span>Wallet</p>
            </div>
          </Link>

          <Link to='/residents' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/residents') &&`${CSS.active} text-sm text-black`}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes('/residents')?<SelectedResidentIcon/>:<ResidentsIcon/>}</span>Residents</p>
            </div>
          </Link>

          <Link to='/properties' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/properties') && `${CSS.active} text-sm text-black`}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes('/properties')?<SelectedPropertyIcon/>: <PropertiesIcon/>}</span>Properties</p>
            </div>
          </Link>

          <Link to='/household' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/household') && `${CSS.active} text-sm text-black`}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes("/household")?<SelectedHouseholdIcon/>:<HouseholdIconNav/>}</span>HouseHold</p>
            </div>
          </Link>

          <Link to='/estate-staff' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/estate-staff')&&`${CSS.active} text-sm text-black`}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes("/estate-staff")?<SelectedEstateStaffIcon/>:<EstateStaffIcon/>}</span>Estate Staff</p>
            </div>
          </Link>

          <Link to='/site-worker' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/site-worker') && `${CSS.active} text-sm text-black`}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'> {url.pathname.includes('/site-worker')? <SelectedSiteWorkerIcon/>: <SiteWorkerIcon/>}</span>Site Worker</p>
            </div>
          </Link>

          <Link to='/security' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/security') && `${CSS.active} text-sm text-black`}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes('/security')?<SelectedSecurityIcon/>:<SecurityCompanyIcon/>}</span>Security Guard</p>
            </div>
          </Link>

          <Link to='/artisan' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/artisan') && `${CSS.active} text-sm text-black`}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes('/artisan')?<SelectedArtisanIcon/>:<SiteWorkerIcon/>}</span>Artisan</p>
            </div>
          </Link>

          <Link to='/payments' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/payments')&&`${CSS.active} text-sm text-black`}`}>
             <p className='m-0 p-0 flex items-center'><span className='mr-2'>{url.pathname.includes('/payments')?<SelectedPaymentIcon/>:<PaymentsIcon/>}</span>Payments</p>
            </div>
          </Link>

          <Link to='/reports' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes("/reports") && `${CSS.active} text-sm text-black`}`}>
             <p className='m-0 p-0 flex items-center'><span className='mr-2'>{url.pathname.includes("/reports")?<SelectedReportsIcon/>:<ReportIcon/> }</span>Reports</p>
            </div>
          </Link>

          <Link to='/approvals' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/approvals') && `${CSS.active} text-sm text-black`}`}>
            <p className='m-0 p-0 flex items-center'><span className='mr-2'>{url.pathname.includes('/approvals')?<SelectedApprovalIcon/>:<ApprovalIcon/> }</span>Approvals</p>
            </div>
          </Link>

          <Link to='/rules' className='text-inherit no-underline rounded p-2 text-sm'>
            <div className={`rounded p-2 ${url.pathname.includes('/rules') && `${CSS.active} text-sm text-black`}`}>
             <p className='m-0 p-0 flex items-center'><span className='mr-2'> {url.pathname.includes('/rules')?<SelectedRulesIcon/>:<RulesAndRegulationsIcon/> }</span>Estate Rules & Regulations</p>
            </div>
          </Link>
          

        </div>
       </div>
       

    </div>
  )
}

export default SideBar