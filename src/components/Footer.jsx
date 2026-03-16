import { Link } from 'react-router-dom';
import { HiHome, HiInformationCircle, HiPhone, HiDocumentText, HiShieldCheck, HiOfficeBuilding, HiKey, HiGlobe } from 'react-icons/hi';
import sunriseLogo from '../assets/sunrise_logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-4">
              <img src={sunriseLogo} alt="SunRise Properties" className="h-12 w-auto" />
            </div>
            <p className="text-slate-300 leading-relaxed">
              Your trusted partner in finding the perfect property. Discover residential and commercial spaces that match your dreams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <HiGlobe size={24} />
              </a>
              {/* Add more social links if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <HiHome size={16} />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <HiInformationCircle size={16} />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <HiPhone size={16} />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <HiOfficeBuilding size={16} />
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Property Types</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/property-for-sale" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <HiOfficeBuilding size={16} />
                  Property for Sale
                </Link>
              </li>
              <li>
                <Link to="/property-for-rent" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <HiKey size={16} />
                  Property for Rent
                </Link>
              </li>
              <li>
                <Link to="/residential-project" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <HiHome size={16} />
                  Residential Project
                </Link>
              </li>
              <li>
                <Link to="/commercial-project" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <HiOfficeBuilding size={16} />
                  Commercial Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <HiDocumentText size={16} />
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <HiShieldCheck size={16} />
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <HiDocumentText size={16} />
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h5 className="text-lg font-semibold text-amber-400 mb-4">Disclaimer</h5>
            <p className="text-slate-300 text-sm leading-relaxed">
              SunRise Properties is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the prices or rates on this Website have been extended by various Builder(s)/Developer(s) who have advertised their products. Company shall neither be responsible nor liable to mediate or resolve any disputes or disagreements between the Customer/Buyer/User and the Seller and both Seller and Customer/Buyer/User shall settle all such disputes without involving Company in any manner.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 SunRise Properties. Developed and powered by B2BBricks.com.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;