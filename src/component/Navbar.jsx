

import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { tickerItems } from '../data/tickerItems';

const Navbar = ({ loading, error }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let timeoutId;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
  };

  const openDropdown = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutId = setTimeout(() => setIsDropdownOpen(false), 300);
  };

  const navLinkClass = ({ isActive }) =>
    `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`;

  const dropdownLinkClass = ({ isActive }) =>
    `block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 ${isActive ? 'font-bold text-blue-600' : ''}`;

  const newsCategories = [
    { to: '/bitcoin', label: 'Bitcoin' },
    { to: '/blockchain', label: 'Blockchain' },
    { to: '/nfts', label: 'NFTs' },
    { to: '/defi', label: 'DeFi' },
    { to: '/ethereum', label: 'Ethereum' },
    { to: '/all', label: 'All' }
  ];

  const mainNavItems = [
    { to: '/markets', label: 'Markets' },
    { to: '/analysis', label: 'Analysis' }
  ];

  const renderTicker = () => {
    if (loading) return <div className="text-center text-gray-600">Loading data...</div>;
    if (error) return <div className="text-center text-red-600">{error}</div>;
    if (!Array.isArray(tickerItems) || tickerItems.length === 0) {
      return <div className="text-center text-gray-600">No data available</div>;
    }
    const tickerContent = tickerItems.map((item, index) => (
      <div key={index} className="flex items-center space-x-2 flex-none">
        <span>{item.name}</span>
        <span className={item.color}>{item.value}</span>
      </div>
    ));
    return (
      <div className="flex animate-scroll space-x-8 sm:space-x-12">
        {tickerContent}
        {tickerContent.map((item, index) => (
          <div key={`dup-${index}`} className="flex items-center space-x-2 flex-none">
            {item.props.children}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <header className="bg-white shadow fixed -top-1 right-0 left-0 z-[100]">
        <div className="max-w-7xl mx-auto px-3 py-3 flex items-center justify-between relative">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-gray-900 flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mr-2">
              ₿
            </div>
            CryptoKhabar
          </NavLink>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 relative">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <div className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <NavLink to="/all" className="text-gray-600 hover:text-blue-600">News</NavLink>
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow-lg mt-2 py-2 w-40 rounded-md z-[110] border border-gray-200">
                  {newsCategories.map(category => (
                    <li key={category.to}>
                      <NavLink to={category.to} className={dropdownLinkClass}>
                        {category.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {mainNavItems.map(item => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-md relative z-[105]">
            <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col space-y-2">
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              <div className="flex flex-col">
                <Link
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  to="/all"
                  className="text-gray-600 hover:text-blue-600 text-left w-full"
                >
                  News
                </Link>
                {isDropdownOpen && (
                  <div className="pl-4 flex flex-col space-y-2 bg-white">
                    {newsCategories.map(category => (
                      <NavLink
                        key={category.to}
                        to={category.to}
                        className={navLinkClass}
                        
                        onClick={() => { toggleMenu(); setIsDropdownOpen(false); }}
                      >
                        {category.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
              {mainNavItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={navLinkClass}
                  onClick={toggleMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
        {/* Ticker Section */}
        <div className="overflow-hidden px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm bg-gray-100 relative z-[90]" aria-live="polite">
          {renderTicker()}
        </div>
      </header>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
          width: max-content;
        }
        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 30s;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;