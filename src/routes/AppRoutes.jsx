


import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useLayoutEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import LoadingSpinner from '../component/LoadingSpinner'; // New LoadingSpinner component

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
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

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
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">
          <Suspense fallback={<LoadingSpinner />}>
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
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default AppRoutes;