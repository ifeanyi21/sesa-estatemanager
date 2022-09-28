import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Login from "./pages/Login/Login";

import Layout from "./components/Layout/Layout";

import Overview from "./pages/Overview/Overview";
import ChangePassword from "./pages/Overview/ChangePassword";

import Wallet from "./pages/Wallet/Wallet";
import TransactionDetails from "./pages/Wallet/TransactionDetails";
import Request from "./pages/Wallet/Request";

import Residents from "./pages/Residents/Residents";
import AddResident from "./pages/Residents/AddResident/AddResident";
import EditResident from "./pages/Residents/EditResident/EditResident";
import ViewResident from "./pages/Residents/ViewResident/ViewResident";
import ValidatedResult from "./pages/Residents/ViewResident/ValidatedResult";

import Properties from "./pages/Properties/Properties";
import AddProperty from "./pages/Properties/AddProperty/AddProperty";
import EditProperty from "./pages/Properties/EditProperty/EditProperty";
import ViewProperty from "./pages/Properties/ViewProperty/ViewProperty";

import Household from "./pages/Household/Household";
import CreateHousehold from "./pages/Household/CreateHousehold/CreateHousehold";
import ViewHousehold from "./pages/Household/ViewHousehold/ViewHousehold";
import EditHousehold from "./pages/Household/EditHousehold/EditHousehold";
import ViewHouseholdResident from "./pages/Household/ViewHousehold/ViewResident";

import EstateStaff from "./pages/EstateStaff/EstateStaff";
import AddEstateStaff from "./pages/EstateStaff/AddEstateStaff/AddEstateStaff";
import EditEstateStaff from "./pages/EstateStaff/EditEstateStaff/EditEstateStaff";
import ViewEstateStaff from "./pages/EstateStaff/ViewEstateStaff/ViewEstateStaff";

import SiteWorker from "./pages/SiteWorker/SiteWorker";
import AddSiteWorker from "./pages/SiteWorker/AddSiteWorker/AddSiteWorker";
import EditSiteWorker from "./pages/SiteWorker/EditSiteWorker/EditSiteWorker";
import ViewSiteWorker from "./pages/SiteWorker/ViewSiteWorker/ViewSiteWorker";

import Security from "./pages/Security/Security";
import AddSecurityGuard from "./pages/Security/AddSecurityGuard/AddSecurityGuard";
import EditSecurityGuard from "./pages/Security/EditSecurityGuard/EditSecurityGuard";
import ViewSecurityGuard from "./pages/Security/ViewSecurityGuard/ViewSecurityGuard";

import Artisan from "./pages/Artisan/Artisan";
import ViewArtisan from "./pages/Artisan/ViewArtisan/ViewArtisan";

import Payments from "./pages/Payments/Payments";
import AddPayment from "./pages/Payments/AddPayment/AddPayment";
import AddReciepients from "./pages/Payments/AddReciepient/AddReciepient";
import ViewFullPayment from "./pages/Payments/ViewPayment/ViewFullPayment";
import ViewInstallmentsPayment from "./pages/Payments/ViewPayment/ViewInstallmentPayment";
import EditPayment from "./pages/Payments/EditPayment/EditPayment";

import Reports from "./pages/Reports/Reports";
import ResidentDetails from "./pages/Reports/ViewReports/ResidentDetails";
import VisitorDetails from "./pages/Reports/ViewReports/VisitorDetails";
import EstateStaffDetails from "./pages/Reports/ViewReports/EstateStaffDetails";
import SiteWorkerDetails from "./pages/Reports/ViewReports/SiteWorkerDetails";
import SecurityGuardDetails from "./pages/Reports/ViewReports/SecurityGuardDetails";
import BusinessDetails from "./pages/Reports/ViewReports/BusinessDetails";
import EventDetails from "./pages/Reports/ViewReports/EventReports";

import Approvals from "./pages/Approvals/Approvals";
import EventDetail from "./pages/Approvals/Requests/EventDetail";
import OnboardingDetail from "./pages/Approvals/Requests/ResidentOnboardingDetail";
import SesaDigital from "./pages/Approvals/Requests/SesaDigital";
import SiteWorkerRequest from "./pages/Approvals/Requests/SiteWorkerRequest";

import Rules from "./pages/Rules/Rules";
import AddRule from "./pages/Rules/AddRule/AddRule";
import VisitorMessage from "./pages/Rules/VisitorMessage/VisitorMessage";
import ViewRule from "./pages/Rules/ViewRule/ViewRule";

import ScrollToTop from "./components/ScrollToTop";
import { PaymentProvider } from "./components/store/paymentStore";
import User from "./components/store/auth";
import { useContext } from "react";

const queryClient = new QueryClient();

function App() {
  const { currentUser } = useContext(User);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <div className="App h-full pb-32" style={{ backgroundColor: "#F1F1F1" }}>
      <QueryClientProvider client={queryClient}>
        <PaymentProvider>
          <BrowserRouter>
            <ScrollToTop />

            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/overview"
                element={
                  <RequireAuth>
                    <Overview />
                  </RequireAuth>
                }
              />
              <Route
                path="/overview/password"
                element={<Layout children={<ChangePassword />} />}
              />

              <Route
                path="/wallet"
                element={<Layout children={<Wallet />} />}
              />
              <Route
                path="/wallet/transaction/:id"
                element={<Layout children={<TransactionDetails />} />}
              />
              <Route
                path="/wallet/request"
                element={<Layout children={<Request />} />}
              />

              <Route
                path="/residents"
                element={<Layout children={<Residents />} />}
              />
              <Route
                path="/residents/add-residents"
                element={<Layout children={<AddResident />} />}
              />
              <Route
                path="/residents/edit-resident/:id"
                element={<Layout children={<EditResident />} />}
              />
              <Route
                path="/residents/resident/:id"
                element={<Layout children={<ViewResident />} />}
              />
              <Route
                path="/residents/validate-resident/:id"
                element={<Layout children={<ValidatedResult />} />}
              />

              <Route
                path="/properties"
                element={<Layout children={<Properties />} />}
              />
              <Route
                path="/properties/add-property"
                element={<Layout children={<AddProperty />} />}
              />
              <Route
                path="/properties/edit-property/:id"
                element={<Layout children={<EditProperty />} />}
              />
              <Route
                path="/properties/property/:id"
                element={<Layout children={<ViewProperty />} />}
              />

              <Route
                path="/household"
                element={<Layout children={<Household />} />}
              />
              <Route
                path="/household/add-house"
                element={<Layout children={<CreateHousehold />} />}
              />
               <Route
                path="/household/edit-household/:id"
                element={<Layout children={<EditHousehold />} />}
              />
              <Route
                path="/household/:id"
                element={<Layout children={<ViewHousehold />} />}
              />
              <Route
                path="/household/:houseId/resident/:id"
                element={<Layout children={<ViewHouseholdResident />} />}
              />

              <Route
                path="/estate-staff"
                element={<Layout children={<EstateStaff />} />}
              />
              <Route
                path="/estate-staff/add-estate-staff"
                element={<Layout children={<AddEstateStaff />} />}
              />
              <Route
                path="/estate-staff/edit-estate-staff/:id"
                element={<Layout children={<EditEstateStaff />} />}
              />
              <Route
                path="/estate-staff/:id"
                element={<Layout children={<ViewEstateStaff />} />}
              />

              <Route
                path="/site-worker"
                element={<Layout children={<SiteWorker />} />}
              />
              <Route
                path="/site-worker/add-site-worker"
                element={<Layout children={<AddSiteWorker />} />}
              />
              <Route
                path="/site-worker/edit-site-worker/:id"
                element={<Layout children={<EditSiteWorker />} />}
              />
              <Route
                path="/site-worker/:id"
                element={<Layout children={<ViewSiteWorker />} />}
              />

              <Route
                path="/security"
                element={<Layout children={<Security />} />}
              />
              <Route
                path="/security/add-security"
                element={<Layout children={<AddSecurityGuard />} />}
              />
              <Route
                path="/security/edit-security/:id"
                element={<Layout children={<EditSecurityGuard />} />}
              />
              <Route
                path="/security/:id"
                element={<Layout children={<ViewSecurityGuard />} />}
              />

              <Route
                path="/artisan"
                element={<Layout children={<Artisan />} />}
              />
              <Route
                path="/artisan/:id"
                element={<Layout children={<ViewArtisan />} />}
              />

              <Route
                path="/payments"
                element={<Layout children={<Payments />} />}
              />
              <Route
                path="/payments/add-payment"
                element={<Layout children={<AddPayment />} />}
              />
              <Route
                path="/payments/add-payment/add-reciepients"
                element={<Layout children={<AddReciepients />} />}
              />
               <Route
                path="/payments/edit-payment/:id"
                element={<Layout children={<EditPayment />} />}
              />
              <Route
                path="/payments/full/:id"
                element={<Layout children={<ViewFullPayment />} />}
              />
              <Route
                path="/payments/installments/:id"
                element={<Layout children={<ViewInstallmentsPayment />} />}
              />

              <Route path="/reports" element={<Reports />} />
              <Route
                path="/reports/resident-report/:id"
                element={<Layout children={<ResidentDetails />} />}
              />
              <Route
                path="/reports/visitor-report/:id"
                element={<Layout children={<VisitorDetails />} />}
              />
              <Route
                path="/reports/estate-report/:id"
                element={<Layout children={<EstateStaffDetails />} />}
              />
              <Route
                path="/reports/site-report/:id"
                element={<Layout children={<SiteWorkerDetails />} />}
              />
              <Route
                path="/reports/guard-report/:id"
                element={<Layout children={<SecurityGuardDetails />} />}
              />
              <Route
                path="/reports/business-report/:id"
                element={<Layout children={<BusinessDetails />} />}
              />
              <Route
                path="/reports/event-report/:id"
                element={<Layout children={<EventDetails />} />}
              />

              <Route
                path="/approvals"
                element={<Layout children={<Approvals />} />}
              />
              <Route
                path="/approvals/event/:id"
                element={<Layout children={<EventDetail />} />}
              />
              <Route
                path="/approvals/onboarding/:id"
                element={<Layout children={<OnboardingDetail />} />}
              />
              <Route
                path="/approvals/digital/:id"
                element={<Layout children={<SesaDigital />} />}
              />
              <Route
                path="/approvals/worker/:id"
                element={<Layout children={<SiteWorkerRequest />} />}
              />

              <Route path="/rules" element={<Layout children={<Rules />} />} />
              <Route
                path="/rules/add-rule"
                element={<Layout children={<AddRule />} />}
              />
              <Route
                path="/rules/add-message"
                element={<Layout children={<VisitorMessage />} />}
              />
              <Route
                path="/rules/:id"
                element={<Layout children={<ViewRule />} />}
              />
            </Routes>
          </BrowserRouter>
        </PaymentProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
