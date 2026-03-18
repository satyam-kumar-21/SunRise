import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Properties from './components/Properties';
import Projects from './components/Projects';
import SubmitProperty from './components/SubmitProperty';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import PropertyDetails from './components/PropertyDetails';
import PropTypes from 'prop-types';

// User Layout Component
const UserLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
    <Header />
    <main className="flex-grow pt-32">
      {children}
    </main>
    <Footer />
  </div>
);

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// Admin Layout Component
const AdminLayout = ({ children }) => (
  <div className="min-h-screen bg-slate-50">
    {children}
  </div>
);

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <Routes>
      {/* User Routes with Header/Footer */}
      <Route path="/" element={
        <UserLayout>
          <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Welcome to SunRise Properties
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Your trusted partner in finding the perfect property. Discover residential and commercial spaces that match your dreams.
              </p>
            </div>
          </div>
        </UserLayout>
      } />
      <Route path="/about" element={<UserLayout><AboutUs /></UserLayout>} />
      <Route path="/services" element={<UserLayout><Services /></UserLayout>} />
      <Route path="/residential" element={<UserLayout><Properties category="residential" /></UserLayout>} />
      <Route path="/commercial" element={<UserLayout><Properties category="commercial" /></UserLayout>} />
      <Route path="/property/:id" element={<UserLayout><PropertyDetails /></UserLayout>} />
      <Route path="/projects" element={<UserLayout><Projects /></UserLayout>} />
      <Route path="/submit-property" element={<UserLayout><SubmitProperty /></UserLayout>} />
      <Route path="/contact" element={<UserLayout><ContactUs /></UserLayout>} />
      <Route path="/terms" element={<UserLayout><TermsAndConditions /></UserLayout>} />
      <Route path="/privacy" element={<UserLayout><PrivacyPolicy /></UserLayout>} />
      <Route path="/cookie-policy" element={<UserLayout><CookiePolicy /></UserLayout>} />

      {/* Admin Routes without Header/Footer */}
      <Route path="/admin/login" element={<AdminLayout><AdminLogin /></AdminLayout>} />
      <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
    </Routes>
  );
}

export default App;
