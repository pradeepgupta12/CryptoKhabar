// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-white shadow sticky top-0 right-0 z-50">
//       <div className="width-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//         <NavLink to="/" className="text-2xl font-bold text-gray-900 flex items-center">
//           <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mr-2">₿</div>
//           CryptoNews
//         </NavLink>

//         <nav className="hidden md:flex space-x-6">
//           <NavLink to="/" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>Home</NavLink>
//           <NavLink to="/bitcoin" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>Bitcoin</NavLink>
//           <NavLink to="/ethereum" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>Ethereum</NavLink>
//           <NavLink to="/defi" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>DeFi</NavLink>
//           <NavLink to="/nfts" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>NFTs</NavLink>
//           <NavLink to="/markets" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>Markets</NavLink>
//           <NavLink to="/analysis" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>Analysis</NavLink>
//         </nav>

//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {isMenuOpen && (
//         <nav className="md:hidden bg-white shadow-md">
//           <div className="max-w-7xl mx-auto px-4 py-2 space-y-2">
//             <NavLink to="/" className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`} onClick={toggleMenu}>Home</NavLink>
//             <NavLink to="/bitcoin" className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`} onClick={toggleMenu}>Bitcoin</NavLink>
//             <NavLink to="/ethereum" className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`} onClick={toggleMenu}>Ethereum</NavLink>
//             <NavLink to="/defi" className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`} onClick={toggleMenu}>DeFi</NavLink>
//             <NavLink to="/nfts" className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`} onClick={toggleMenu}>NFTs</NavLink>
//             <NavLink to="/markets" className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`} onClick={toggleMenu}>Markets</NavLink>
//             <NavLink to="/analysis" className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`} onClick={toggleMenu}>Analysis</NavLink>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }

// export default Navbar;

// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { tickerItems } from '../data/tickerItems'; // Importing from data/tickerItems.js

const Navbar = ({ loading, error }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow fixed -top-1 right-0 left-0 z-[100] ">
        <div className="max-w-7xl mx-auto px-3 py-3 flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-gray-900 flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mr-2">₿</div>
            CryptoKhabar
          </NavLink>

          <nav className="hidden md:flex space-x-6">
            <NavLink to="/" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>Home</NavLink>
            <NavLink to="/bitcoin" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>Bitcoin</NavLink>
            <NavLink to="/ethereum" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>Ethereum</NavLink>
            <NavLink to="/defi" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>DeFi</NavLink>
            <NavLink to="/nfts" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>NFTs</NavLink>
            <NavLink to="/markets" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>Markets</NavLink>
            <NavLink to="/analysis" className={({ isActive }) => `text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}>Analysis</NavLink>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-2 space-y-2">
              <NavLink to="/" 
              className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`}
               onClick={toggleMenu}>
                Home
                </NavLink>
              <NavLink to="/bitcoin" className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`} onClick={toggleMenu}>Bitcoin</NavLink>
              <NavLink to="/ethereum" className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`} onClick={toggleMenu}>Ethereum</NavLink>
              <NavLink to="/defi" className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`} onClick={toggleMenu}>DeFi</NavLink>
              <NavLink to="/nfts" className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`} onClick={toggleMenu}>NFTs</NavLink>
              <NavLink to="/markets" className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`} onClick={toggleMenu}>Markets</NavLink>
              <NavLink to="/analysis" className={({ isActive }) => `block text-gray-600 hover:text-blue-600 ${isActive ? 'font-bold text-blue-600' : ''}`} onClick={toggleMenu}>Analysis</NavLink>
            </div>
          </nav>
        )}

        {/* Ticker Section */}
        <div className="overflow-hidden px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm bg-gray-100" aria-live="polite">
          {loading ? (
            <div className="text-center text-gray-600">Loading data...</div>
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : Array.isArray(tickerItems) && tickerItems.length > 0 ? (
            <div className="flex animate-scroll space-x-8 sm:space-x-12">
              {tickerItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 flex-none">
                  <span>{item.name}</span>
                  <span className={item.color}>{item.value}</span>
                </div>
              ))}
              {tickerItems.map((item, index) => (
                <div key={`duplicate-${index}`} className="flex items-center space-x-2 flex-none">
                  <span>{item.name}</span>
                  <span className={item.color}>{item.value}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">No data available</div>
          )}
        </div>
      </header>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
            display: flex;
            width: max-content;
          }
          @media (max-width: 640px) {
            .animate-scroll {
              animation-duration: 30s; /* Slower scroll on mobile for better readability */
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;