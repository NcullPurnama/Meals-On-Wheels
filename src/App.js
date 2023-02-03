import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import DonatePage from './pages/Dono';
import PartnershipPage from './pages/PartnerPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisPage';
import TermsAndCondition from './pages/TaC';
import MemberHomePage from './pages/HomePage/MemberHomePage';
import MemberMealPackageDetailPage from './pages/MemberMeal';
import MemberFeedbackPage from './pages/MemberFeedback';
import DriverHomePage from './pages/HomePage/DriverHomePage';
import CaregiverHomePage from './pages/HomePage/CaregiverHomePage';
import AdminHomePage from './pages/Admin/AdminHomePage';
import AdminDonationHistoryPage from './pages/Admin/AdminDonoHistory';
import AdminManagePartnershipPage from './pages/Admin/AdminManagePartner';
import AdminManageUsersPage from './pages/Admin/AdminManageUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/partner" element={<PartnershipPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/terms" element={<TermsAndCondition />} />
      <Route path="/home" element={<MemberHomePage />} />
      <Route path="/feedback" element={<MemberFeedbackPage />} />
      <Route path="/meals-detail" element={<MemberMealPackageDetailPage />} />
      <Route path="/driver" element={<DriverHomePage />} />
      <Route path="/caregiver" element={<CaregiverHomePage />} />
      <Route path="/admin" element={<AdminHomePage />} />
      <Route path="/admin/donation-history" element={<AdminDonationHistoryPage />} />
      <Route path="/admin/manage-partner" element={<AdminManagePartnershipPage />} />
      <Route path="/admin/manage-user" element={<AdminManageUsersPage />} />
    </Routes>
  );
}

export default App;
