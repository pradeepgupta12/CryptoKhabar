

import React from 'react';
import { Helmet } from 'react-helmet-async';

function LoadingSpinner() {
  // Structured data for the loading page
  const loadingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Loading - Crypto Khabar",
    "description": "Loading content for Crypto Khabar. Please wait while we fetch the latest cryptocurrency news and updates.",
    "publisher": {
      "@type": "Organization",
      "name": "Crypto Khabar",
      "url": "https://cryptokhabar.net/"
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* SEO Metadata */}
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Loading - Crypto Khabar</title>
        <meta
          name="description"
          content="Loading content for Crypto Khabar. Please wait while we fetch the latest cryptocurrency news and updates."
        />
        <meta name="keywords" content="loading, Crypto Khabar, cryptocurrency, news" />
        <meta name="author" content="Crypto Khabar Team" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Loading - Crypto Khabar" />
        <meta property="og:description" content="Loading content for Crypto Khabar. Please wait while we fetch the latest cryptocurrency news and updates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cryptokhabar.net/" />
        <meta property="og:image" content="https://cryptokhabar.net/images/preview.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(loadingSchema)}
        </script>
      </Helmet>

      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <p className="mt-4 text-gray-600">Loading content...</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;