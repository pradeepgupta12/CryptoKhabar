// import { Routes, Route } from 'react-router-dom';
// import Navbar from '../component/Navbar'; // Adjust path if needed
// import Footer from '../component/Footer'; // Adjust path if needed
// import Home from '../pages/Home';
// import Bitcoin from '../pages/Bitcoin';
// import Ethereum from '../pages/Ethereum';
// import DeFi from '../pages/DeFi';
// import NFTs from '../pages/NFTs';
// import Markets from '../pages/Markets';
// import Analysis from '../pages/Analysis';

// function AppRoutes() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/bitcoin" element={<Bitcoin />} />
//           <Route path="/ethereum" element={<Ethereum />} />
//           <Route path="/defi" element={<DeFi />} />
//           <Route path="/nfts" element={<NFTs />} />
//           <Route path="/markets" element={<Markets />} />
//           <Route path="/analysis" element={<Analysis />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default AppRoutes;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Home from '../pages/Home';
import Bitcoin from '../pages/Bitcoin';
import Ethereum from '../pages/Ethereum';
import DeFi from '../pages/DeFi';
import NFTs from '../pages/NFTs';
import Markets from '../pages/Markets';
import Analysis from '../pages/Analysis';
const AppRoutes =() =>{
  return (
    <Router>
     
        <Navbar />
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bitcoin" element={<Bitcoin />} />
            <Route path="/ethereum" element={<Ethereum />} />
            <Route path="/defi" element={<DeFi />} />
            <Route path="/nfts" element={<NFTs />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/analysis" element={<Analysis />} />
          </Routes>
      
        <Footer />
      
    </Router>
  );
}

export default AppRoutes;
