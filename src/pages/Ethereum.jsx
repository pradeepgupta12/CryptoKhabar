



import React from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ethereumData from "../data/ethereumData"; // Import ethereumData.js

function Ethereum() {
  const navigate = useNavigate(); // Initialize navigate hook

  // Handler for navigating to EthereumDetailsPage
  const handleCardClick = (item, type) => {
    navigate(`/ethereum/${item.id}`, { state: { item, type } });
  };

  // Structured data for top stories and articles
  const newsArticlesSchema = [
    ...ethereumData.top_ethereum_stories.stories.map((story) => ({
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": story.headline || "Ethereum News Story",
      "image": story.image || "https://via.placeholder.com/500x500",
      "datePublished": story.date || "2025-09-11",
      "author": {
        "@type": "Organization",
        "name": "Crypto Khabar"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Crypto Khabar",
        "url": "https://cryptookhabar.netlify.app/"
      }
    })),
    ...ethereumData.latest_ethereum_news.articles.map((article) => ({
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": article.headline || "Ethereum News Article",
      "image": article.image || "https://via.placeholder.com/500x500",
      "datePublished": article.date || "2025-09-11",
      "description": article.summary || "Ethereum market update and insights.",
      "author": {
        "@type": "Organization",
        "name": "Crypto Khabar"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Crypto Khabar",
        "url": "https://cryptookhabar.netlify.app/"
      }
    }))
  ];

  return (
    <div className="page mt-20">
      {/* SEO Metadata */}
      <Helmet>
        <title>Ethereum News - Crypto Khabar</title>
        <meta
          name="description"
          content={ethereumData.ethereum_news.description || "Stay updated with the latest Ethereum news, trends, and updates at Crypto Khabar."}
        />
        <link rel="canonical" href="https://cryptookhabar.netlify.app/ethereum/" />
        <script type="application/ld+json">
          {JSON.stringify(newsArticlesSchema)}
        </script>
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Ethereum News Section */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ethereum News
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {ethereumData.ethereum_news.description}
            </p>
          </div>
        </section>

        {/* Top Ethereum Stories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Top Ethereum Highlights
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Big Story (2/3 width) */}
            <div className="lg:col-span-2">
              {ethereumData.top_ethereum_stories.stories.slice(0, 1).map((story) => (
                <div
                  key={story.id}
                  className="relative rounded-lg overflow-hidden shadow-md h-full transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleCardClick(story, "story")}
                >
                  <img
                    src={story.image}
                    alt={`Featured image for ${story.headline} in Ethereum news`}
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
              {ethereumData.top_ethereum_stories.stories.slice(1, 5).map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleCardClick(story, "story")}
                >
                  <div className="relative w-full h-[calc(100%-64px)]">
                    <img
                      src={story.image}
                      alt={`Image for ${story.headline} in Ethereum news`}
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

        {/* Latest Ethereum News */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Ethereum Updates
          </h2>
          <div className="space-y-6">
            {ethereumData.latest_ethereum_news.articles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleCardClick(article, "article")}
              >
                {/* Article Image */}
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={`Image for ${article.headline} in Ethereum news`}
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

export default Ethereum;