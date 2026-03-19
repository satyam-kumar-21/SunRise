import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiPhone, HiMail } from 'react-icons/hi';
import sunriseLogo from '../assets/sunrise_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the top bar
      const topBarHeight = document.querySelector('.top-bar')?.offsetHeight || 0;
      setIsSticky(window.scrollY > topBarHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Always visible, not sticky */}
      <div className="top-bar bg-gradient-to-r from-slate-700 to-slate-800 py-3 px-4 border-b border-slate-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-200 gap-3 sm:gap-6">
            {/* Left side - Chat and Phone */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-amber-400 text-xs sm:text-sm">Chat With Us</span>
              </div>
              <div className="flex items-center gap-2">
                <HiPhone className="text-amber-400 w-4 h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+91-9826098008 | +91-8720010601</span>
              </div>
            </div>

            {/* Right side - Email and RERA */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <HiMail className="text-amber-400 w-4 h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-center sm:text-left">info@sunriseproperties.com / sunriseproperties@gmail.com</span>
              </div>
              <div className="bg-amber-400 text-slate-900 px-3 py-1 rounded-md font-semibold text-xs sm:text-sm whitespace-nowrap">
                RERA Regd. No. : A-BPL-24-1688
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Becomes sticky on scroll */}
      {/* Placeholder to prevent layout jump */}
      {isSticky && <div className="h-[80px] lg:h-[104px]"></div>}
      <div className={`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-xl transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50' : 'relative'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center min-h-[80px]">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
              <img src={sunriseLogo} alt="SunRise Properties" className="h-12 w-auto sm:h-16" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium relative group text-sm xl:text-base">
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link to="/residential" className="text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium relative group text-sm xl:text-base">
              Residential
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${isActive('/residential') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link to="/commercial" className="text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium relative group text-sm xl:text-base">
              Commercial
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${isActive('/commercial') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link to="/projects" className="text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium relative group text-sm xl:text-base">
              Projects
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${isActive('/projects') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link to="/about" className="text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium relative group text-sm xl:text-base">
              About Us
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link to="/services" className="text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium relative group text-sm xl:text-base">
              Services
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link to="/contact" className="text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium relative group text-sm xl:text-base">
              Contact Us
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link to="/submit-property" className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-3 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm xl:text-base">
              Submit Property
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-amber-400 transition-colors duration-300 p-2"
          >
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden bg-slate-800 border-t border-slate-700 transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="px-4 py-6 space-y-4">
            <Link to="/" onClick={toggleMenu} className="block text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium py-2">
              Home
            </Link>
            <Link to="/residential" onClick={toggleMenu} className="block text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium py-2">
              Residential
            </Link>
            <Link to="/commercial" onClick={toggleMenu} className="block text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium py-2">
              Commercial
            </Link>
            <Link to="/projects" onClick={toggleMenu} className="block text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium py-2">
              Projects
            </Link>
            <Link to="/about" onClick={toggleMenu} className="block text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium py-2">
              About Us
            </Link>
            <Link to="/services" onClick={toggleMenu} className="block text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium py-2">
              Services
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="block text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium py-2">
              Contact Us
            </Link>
            <Link to="/submit-property" onClick={toggleMenu} className="block bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-3 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 font-semibold text-center mt-4">
              Submit Property
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;