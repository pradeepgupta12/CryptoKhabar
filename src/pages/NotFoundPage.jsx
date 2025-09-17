import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  // Structured data for the 404 page
  const notFoundSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "404 Not Found - Crypto Khabar",
    "description": "The page you are looking for could not be found on Crypto Khabar. Return to the homepage or explore other sections like Bitcoin, Ethereum, DeFi, NFTs, or Markets.",
    "publisher": {
      "@type": "Organization",
      "name": "Crypto Khabar",
      "url": "https://cryptokhabar.net/"
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 pt-12 p-4 mt-8">
      {/* SEO Metadata */}
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>404 Not Found - Crypto Khabar</title>
        <meta
          name="description"
          content="The page you are looking for could not be found on Crypto Khabar. Return to the homepage or explore other sections like Bitcoin, Ethereum, DeFi, NFTs, or Markets."
        />
        <meta name="keywords" content="404, not found, Crypto Khabar, cryptocurrency" />
        <meta name="author" content="Crypto Khabar Team" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://cryptokhabar.net/404" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="404 Not Found - Crypto Khabar" />
        <meta property="og:description" content="The page you are looking for could not be found on Crypto Khabar. Return to the homepage or explore other sections like Bitcoin, Ethereum, DeFi, NFTs, or Markets." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cryptokhabar.net/404" />
        <meta property="og:image" content="https://cryptokhabar.net/images/preview.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(notFoundSchema)}
        </script>
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
          <p className="text-gray-600 text-lg mb-8">
            Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/all"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Explore News
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;