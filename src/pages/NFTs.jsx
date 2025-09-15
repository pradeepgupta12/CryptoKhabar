

import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import nftData from "../data/nftData"; // Import nftData.js

function NFTs() {
  const navigate = useNavigate(); // Initialize navigate hook

  // Structured data for the NFT news collection
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "NFT News and Updates",
    "description": nftData.nft_news.description || "Explore the latest NFT news, top stories, and recent updates on Crypto Khabar.",
    "publisher": {
      "@type": "Organization",
      "name": "Crypto Khabar",
      "url": "https://cryptookhabar.netlify.app/"
    },
    "mainEntity": [
      {
        "@type": "ItemList",
        "name": "Top NFT Highlights",
        "itemListElement": nftData.top_nft_stories.stories.map((story, index) => ({
          "@type": "NewsArticle",
          "position": index + 1,
          "headline": story.headline,
          "image": story.image || "https://via.placeholder.com/500x500",
          "description": story.summary || story.headline,
          "url": `https://cryptookhabar.netlify.app/nfts/${story.id}`
        }))
      },
      {
        "@type": "ItemList",
        "name": "Recent NFT Updates",
        "itemListElement": nftData.latest_nft_news.articles.map((article, index) => ({
          "@type": "NewsArticle",
          "position": index + 1,
          "headline": article.headline,
          "image": article.image || "https://via.placeholder.com/500x500",
          "description": article.summary || article.headline,
          "url": `https://cryptookhabar.netlify.app/nfts/${article.id}`
        }))
      }
    ]
  };

  // Handler for navigating to NFTsDetailsPage
  const handleCardClick = (item, type) => {
    navigate(`/nfts/${item.id}`, { state: { item, type } });
  };

  return (
    <div className="page mt-20">
      {/* SEO Metadata */}
      <Helmet>
        <title>NFT News and Updates - Crypto Khabar</title>
        <meta
          name="description"
          content={nftData.nft_news.description || "Explore the latest NFT news, top stories, and recent updates on Crypto Khabar."}
        />
        <link rel="canonical" href="https://cryptookhabar.netlify.app/nfts/" />
        <script type="application/ld+json">
          {JSON.stringify(collectionSchema)}
        </script>
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* NFT News Section */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              NFT News
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {nftData.nft_news.description}
            </p>
          </div>
        </section>

        {/* Top NFT Stories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Top NFT Highlights
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Big Story (2/3 width) */}
            <div className="lg:col-span-2">
              {nftData.top_nft_stories.stories.slice(0, 1).map((story) => (
                <div
                  key={story.id}
                  className="relative rounded-lg overflow-hidden shadow-md h-full transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleCardClick(story, "story")} // Add click handler
                >
                  <img
                    src={story.image}
                    alt={`Featured image for ${story.headline} in NFT news`}
                    className="w-full h-[500px] object-cover-contain"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/500x500")}
                    loading="lazy"
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
              {nftData.top_nft_stories.stories.slice(1, 5).map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleCardClick(story, "story")} // Add click handler
                >
                  <div className="relative w-full h-[calc(100%-64px)]">
                    <img
                      src={story.image}
                      alt={`Image for ${story.headline} in NFT highlights`}
                      className="w-full h-full object-cover-contain rounded-lg"
                      onError={(e) => (e.target.src = "https://via.placeholder.com/500x500")}
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {story.tag}
                    </div>
                  </div>
                  <div className="w-full h-16 p-2 bg-white flex items-center">
                    <h4 className="text-gray-900 text-sm font-bold mt-1 line-clamp-3">{story.headline}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest NFT News */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent NFT Updates
          </h2>
          <div className="space-y-6">
            {nftData.latest_nft_news.articles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleCardClick(article, "article")} // Add click handler
              >
                {/* Article Image */}
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={`Image for ${article.headline} in recent NFT updates`}
                    className="w-full h-48 md:h-auto md:max-h-[180px] object-cover-contain rounded-lg"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/500x500")}
                    loading="lazy"
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

export default NFTs;