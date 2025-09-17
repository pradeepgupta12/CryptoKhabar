


import React from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import blockchainData from "../data/blockchainData"; // Import blockchainData.js

function BlockChain() {
  const navigate = useNavigate(); // Initialize navigate hook

  // Handler for navigating to BlockChainDetailsPage
  const handleCardClick = (item, type) => {
    navigate(`/blockchain/${item.id}`, { state: { item, type } });
  };

  // Structured data for top stories and articles
  const newsArticlesSchema = [
    
    ...blockchainData.latest_blockchain_news.articles.map((article) => ({
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": article.headline || "Blockchain News Article",
      "image": article.image || "https://via.placeholder.com/500x500",
      "datePublished": article.date || "2025-09-11",
      "description": article.summary || "Blockchain technology update and insights.",
      "author": {
        "@type": "Organization",
        "name": "Crypto Khabar"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Crypto Khabar",
        "url": "https://cryptokhabar.net/"
      }
    }))
  ];

  return (
    <div className="page mt-20">
      {/* SEO Metadata */}
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blockchain News - Crypto Khabar</title>
        <meta
          name="description"
          content={blockchainData.blockchain_news.description || "Discover the latest Blockchain news, innovations, and trends at Crypto Khabar."}
        />
        <meta name="keywords" content="blockchain news, cryptocurrency, blockchain, technology trends, Crypto Khabar" />
        <meta name="author" content="Crypto Khabar Team" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://cryptokhabar.net/blockchain/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blockchain News - Crypto Khabar" />
        <meta property="og:description" content={blockchainData.blockchain_news.description || "Discover the latest Blockchain news, innovations, and trends at Crypto Khabar."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cryptokhabar.net/blockchain/" />
        <meta property="og:image" content="https://cryptokhabar.net/images/preview.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(newsArticlesSchema)}
        </script>
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Blockchain News Section */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Blockchain News
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {blockchainData.blockchain_news.description}
            </p>
          </div>
        </section>

        {/* Top Blockchain Stories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Top Blockchain Highlights
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Big Story (2/3 width) */}
            <div className="lg:col-span-2">
              {blockchainData.top_blockchain_stories.stories.slice(0, 1).map((story) => (
                <div
                  key={story.id}
                  className="relative rounded-lg overflow-hidden shadow-md h-full transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleCardClick(story, "story")}
                >
                  <img
                    src={story.image}
                    alt={`Featured image for ${story.headline} in Blockchain news`}
                    className="w-full h-[500px] object-cover-contain"
                    loading="lazy"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/500x500")}
                  />
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">
                    {story.tag}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-xl font-bold">{story.headline}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side 4 Small Stories (2x2 grid) */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
              {blockchainData.top_blockchain_stories.stories.slice(1, 5).map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleCardClick(story, "story")}
                >
                  <div className="relative w-full h-[calc(100%-64px)]">
                    <img
                      src={story.image}
                      alt={`Image for ${story.headline} in Blockchain news`}
                      className="w-full h-full object-cover-contain rounded-lg"
                      loading="lazy"
                      onError={(e) => (e.target.src = "https://via.placeholder.com/500x500")}
                    />
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {story.tag}
                    </div>
                  </div>
                  <div className="w-full h-16 p-2 bg-white flex items-center">
                    <h4 className="text-gray-900 text-sm font-bold mt-1 line-clamp-3">
                      {story.headline}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Blockchain News */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Blockchain Updates
          </h2>
          <div className="space-y-6">
            {blockchainData.latest_blockchain_news.articles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleCardClick(article, "article")}
              >
                {/* Article Image */}
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={`Image for ${article.headline} in Blockchain news`}
                    className="w-full h-48 md:h-auto md:max-h-[180px] object-cover-contain rounded-lg"
                    loading="lazy"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/500x500")}
                  />
                </div>
                {/* Article Content */}
                <div className="p-4 flex-1 min-h-[180px]">
                  <span className="text-xs font-semibold text-gray-500 uppercase">
                    {article.tag}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                    {article.headline}
                  </h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">{article.summary}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">
                      {article.coin}
                    </span>
                    <span>{article.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default BlockChain;