import './App.css';
import {BrowserRouter,Routes,Route, Navigate,} from "react-router-dom";
import Login from './components/pages/Login/Login';
import Layout from './components/Layout/Layout';
import Overview from './components/pages/Overview/Overview';
import Wallet from './components/pages/Wallet/Wallet';
import TransactionDetails from './components/pages/Wallet/TransactionDetails';
import Request from './components/pages/Wallet/Request';
import Residents from './components/pages/Residents/Residents';
import AddResident from './components/pages/Residents/AddResident/AddResident';
import EditResident from './components/pages/Residents/EditResident/EditResident';
import ViewResident from './components/pages/Residents/ViewResident/ViewResident';
import Properties from './components/pages/Properties/Properties';
import AddProperty from './components/pages/Properties/AddProperty/AddProperty';
import EditProperty from './components/pages/Properties/EditProperty/EditProperty';
import ViewProperty from './components/pages/Properties/ViewProperty/ViewProperty';
import Household from './components/pages/Household/Household';
import CreateHousehold from './components/pages/Household/AddHousehold/CreateHousehold';
import ViewHousehold from './components/pages/Household/ViewHousehold/ViewHousehold';
import ViewHouseholdResident from './components/pages/Household/ViewHousehold/ViewResident';
import EstateStaff from './components/pages/EstateStaff/EstateStaff';
import AddEstateStaff from './components/pages/EstateStaff/AddEstateStaff/AddEstateStaff';
import EditEstateStaff from './components/pages/EstateStaff/EditEstateStaff/EditEstateStaff';
import ViewEstateStaff from './components/pages/EstateStaff/ViewEstateStaff/ViewEstateStaff';
import SiteWorker from './components/pages/SiteWorker/SiteWorker';
import AddSiteWorker from './components/pages/SiteWorker/AddSiteWorker/AddSiteWorker';
import EditSiteWorker from './components/pages/SiteWorker/EditSiteWorker/EditSiteWorker';
import ViewSiteWorker from './components/pages/SiteWorker/ViewSiteWorker/ViewSiteWorker';
import Security from './components/pages/Security/Security';
import AddSecurityGuard from './components/pages/Security/AddSecurityGuard/AddSecurityGuard';
import EditSecurityGuard from './components/pages/Security/EditSecurityGuard/EditSecurityGuard';
import ViewSecurityGuard from './components/pages/Security/ViewSecurityGuard/ViewSecurityGuard';
import Artisan from './components/pages/Artisan/Artisan';
import ViewArtisan from './components/pages/Artisan/ViewArtisan/ViewArtisan';
import Payments from './components/pages/Payments/Payments';
import ViewPayment from './components/pages/Payments/ViewPayment/ViewPayment';
import AddPayment from './components/pages/Payments/AddPayment/AddPayment';
import AddReciepients from './components/pages/Payments/AddReciepient/AddReciepient';
import Reports from './components/pages/Reports/Reports';
import ResidentDetails from './components/pages/Reports/ViewReports/ResidentDetails';
import VisitorDetails from './components/pages/Reports/ViewReports/VisitorDetails';
import EstateStaffDetails from './components/pages/Reports/ViewReports/EstateStaffDetails';
import SiteWorkerDetails from './components/pages/Reports/ViewReports/SiteWorkerDetails';
import SecurityGuardDetails from './components/pages/Reports/ViewReports/SecurityGuardDetails';
import BusinessDetails from './components/pages/Reports/ViewReports/BusinessDetails';
import Approvals from './components/pages/Approvals/Approvals';
import EventDetails from './components/pages/Reports/ViewReports/EventReports';
import EventDetail from './components/pages/Approvals/Requests/EventDetail';
import OnboardingDetail from './components/pages/Approvals/Requests/ResidentOnboardingDetail';
import SesaDigital from './components/pages/Approvals/Requests/SesaDigital';
import Rules from './components/pages/Rules/Rules';
import AddRule from './components/pages/Rules/AddRule/AddRule';
import VisitorMessage from './components/pages/Rules/VisitorMessage/VisitorMessage';
import ViewRule from './components/pages/Rules/ViewRule/ViewRule';
import ChangePassword from './components/pages/Overview/ChangePassword';
import ScrollToTop from './components/ScrollToTop';
import { PaymentProvider } from './components/store/paymentStore';
import User from './components/store/auth';
import { useContext } from 'react';
import SiteWorkerRequest from './components/pages/Approvals/Requests/SiteWorkerRequest';

function App() {

  const {currentUser} = useContext(User)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <div className="App" style={{backgroundColor:"#F1F1F1"}}>

         <PaymentProvider>
         <BrowserRouter>
         <ScrollToTop/>

          <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/overview' element={
            <RequireAuth>
              <Overview/>
            </RequireAuth>
          }/>
          <Route path='/overview/password' element={<Layout children={<ChangePassword/>}/>}/>

          <Route path='/wallet' element={<Layout children={<Wallet/>}/>}/>
          <Route path='/wallet/transaction/:id' element={<Layout children={<TransactionDetails/>}/>}/>
          <Route path='/wallet/request' element={<Layout children={<Request/>}/>}/>

          <Route path='/residents' element={<Layout children={<Residents/>}/>}/>
          <Route path='/residents/add-residents' element={<Layout children={<AddResident/>}/>}/>
          <Route path='/residents/edit-resident/:id' element={<Layout children={<EditResident/>}/>}/>
          <Route path='/residents/resident/:id' element={<Layout children={<ViewResident/>}/>}/>

          <Route path='/properties' element={<Layout children={<Properties/>}/>}/>
          <Route path='/properties/add-property' element={<Layout children={<AddProperty/>}/>}/>
          <Route path='/properties/edit-property/:id' element={<Layout children={<EditProperty/>}/>}/>
          <Route path='/properties/property/:id' element={<Layout children={<ViewProperty/>}/>}/>

          <Route path='/household' element={<Layout children={<Household/>}/>}/>
          <Route path='/household/add-house' element={<Layout children={<CreateHousehold/>}/>}/>
          <Route path='/household/:id' element={<Layout children={<ViewHousehold/>}/>}/>
          <Route path='/household/:houseId/resident/:id' element={<Layout children={<ViewHouseholdResident/>}/>}/>

          <Route path='/estate-staff' element={<Layout children={<EstateStaff/>}/>}/>
          <Route path='/estate-staff/add-estate-staff' element={<Layout children={<AddEstateStaff/>}/>}/>
          <Route path='/estate-staff/edit-estate-staff/:id' element={<Layout children={<EditEstateStaff/>}/>}/>
          <Route path='/estate-staff/:id' element={<Layout children={<ViewEstateStaff/>}/>}/>

          <Route path='/site-worker' element={<Layout children={<SiteWorker/>}/>}/>
          <Route path='/site-worker/add-site-worker' element={<Layout children={<AddSiteWorker/>}/>}/>
          <Route path='/site-worker/edit-site-worker/:id' element={<Layout children={<EditSiteWorker/>}/>}/>
          <Route path='/site-worker/:id' element={<Layout children={<ViewSiteWorker/>}/>}/>

          <Route path='/security' element={<Layout children={<Security/>}/>}/>
          <Route path='/security/add-security' element={<Layout children={<AddSecurityGuard/>}/>}/>
          <Route path='/security/edit-security/:id' element={<Layout children={<EditSecurityGuard/>}/>}/>
          <Route path='/security/:id' element={<Layout children={<ViewSecurityGuard/>}/>}/>

          <Route path='/artisan' element={<Layout children={<Artisan/>}/>}/>
          <Route path='/artisan/:id' element={<Layout children={<ViewArtisan/>}/>}/>

          
          <Route path='/payments' element={<Layout children={<Payments/>}/>}/>
          <Route path='/payments/add-payment' element={<Layout children={<AddPayment/>}/>}/>
          <Route path='/payments/add-payment/add-reciepients' element={<Layout children={<AddReciepients/>}/>}/>
          <Route path='/payments/:id' element={<Layout children={<ViewPayment/>}/>}/>

          <Route path='/reports' element={<Reports/>}/>
          <Route path='/reports/resident-report/:id' element={<Layout children={<ResidentDetails/>}/>}/>
          <Route path='/reports/visitor-report/:id' element={<Layout children={<VisitorDetails/>}/>}/>
          <Route path='/reports/estate-report/:id' element={<Layout children={<EstateStaffDetails/>}/>}/>
          <Route path='/reports/site-report/:id' element={<Layout children={<SiteWorkerDetails/>}/>}/>
          <Route path='/reports/guard-report/:id' element={<Layout children={<SecurityGuardDetails/>}/>}/>
          <Route path='/reports/business-report/:id' element={<Layout children={<BusinessDetails/>}/>}/>
          <Route path='/reports/event-report/:id' element={<Layout children={<EventDetails/>}/>}/>

          <Route path='/approvals' element={<Layout children={<Approvals/>}/>}/>
          <Route path='/approvals/event/:id' element={<Layout children={<EventDetail/>}/>}/>
          <Route path='/approvals/onboarding/:id' element={<Layout children={<OnboardingDetail/>}/>}/>
          <Route path='/approvals/digital/:id' element={<Layout children={<SesaDigital/>}/>}/>
          <Route path='/approvals/worker/:id' element={<Layout children={<SiteWorkerRequest/>}/>}/>

          <Route path='/rules' element={<Layout children={<Rules/>}/>}/>
          <Route path='/rules/add-rule' element={<Layout children={<AddRule/>}/>}/>
          <Route path='/rules/add-message' element={<Layout children={<VisitorMessage/>}/>}/>
          <Route path='/rules/:id' element={<Layout children={<ViewRule/>}/>}/>
    
          </Routes>
         </BrowserRouter>
      </PaymentProvider>

     
    
        
    </div>
  );
}

export default App;
