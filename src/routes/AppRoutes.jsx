


import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Home from '../pages/Home';
import Bitcoin from '../pages/Bitcoin';
import Ethereum from '../pages/Ethereum';
import DeFi from '../pages/DeFi';
import NFTs from '../pages/NFTs';
import Markets from '../pages/Markets';
import Analysis from '../pages/Analysis';
import BlockChain from '../pages/BlockChain';
import All from '../pages/All';
import { useLayoutEffect } from 'react';

import LatestCasinoNewsDetailsPage from '../pages/LatestCasinoNewsDetailsPage';
import LatestCryptoCurrencyNewsDetailsPage from '../pages/LatestCryptoCurrencyNewsDetailsPage';
import PartnerContentDetailsPage from '../pages/PartnerContentDetailsPage';
import DeepDivesDetailsPage from '../pages/DeepDivesDetailsPage';
import PressReleaseDetailsPage from '../pages/PressReleaseDetailsPage';
import TopStoriesDetailsPage from '../pages/TopStoriesDetailsPage';
import MarketOutlookDetailsPage from '../pages/MarketOutlookDetailsPage';
import BitcoinDetailsPage from '../pages/BitcoinDetailsPage';
import BlockChainDetailsPage from '../pages/BlockChainDetailsPage';
import NFTsDetailsPage from '../pages/NFTsDetailsPage';
import DeFiDetailsPage from '../pages/DeFiDetailsPage';
import EthereumDetailsPage from '../pages/EthereumDetailsPage';
import AllDetailsPage from '../pages/AllDetailsPage';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';

// Scroll handler
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
 return null;
};
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
            <Route path="/blockchain" element={<BlockChain/>} />
            <Route path="/all" element={<All/>} />
            <Route path="/latest-casino-news" element={<LatestCasinoNewsDetailsPage/>} />
            <Route path="/latest-crypto-currency-news" element={<LatestCryptoCurrencyNewsDetailsPage/>} />
            <Route path="/partner-content" element={<PartnerContentDetailsPage/>} />
            <Route path="/deep-dives" element={<DeepDivesDetailsPage/>} />
            <Route path="/press-release" element={<PressReleaseDetailsPage/>} />
            <Route path="/top-stories" element={<TopStoriesDetailsPage/>} />
            <Route path="/market-outlook" element={<MarketOutlookDetailsPage/>} />
            <Route path="/bitcoin/:id" element={<BitcoinDetailsPage/>} />
            <Route path="/blockchain/:id" element={<BlockChainDetailsPage/>} />
            <Route path="/nfts/:id" element={<NFTsDetailsPage/>} />
            <Route path="/defi/:id" element={<DeFiDetailsPage/>} />
            <Route path="/ethereum/:id" element={<EthereumDetailsPage/>} />
            <Route path="/all/:category/:id" element={<AllDetailsPage />} />
            <Route path="/about" element={<AboutUs/>} />
             <Route path="/contact" element={<ContactUs/>} />
            
          </Routes>
      
        <Footer />
      
    </Router>
  );
}

export default AppRoutes;

