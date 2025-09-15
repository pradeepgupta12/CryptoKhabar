




import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import analysisData from '../data/analysisData'; // Adjust path to your analysisData.js file

function Analysis() {
  // Initialize likes state for all articles
  const [likes, setLikes] = useState(
    analysisData.articles.reduce((acc, article) => ({
      ...acc,
      [article.id]: article.likes || 0
    }), {})
  );

  const likeArticle = (articleId) => {
    setLikes((prev) => ({ ...prev, [articleId]: prev[articleId] + 1 }));
  };

  // Structured data for the analysis articles
  const articleListSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Crypto Market Analysis - Crypto Khabar",
    "url": "https://cryptookhabar.netlify.app/analysis/",
    "description": "Explore in-depth cryptocurrency market analysis, trends, and sentiment insights for Bitcoin, Ethereum, DeFi, and more at Crypto Khabar.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": analysisData.articles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "headline": article.title || "Crypto Analysis Article",
          "description": article.description || "Analysis of cryptocurrency market trends and insights.",
          "author": {
            "@type": "Organization",
            "name": "Crypto Khabar"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Crypto Khabar",
            "url": "https://cryptookhabar.netlify.app/"
          },
          "datePublished": article.date || "2025-09-11"
        }
      }))
    }
  };

  return (
    <div className="page mt-20">
      {/* SEO Metadata */}
      <Helmet>
        <title>Crypto Market Analysis - Crypto Khabar</title>
        <meta
          name="description"
          content="Explore in-depth cryptocurrency market analysis, trends, and sentiment insights for Bitcoin, Ethereum, DeFi, and more at Crypto Khabar."
        />
        <link rel="canonical" href="https://cryptookhabar.netlify.app/analysis/" />
        <script type="application/ld+json">
          {JSON.stringify(articleListSchema)}
        </script>
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {analysisData.articles.length > 0 && (
              <div className="space-y-6">
                {analysisData.articles.map((article) => (
                  <article key={article.id} className="bg-white rounded-lg shadow-md p-6">
                    {(article.type || article.sentiment) && (
                      <div className="flex items-center space-x-2 mb-4">
                        {article.type && (
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {article.type}
                          </span>
                        )}
                        {article.sentiment && (
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            article.sentiment === 'Bullish' ? 'bg-green-100 text-green-800' :
                            article.sentiment === 'Bearish' ? 'bg-red-100 text-red-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {article.sentiment}
                          </span>
                        )}
                      </div>
                    )}
                    {article.title && (
                      <h2 className="text-xl font-bold text-gray-900 mb-3">
                        {article.title}
                      </h2>
                    )}
                    {article.description && (
                      <p className="text-gray-600 mb-4">
                        {article.description}
                      </p>
                    )}
                    {(article.author || article.timeAgo || article.readTime || article.id in likes) && (
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div>
                          {article.author && <span>{article.author}</span>}
                          {article.timeAgo && <span>{article.author ? ' • ' : ''}{article.timeAgo}</span>}
                          {article.readTime && <span>{(article.author || article.timeAgo) ? ' • ' : ''}{article.readTime}</span>}
                        </div>
                        {article.id in likes && (
                          <button onClick={() => likeArticle(article.id)} className="hover:text-blue-600">
                            👍 {likes[article.id]}
                          </button>
                        )}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-6">
            {analysisData.marketSentiment && (
              <div className="bg-white rounded-lg shadow-md p-6">
                {(analysisData.marketSentiment.overall?.sentiment || analysisData.marketSentiment.overall?.label) && (
                  <div className="text-center mb-4">
                    {analysisData.marketSentiment.overall?.sentiment && (
                      <div className={`text-3xl font-bold ${analysisData.marketSentiment.overall.color}`}>
                        {analysisData.marketSentiment.overall.sentiment}
                      </div>
                    )}
                    {analysisData.marketSentiment.overall?.label && (
                      <div className="text-sm text-gray-500">
                        {analysisData.marketSentiment.overall.label}
                      </div>
                    )}
                  </div>
                )}
                {analysisData.marketSentiment.metrics?.length > 0 && (
                  <div className="space-y-3">
                    {analysisData.marketSentiment.metrics.map((metric, index) => (
                      <div key={index} className="flex justify-between">
                        {metric.name && <span className="text-sm">{metric.name}</span>}
                        {metric.value && (
                          <span className={`text-sm font-medium ${metric.color}`}>
                            {metric.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Analysis;
