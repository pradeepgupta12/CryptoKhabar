

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LatestCasinoNews } from '../data/LatestCasinoNews';
import { cryptoCurrencyNews } from '../data/cryptoCurrencyNews';
import { newsPage } from '../data/newsPage';
import { partnerContent } from '../data/partnerContent';
import { deepDive } from '../data/deepDive';
import { pressReleases } from '../data/pressReleases';
import { topStories } from '../data/topStories';
import { marketOutlook } from '../data/marketOutlook';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

function Home() {
  const [likes, setLikes] = useState(
    [
      ...LatestCasinoNews.articles.map(article => ({ ...article, section: 'casino' })),
      ...cryptoCurrencyNews.map(article => ({ ...article, section: 'currency' })),
      ...partnerContent.map(article => ({ ...article, section: 'partner' })),
      ...deepDive.map(article => ({ ...article, section: 'deepDive' })),
      ...pressReleases.map(article => ({ ...article, section: 'press' })),
      ...topStories.map(article => ({ ...article, section: 'topStories' })),
      ...marketOutlook.map(article => ({ ...article, section: 'market' }))
    ].reduce((acc, article) => ({
      ...acc,
      [`${article.section}-${article.id}`]: article.likes || 0
    }), {})
  );

  const [showAllCurrency, setShowAllCurrency] = useState(false);
  const [showAllDeepDive, setShowAllDeepDive] = useState(false);
  const [showAllTopStories, setShowAllTopStories] = useState(false);

  const navigate = useNavigate();

  const showArticle = (article) => {
    switch (article.section) {
      case 'casino': navigate('/latest-casino-news', { state: { article } }); break;
      case 'currency': navigate('/latest-crypto-currency-news', { state: { article } }); break;
      case 'partner': navigate('/partner-content', { state: { article } }); break;
      case 'deepDive': navigate('/deep-dives', { state: { article } }); break;
      case 'press': navigate('/press-release', { state: { article } }); break;
      case 'topStories': navigate('/top-stories', { state: { article } }); break;
      case 'market': navigate('/market-outlook', { state: { article } }); break;
      default: navigate('/article', { state: { article } });
    }
  };

  const showComments = (e) => {
    e.stopPropagation();
    console.log('Comments feature coming soon!');
  };

  const shareArticle = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: 'CryptoKhabar Article',
        text: 'Check out this crypto news article on CryptoKhabar',
        url: window.location.href,
      }).catch((err) => console.error('Share failed:', err));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => console.log('Link copied to clipboard!'))
        .catch((err) => console.error('Clipboard copy failed:', err));
    }
  };

  const likeArticle = (section, articleId) => (e) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, [`${section}-${articleId}`]: prev[`${section}-${articleId}`] + 1 }));
  };

  const searchTopic = (topic) => console.log(`Showing articles about: ${topic}`);

  const subscribeNewsletter = () => {
    const email = document.getElementById('newsletter-email')?.value;
    if (email) {
      console.log(`Subscribed with email: ${email}`);
      document.getElementById('newsletter-email').value = '';
    } else {
      console.log('No email provided for subscription');
    }
  };

  // SEO: Structured Data for WebSite and BreadcrumbList
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CryptoKhabar',
    url: 'https://cryptokhabar.net/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://cryptokhabar.net/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://cryptokhabar.net/'
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 mt-20">
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CryptoKhabar | Latest Crypto News & Updates</title>
        <meta name="description" content="Stay updated with the latest cryptocurrency news, market trends, and deep dives at CryptoKhabar." />
        <meta name="keywords" content="crypto news, cryptocurrency, bitcoin, blockchain, market updates, CryptoKhabar" />
        <meta name="author" content="CryptoKhabar Team" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://cryptokhabar.net/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="CryptoKhabar | Latest Crypto News & Updates" />
        <meta property="og:description" content="Stay updated with the latest cryptocurrency news, market trends, and deep dives at CryptoKhabar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cryptokhabar.net/" />
        <meta property="og:image" content="https://cryptokhabar.net/images/preview.jpg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      </Helmet>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Latest Crypto News</h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{newsPage.description}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            {LatestCasinoNews.articles.slice(0, 1).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                onClick={() => showArticle({ ...article, section: 'casino' })}
              >
                <div className="relative">
                  <img
                    src={article.image.link}
                    srcSet={`${article.image.link.replace('.jpg', '-small.jpg')} 300w, ${article.image.link} 600w`}
                    sizes="(max-width: 600px) 300px, 600px"
                    loading="lazy"
                    alt={`${article.title} - CryptoKhabar`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer line-clamp-1">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 gap-4">
                    <div className="flex items-center space-x-3">
                      <span>By {article.author}</span>
                      <span>•</span>
                      <span>{article.timePosted}</span>
                      {article.readTime && (
                        <>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={likeArticle('casino', article.id)}
                        className="hover:text-blue-600 transition-colors flex items-center gap-1"
                      >
                        <FaThumbsUp /> {likes[`casino-${article.id}`]}
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
                </div>
              </article>
            ))}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {LatestCasinoNews.articles.slice(1).map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                  onClick={() => showArticle({ ...article, section: 'casino' })}
                >
                  <img
                    src={article.image.link}
                    srcSet={`${article.image.link.replace('.jpg', '-small.jpg')} 300w, ${article.image.link} 600w`}
                    sizes="(max-width: 600px) 300px, 600px"
                    loading="lazy"
                    alt={`${article.title} - CryptoKhabar`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col">
                    <h3 className="font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer line-clamp-1">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">{article.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                      <span>{article.author} • {article.timePosted}</span>
                      <button
                        onClick={likeArticle('casino', article.id)}
                        className="hover:text-blue-600 transition-colors flex items-center gap-1"
                      >
                        <FaThumbsUp /> {likes[`casino-${article.id}`]}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Market Overview</h3>
              <div className="space-y-3">
                {LatestCasinoNews.marketOverview.map((coin, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 ${coin.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                        {coin.icon}
                      </div>
                      <div>
                        <div className="font-medium">{coin.name}</div>
                        <div className="text-xs text-gray-500">{coin.symbol}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{coin.price}</div>
                      <div className={`text-xs ${coin.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {coin.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="/markets"
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
              >
                View All Markets
              </a>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
              <p className="text-sm opacity-90 mb-4">Get the latest crypto news delivered to your inbox daily.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                />
                <button
                  onClick={subscribeNewsletter}
                  className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Topics</h3>
              <div className="space-y-2">
                {LatestCasinoNews.trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors"
                    onClick={() => searchTopic(topic.topic)}
                  >
                    <span className="text-sm">#{topic.topic}</span>
                    <span className="text-xs text-gray-500">{topic.posts}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Fear & Greed Index</h3>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeDasharray={LatestCasinoNews.fearAndGreedIndex.strokeDasharray}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{LatestCasinoNews.fearAndGreedIndex.value}</div>
                      <div className="text-xs text-gray-500">{LatestCasinoNews.fearAndGreedIndex.sentiment}</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{LatestCasinoNews.fearAndGreedIndex.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Crypto Currency News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {cryptoCurrencyNews.slice(0, showAllCurrency ? cryptoCurrencyNews.length : 3).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                onClick={() => showArticle({ ...article, section: 'currency' })}
              >
                <img
                  src={article.image.link}
                  srcSet={`${article.image.link.replace('.jpg', '-small.jpg')} 300w, ${article.image.link} 600w`}
                  sizes="(max-width: 600px) 300px, 600px"
                  loading="lazy"
                  alt={`${article.title} - CryptoKhabar`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col">
                  <h3 className="font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer line-clamp-1">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-3">{article.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span>{article.author} • {article.timePosted}</span>
                    <button
                      onClick={likeArticle('currency', article.id)}
                      className="hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <FaThumbsUp /> {likes[`currency-${article.id}`]}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-start mb-8">
            <button
              onClick={() => setShowAllCurrency(!showAllCurrency)}
              className="text-blue-600 hover:underline font-medium"
            >
              {showAllCurrency ? 'View Less' : 'View More'}
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Partner Content</h2>
          <div className="overflow-x-auto scrollbar-hidden flex">
            {partnerContent.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex-shrink-0 mr-4"
                style={{ width: '200px' }}
                onClick={() => showArticle({ ...article, section: 'partner' })}
              >
                <div className="relative">
                  <img
                    src={article.image}
                    srcSet={`${article.image.replace('.jpg', '-small.jpg')} 300w, ${article.image} 600w`}
                    sizes="(max-width: 600px) 300px, 600px"
                    loading="lazy"
                    alt={`${article.title} - Partner Content - CryptoKhabar`}
                    className="w-full h-32 sm:h-36 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      PARTNER CONTENT
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <div className="bg-black bg-opacity-50 text-white px-1 py-0.5 rounded text-xs flex items-center">
                      <span className="text-yellow-400 mr-1">●</span>
                      CryptoKhabar
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-gray-900 text-sm leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span>{article.author || 'Partner'}</span>
                    <button
                      onClick={likeArticle('partner', article.id)}
                      className="hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <FaThumbsUp /> {likes[`partner-${article.id}`]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Deep Dives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {deepDive.slice(0, showAllDeepDive ? deepDive.length : 3).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                onClick={() => showArticle({ ...article, section: 'deepDive' })}
              >
                <img
                  src={article.image.link}
                  srcSet={`${article.image.link.replace('.jpg', '-small.jpg')} 300w, ${article.image.link} 600w`}
                  sizes="(max-width: 600px) 300px, 600px"
                  loading="lazy"
                  alt={`${article.title} - Deep Dive - CryptoKhabar`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col">
                  <h3 className="font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-3">{article.content}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span>Deep Analysis</span>
                    <button
                      onClick={likeArticle('deepDive', article.id)}
                      className="hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <FaThumbsUp /> {likes[`deepDive-${article.id}`]}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-start mb-8">
            <button
              onClick={() => setShowAllDeepDive(!showAllDeepDive)}
              className="text-blue-600 hover:underline font-medium"
            >
              {showAllDeepDive ? 'View Less' : 'View More'}
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Releases</h2>
          <div className="overflow-x-auto scrollbar-hidden flex">
            {pressReleases.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex-shrink-0 mr-4"
                style={{ width: '200px' }}
                onClick={() => showArticle({ ...article, section: 'press' })}
              >
                <div className="relative">
                  <img
                    src={article.image}
                    srcSet={`${article.image.replace('.jpg', '-small.jpg')} 300w, ${article.image} 600w`}
                    sizes="(max-width: 600px) 300px, 600px"
                    loading="lazy"
                    alt={`${article.title} - Press Release - CryptoKhabar`}
                    className="w-full h-32 sm:h-36 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      PRESS RELEASE
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <div className="bg-black bg-opacity-50 text-white px-1 py-0.5 rounded text-xs flex items-center">
                      <span className="text-yellow-400 mr-1">●</span>
                      CryptoKhabar
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-gray-900 text-sm leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span>{article.author || 'Press'}</span>
                    <button
                      onClick={likeArticle('press', article.id)}
                      className="hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <FaThumbsUp /> {likes[`press-${article.id}`]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {topStories.slice(0, showAllTopStories ? topStories.length : 3).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                onClick={() => showArticle({ ...article, section: 'topStories' })}
              >
                <img
                  src={article.image.link}
                  srcSet={`${article.image.link.replace('.jpg', '-small.jpg')} 300w, ${article.image.link} 600w`}
                  sizes="(max-width: 600px) 300px, 600px"
                  loading="lazy"
                  alt={`${article.title} - Top Story - CryptoKhabar`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col">
                  <h3 className="font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer line-clamp-1">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-3">{article.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span>{article.author} • {article.timePosted}</span>
                    <button
                      onClick={likeArticle('topStories', article.id)}
                      className="hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <FaThumbsUp /> {likes[`topStories-${article.id}`]}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-start mb-8">
            <button
              onClick={() => setShowAllTopStories(!showAllTopStories)}
              className="text-blue-600 hover:underline font-medium"
            >
              {showAllTopStories ? 'View Less' : 'View More'}
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Outlook</h2>
          <div className="overflow-x-auto scrollbar-hidden flex">
            {marketOutlook.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex-shrink-0 mr-4"
                style={{ width: '200px' }}
                onClick={() => showArticle({ ...article, section: 'market' })}
              >
                <div className="relative">
                  <img
                    src={article.image}
                    srcSet={`${article.image.replace('.jpg', '-small.jpg')} 300w, ${article.image} 600w`}
                    sizes="(max-width: 600px) 300px, 600px"
                    loading="lazy"
                    alt={`${article.title} - Market Outlook - CryptoKhabar`}
                    className="w-full h-32 sm:h-36 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      MARKETS
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <div className="bg-black bg-opacity-50 text-white px-1 py-0.5 rounded text-xs flex items-center">
                      <span className="text-yellow-400 mr-1">●</span>
                      CryptoKhabar
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-gray-900 text-sm leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span>{article.author || 'Market'}</span>
                    <button
                      onClick={likeArticle('market', article.id)}
                      className="hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <FaThumbsUp /> {likes[`market-${article.id}`]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;