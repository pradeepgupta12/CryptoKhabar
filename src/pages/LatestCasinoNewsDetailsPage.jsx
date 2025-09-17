

import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import { LatestCasinoNews } from '../data/LatestCasinoNews'; // Adjust path to your LatestCasinoNews.js file
import { useEffect } from 'react';

function LatestCasinoNewsDetailsPage() {
  const { state, pathname } = useLocation();
  const navigate = useNavigate();

  // Debug: Log state and article to diagnose missing data
  console.log('State received:', state);
  console.log('Article data:', state?.article);

  // Use the article from state, or fallback to the first casino news item
  const article = state?.article || LatestCasinoNews.articles[0] || {};

  // Structured data for the article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title || 'Untitled Casino News',
    "image": article.image?.link || 'https://cdn6.aptoide.com/imgs/d/c/0/dc0a14a0bf284ec5163f994ca863886e_fgraphic.png',
    "datePublished": article.timePosted || '2025-09-11',
    "description": article.description || 'Latest casino news and updates.',
    "author": {
      "@type": "Person",
      "name": article.author || 'Unknown Author'
    },
    "publisher": {
      "@type": "Organization",
      "name": "Crypto Khabar",
      "url": "https://cryptokhabar.net/"
    }
  };

  // Ensure page loads at top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, state]);

  const shareArticle = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: article?.title || 'CryptoNews Casino Article',
        text: 'Check out this casino news article',
        url: window.location.href,
      }).catch((err) => console.error('Share failed:', err));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => console.log('Link copied to clipboard!'))
        .catch((err) => console.error('Clipboard copy failed:', err));
    }
  };

  const showComments = (e) => {
    e.stopPropagation();
    console.log('Comments feature coming soon!');
  };

  const likeArticle = (e) => {
    e.stopPropagation();
    console.log('Like feature coming soon!');
  };

  const handleArticleClick = (relatedArticle) => {
    console.log('Navigating to article:', relatedArticle);
    navigate('/latest-casino-news', {
      state: { article: relatedArticle },
      replace: false,
      key: Date.now() // Force component re-render
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 pt-12 p-4 mt-8">
      {/* SEO Metadata */}
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${article.title || 'Casino News'} - Crypto Khabar`}</title>
        <meta
          name="description"
          content={article.description || `Read the latest casino news: ${article.title || 'Casino News'} on Crypto Khabar.`}
        />
        <meta name="keywords" content={`casino news, cryptocurrency, ${article.title ? article.title.toLowerCase() : ''}, Crypto Khabar`} />
        <meta name="author" content={article.author || "Crypto Khabar Team"} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://cryptokhabar.net/latest-casino-news/${article.id}`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${article.title || 'Casino News'} - Crypto Khabar`} />
        <meta property="og:description" content={article.description || `Read the latest casino news: ${article.title || 'Casino News'} on Crypto Khabar.`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://cryptokhabar.net/latest-casino-news/${article.id}`} />
        <meta property="og:image" content={article.image?.link || 'https://cryptokhabar.net/images/preview.jpg'} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={article.image?.link || 'https://cdn6.aptoide.com/imgs/d/c/0/dc0a14a0bf284ec5163f994ca863886e_fgraphic.png'}
                  alt={`Featured image for ${article.title || 'Casino News'} in casino news`}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover-contain rounded-t-lg"
                  loading="lazy"
                />
                {article.category && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-8">
                <h1 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {article.title || 'Untitled Casino News'}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                    <span>By {article.author || 'Unknown Author'}</span>
                    {article.timePosted && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <span>{article.timePosted}</span>
                      </>
                    )}
                    {article.readTime && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <span>{article.readTime}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    <button
                      onClick={likeArticle}
                      className="hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <FaThumbsUp /> {article.likes ? `${article.likes} Likes` : 'Like'}
                    </button>
                    {article.comments && (
                      <button
                        onClick={showComments}
                        className="hover:text-blue-600 transition-colors flex items-center gap-1"
                      >
                        <FaComment /> {article.comments}
                      </button>
                    )}
                    <button
                      onClick={shareArticle}
                      className="hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <FaShare /> Share
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                  {article.description || 'No description available.'}
                </p>
              </div>
            </article>
          </div>
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Advertisement</h3>
                <div className="relative">
                  <a href="https://example.com/crypto-ad-1" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://images.unsplash.com/photo-1621416950685-56b5d4c0b8a6"
                      alt="Advertisement for cryptocurrency services"
                      className="w-full h-48 sm:h-64 md:h-56 object-cover rounded-lg cursor-pointer"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Advertisement</h3>
                <div className="relative">
                  <a href="https://example.com/crypto-ad-2" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://images.unsplash.com/photo-1549421263-5ec394a5adf3"
                      alt="Advertisement for cryptocurrency trading"
                      className="w-full h-48 sm:h-64 md:h-56 object-cover rounded-lg cursor-pointer"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Casino News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LatestCasinoNews.articles
              .filter((story) => story.id !== article.id)
              .slice(0, 3)
              .map((story) => (
                <article
                  key={story.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleArticleClick(story)}
                >
                  <img
                    src={story.image?.link || 'https://cdn6.aptoide.com/imgs/d/c/0/dc0a14a0bf284ec5163f994ca863886e_fgraphic.png'}
                    alt={`Image for ${story.title || 'Related Casino News'} in casino news`}
                    className="w-full h-48 object-cover-contain"
                    loading="lazy"
                  />
                  <div className="p-4 flex flex-col">
                    <h3 className="font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer line-clamp-1">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">{story.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                      <span>{story.author} • {story.timePosted}</span>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default LatestCasinoNewsDetailsPage;