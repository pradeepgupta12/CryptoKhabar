


// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from '../component/Navbar';
// import Footer from '../component/Footer';
// import Home from '../pages/Home';
// import Bitcoin from '../pages/Bitcoin';
// import Ethereum from '../pages/Ethereum';
// import DeFi from '../pages/DeFi';
// import NFTs from '../pages/NFTs';
// import Markets from '../pages/Markets';
// import Analysis from '../pages/Analysis';
// import BlockChain from '../pages/BlockChain';
// import All from '../pages/All';
// import { useLayoutEffect } from 'react';

// import LatestCasinoNewsDetailsPage from '../pages/LatestCasinoNewsDetailsPage';
// import LatestCryptoCurrencyNewsDetailsPage from '../pages/LatestCryptoCurrencyNewsDetailsPage';
// import PartnerContentDetailsPage from '../pages/PartnerContentDetailsPage';
// import DeepDivesDetailsPage from '../pages/DeepDivesDetailsPage';
// import PressReleaseDetailsPage from '../pages/PressReleaseDetailsPage';
// import TopStoriesDetailsPage from '../pages/TopStoriesDetailsPage';
// import MarketOutlookDetailsPage from '../pages/MarketOutlookDetailsPage';
// import BitcoinDetailsPage from '../pages/BitcoinDetailsPage';
// import BlockChainDetailsPage from '../pages/BlockChainDetailsPage';
// import NFTsDetailsPage from '../pages/NFTsDetailsPage';
// import DeFiDetailsPage from '../pages/DeFiDetailsPage';
// import EthereumDetailsPage from '../pages/EthereumDetailsPage';
// import AllDetailsPage from '../pages/AllDetailsPage';
// import AboutUs from '../pages/AboutUs';
// import ContactUs from '../pages/ContactUs';
// import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
// import TermsOfService from '../pages/TermsOfService';

// // Scroll handler
// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//  return null;
// };
// const AppRoutes =() =>{
//   return (
//     <Router>
     
//         <Navbar />
       
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/bitcoin" element={<Bitcoin />} />
//             <Route path="/ethereum" element={<Ethereum />} />
//             <Route path="/defi" element={<DeFi />} />
//             <Route path="/nfts" element={<NFTs />} />
//             <Route path="/markets" element={<Markets />} />
//             <Route path="/analysis" element={<Analysis />} />
//             <Route path="/blockchain" element={<BlockChain/>} />
//             <Route path="/all" element={<All/>} />
//             <Route path="/latest-casino-news" element={<LatestCasinoNewsDetailsPage/>} />
//             <Route path="/latest-crypto-currency-news" element={<LatestCryptoCurrencyNewsDetailsPage/>} />
//             <Route path="/partner-content" element={<PartnerContentDetailsPage/>} />
//             <Route path="/deep-dives" element={<DeepDivesDetailsPage/>} />
//             <Route path="/press-release" element={<PressReleaseDetailsPage/>} />
//             <Route path="/top-stories" element={<TopStoriesDetailsPage/>} />
//             <Route path="/market-outlook" element={<MarketOutlookDetailsPage/>} />
//             <Route path="/bitcoin/:id" element={<BitcoinDetailsPage/>} />
//             <Route path="/blockchain/:id" element={<BlockChainDetailsPage/>} />
//             <Route path="/nfts/:id" element={<NFTsDetailsPage/>} />
//             <Route path="/defi/:id" element={<DeFiDetailsPage/>} />
//             <Route path="/ethereum/:id" element={<EthereumDetailsPage/>} />
//             <Route path="/all/:category/:id" element={<AllDetailsPage />} />
//             <Route path="/about" element={<AboutUs/>} />
//              <Route path="/contact" element={<ContactUs/>} />
//              <Route path="/Privacy" element={<PrivacyPolicyPage/>} />
//              <Route path="/terms" element={<TermsOfService/>} />
            
//           </Routes>
      
//         <Footer />
      
//     </Router>
//   );
// }

// export default AppRoutes;

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useLayoutEffect } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

// Lazy load all page components
const Home = lazy(() => import('../pages/Home'));
const Bitcoin = lazy(() => import('../pages/Bitcoin'));
const Ethereum = lazy(() => import('../pages/Ethereum'));
const DeFi = lazy(() => import('../pages/DeFi'));
const NFTs = lazy(() => import('../pages/NFTs'));
const Markets = lazy(() => import('../pages/Markets'));
const Analysis = lazy(() => import('../pages/Analysis'));
const BlockChain = lazy(() => import('../pages/BlockChain'));
const All = lazy(() => import('../pages/All'));
const LatestCasinoNewsDetailsPage = lazy(() => import('../pages/LatestCasinoNewsDetailsPage'));
const LatestCryptoCurrencyNewsDetailsPage = lazy(() => import('../pages/LatestCryptoCurrencyNewsDetailsPage'));
const PartnerContentDetailsPage = lazy(() => import('../pages/PartnerContentDetailsPage'));
const DeepDivesDetailsPage = lazy(() => import('../pages/DeepDivesDetailsPage'));
const PressReleaseDetailsPage = lazy(() => import('../pages/PressReleaseDetailsPage'));
const TopStoriesDetailsPage = lazy(() => import('../pages/TopStoriesDetailsPage'));
const MarketOutlookDetailsPage = lazy(() => import('../pages/MarketOutlookDetailsPage'));
const BitcoinDetailsPage = lazy(() => import('../pages/BitcoinDetailsPage'));
const BlockChainDetailsPage = lazy(() => import('../pages/BlockChainDetailsPage'));
const NFTsDetailsPage = lazy(() => import('../pages/NFTsDetailsPage'));
const DeFiDetailsPage = lazy(() => import('../pages/DeFiDetailsPage'));
const EthereumDetailsPage = lazy(() => import('../pages/EthereumDetailsPage'));
const AllDetailsPage = lazy(() => import('../pages/AllDetailsPage'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'));
const TermsOfService = lazy(() => import('../pages/TermsOfService'));

// Scroll handler
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bitcoin" element={<Bitcoin />} />
          <Route path="/ethereum" element={<Ethereum />} />
          <Route path="/defi" element={<DeFi />} />
          <Route path="/nfts" element={<NFTs />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/blockchain" element={<BlockChain />} />
          <Route path="/all" element={<All />} />
          <Route path="/latest-casino-news" element={<LatestCasinoNewsDetailsPage />} />
          <Route path="/latest-crypto-currency-news" element={<LatestCryptoCurrencyNewsDetailsPage />} />
          <Route path="/partner-content" element={<PartnerContentDetailsPage />} />
          <Route path="/deep-dives" element={<DeepDivesDetailsPage />} />
          <Route path="/press-release" element={<PressReleaseDetailsPage />} />
          <Route path="/top-stories" element={<TopStoriesDetailsPage />} />
          <Route path="/market-outlook" element={<MarketOutlookDetailsPage />} />
          <Route path="/bitcoin/:id" element={<BitcoinDetailsPage />} />
          <Route path="/blockchain/:id" element={<BlockChainDetailsPage />} />
          <Route path="/nfts/:id" element={<NFTsDetailsPage />} />
          <Route path="/defi/:id" element={<DeFiDetailsPage />} />
          <Route path="/ethereum/:id" element={<EthereumDetailsPage />} />
          <Route path="/all/:category/:id" element={<AllDetailsPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default AppRoutes;