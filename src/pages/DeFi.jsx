

import React from "react";
import defiData from "../data/defiData"; // Import defiData.js

function DeFi() {
  return (
    <div className="page mt-20">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* DeFi News Section */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              DeFi News
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {defiData.defi_news.description}
            </p>
          </div>
        </section>

        {/* Top DeFi Stories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Top DeFi Highlights
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Big Story (2/3 width) */}
            <div className="lg:col-span-2">
              {defiData.top_defi_stories.stories.slice(0, 1).map((story) => (
                <div
                  key={story.id}
                  className="relative rounded-lg overflow-hidden shadow-md h-full"
                >
                  <img
                    src={story.image}
                    alt={story.headline}
                    className="w-full h-[500px] object-cover"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/500x500")
                    }
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
              {defiData.top_defi_stories.stories.slice(1, 5).map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden"
                >
                  <div className="relative w-full h-[calc(100%-64px)]">
                    <img
                      src={story.image}
                      alt={story.headline}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) =>
                        (e.target.src = "https://via.placeholder.com/500x500")
                      }
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

        {/* Latest DeFi News */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent DeFi Updates
          </h2>
          <div className="space-y-6">
            {defiData.latest_defi_news.articles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Article Image */}
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={article.headline}
                    className="w-full h-48 md:h-auto md:max-h-[180px] object-cover rounded-lg"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/500x500")
                    }
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

export default DeFi;
