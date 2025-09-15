





import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import { deepDive } from '../data/deepDive'; // Adjust path to your deepDive.js file
import { useEffect } from 'react';

function DeepDivesDetailsPage() {
  const { state, pathname } = useLocation();
  const navigate = useNavigate();

  // Scroll to top when pathname or state changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, state]);

  // Debug: Log state and article to diagnose missing data
  console.log('State received:', state);
  console.log('Article data:', state?.article);

  // Use the article from state, or fallback to the first deep dive item
  const article = state?.article || deepDive[0] || {};

  // Structured data for the article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title || 'Untitled Deep Dive',
    "image": article.image?.link || 'https://cdn6.aptoide.com/imgs/d/c/0/dc0a14a0bf284ec5163f994ca863886e_fgraphic.png',
    "datePublished": article.date || '2025-09-11',
    "description": article.content || 'In-depth analysis of cryptocurrency and blockchain trends.',
    "author": {
      "@type": "Person",
      "name": article.author || 'Unknown Author'
    },
    "publisher": {
      "@type": "Organization",
      "name": "Crypto Khabar",
      "url": "https://cryptookhabar.netlify.app/"
    }
  };

  const shareArticle = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: article?.title || 'CryptoNews Deep Dive',
        text: 'Check out this deep dive article',
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
    navigate('/deep-dives', { state: { article: relatedArticle } });
    window.scrollTo(0, 0); // Scroll to top on navigation
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 pt-12 p-4 mt-8">
      {/* SEO Metadata */}
      <Helmet>
        <title>{`${article.title || 'Deep Dive'} - Crypto Khabar`}</title>
        <meta
          name="description"
          content={article.content || `Read an in-depth analysis: ${article.title || 'Deep Dive'} on Crypto Khabar.`}
        />
        <link rel="canonical" href={`https://cryptookhabar.netlify.app/deep-dives/${article.id}`} />
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
                  alt={`Featured image for ${article.title || 'Deep Dive'} in Deep Dives`}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-t-lg"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    DEEP DIVES
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h1 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {article.title || 'Untitled Deep Dive'}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                    <span>By {article.author || 'Unknown Author'}</span>
                    {article.date && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <span>{article.date}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    <button
                      onClick={likeArticle}
                      className="hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <FaThumbsUp /> Like
                    </button>
                    <button
                      onClick={showComments}
                      className="hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <FaComment /> Comments
                    </button>
                    <button
                      onClick={shareArticle}
                      className="hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <FaShare /> Share
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                  {article.content || 'No content available.'}
                </p>
                {article.source && (
                  <p className="text-gray-600 text-sm mb-6">
                    Source: {article.source}
                  </p>
                )}
                {article.keyPoints && article.keyPoints.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Key Points</h2>
                    <ul className="list-disc list-inside text-gray-600 text-base sm:text-lg leading-relaxed">
                      {article.keyPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {article.marketImpact && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Market Impact</h2>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                      {article.marketImpact}
                    </p>
                  </div>
                )}
                {article.expertOpinions && article.expertOpinions.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Expert Opinions</h2>
                    {article.expertOpinions.map((opinion, index) => (
                      <div key={index} className="mb-4">
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                          <span className="font-semibold">{opinion.name}:</span> "{opinion.quote}"
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {article.relatedCharts && article.relatedCharts.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Related Charts</h2>
                    <ul className="list-disc list-inside text-gray-600 text-base sm:text-lg leading-relaxed">
                      {article.relatedCharts.map((chart, index) => (
                        <li key={index}>{chart.description} ({chart.type})</li>
                      ))}
                    </ul>
                  </div>
                )}
                {article.conclusion && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Conclusion</h2>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                      {article.conclusion}
                    </p>
                  </div>
                )}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Deep Dives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deepDive
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
                    alt={`Image for ${story.title || 'Related Deep Dive'} in Deep Dives`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 flex flex-col">
                    <h3 className="font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer line-clamp-1">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">{story.content}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                      <span>{story.author || 'Unknown Author'}</span>
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

export default DeepDivesDetailsPage;