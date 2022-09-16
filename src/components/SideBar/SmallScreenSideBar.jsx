import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CSS from './SideBar.module.css'
import {Link, useLocation} from 'react-router-dom'
// eslint-disable-next-line
import { ApprovalIcon, EstateStaffIcon, HouseholdIconNav, OverviewIcon, PaymentsIcon, PropertiesIcon, ReportIcon, ResidentsIcon, RulesAndRegulationsIcon, SecurityCompanyIcon, SelectedApprovalIcon, SelectedArtisanIcon, SelectedEstateStaffIcon, SelectedHouseholdIcon, SelectedOverviewIcon, SelectedPaymentIcon, SelectedPropertyIcon, SelectedReportsIcon, SelectedResidentIcon, SelectedRulesIcon, SelectedSecurityIcon, SelectedSiteWorkerIcon, SelectedWalletIcon, SiteWorkerIcon, WalletIcon } from './icons'
import Logo from '../../images/logo.png'

function SmallScreenSideBar() {
  const [show, setShow] = useState(false);
  const url = useLocation()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button className={`ml-5 ${CSS.toggleBtn}`} onClick={handleShow}>
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg> 
    </button>

      <Offcanvas show={show} onHide={handleClose} style={{width:'80%'}} >
        <Offcanvas.Header closeButton>
        <div className='flex ml-2 items-baseline'>
          <img width={32} src={Logo} alt="SESA DIGITAL LOGO" />
          <h6 className='ml-1 text-xl mb-0'>SESA <small className='text-xs text-blue-300'>digital</small></h6>
        </div>
        </Offcanvas.Header>
        <Offcanvas.Body onClick={handleClose} style={{padiing:"0"}}>
        <div className={`bg-white w-full`}>
        <div className='text-gray-400'>      
        <Link to='/overview' className='text-inherit no-underline rounded p-2 text-sm'>
            <div className={`rounded p-2 ${url.pathname.includes("/overview") && 'bg-slate-300 text-sm text-black'}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes('/overview')?<SelectedOverviewIcon/>:<OverviewIcon/> }</span>Overview</p>
            </div>
        </Link>

        <Link to='/wallet' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes("/wallet") && 'bg-slate-300 text-sm text-black'}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes('/wallet')?<SelectedWalletIcon/>:<WalletIcon/> }</span>Wallet</p>
            </div>
          </Link>

          <Link to='/residents' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/residents') &&'bg-slate-300 text-sm text-black'}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes('/residents')?<SelectedResidentIcon/>:<ResidentsIcon/>}</span>Residents</p>
            </div>
          </Link>

          <Link to='/properties' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/properties') && 'bg-slate-300 text-sm text-black'}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes('/properties')?<SelectedPropertyIcon/>: <PropertiesIcon/>}</span>Properties</p>
            </div>
          </Link>

          <Link to='/household' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/household') &&'bg-slate-300 text-sm text-black'}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes("/household")?<SelectedHouseholdIcon/>:<HouseholdIconNav/>}</span>HouseHold</p>
            </div>
          </Link>

          <Link to='/estate-staff' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/estate-staff')&&'bg-slate-300 text-sm text-black'}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes("/estate-staff")?<SelectedEstateStaffIcon/>:<EstateStaffIcon/>}</span>Estate Staff</p>
            </div>
          </Link>

          <Link to='/site-worker' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/site-worker') && 'bg-slate-300 text-sm text-black'}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'> {url.pathname.includes('/site-worker')? <SelectedSiteWorkerIcon/>: <SiteWorkerIcon/>}</span>Site Worker</p>
            </div>
          </Link>

          <Link to='/security' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/security') && 'bg-slate-300 text-sm text-black'}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes('/security')?<SelectedSecurityIcon/>:<SecurityCompanyIcon/>}</span>Security Guard</p>
            </div>
          </Link>

          <Link to='/artisan' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/artisan') && 'bg-slate-300 text-sm text-black'}`}>
             <p className='m-0 p-0 flex'><span className='mr-2'>{url.pathname.includes('/artisan')?<SelectedArtisanIcon/>:<SiteWorkerIcon/>}</span>Artisan</p>
            </div>
          </Link>

           {/* <Link to='/payments' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes('/payments')&&`${CSS.active} text-sm text-black`}`}>
             <p className='m-0 p-0 flex items-center'><span className='mr-2'>{url.pathname.includes('/payments')?<SelectedPaymentIcon/>:<PaymentsIcon/>}</span>Payments</p>
            </div>
          </Link> */}

          <Link to='/reports' className='text-inherit no-underline rounded p-2 text-sm'>
          <div className={`rounded p-2 ${url.pathname.includes("/reports") && 'bg-slate-300 text-sm text-black'}`}>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SmallScreenSideBar;