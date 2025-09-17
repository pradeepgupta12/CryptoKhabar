// import { useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
// import { useEffect } from 'react';
// import allData from '../data/allData'; // Adjust path to your allData.js file

// function AllDetailsPage() {
//   const { state, pathname } = useLocation();
//   const navigate = useNavigate();

//   // Scroll to top when pathname or state changes
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'instant' });
//   }, [pathname, state]);

//   // Debug: Log state to diagnose missing data
//   console.log('State received:', state);

//   // Use the item from state, or fallback to a default object if no data is available
//   const item = state?.item || (allData.bitcoin?.latest_bitcoin_news?.articles?.[0] || {});
//   const _type = state?.type || 'article'; // 'story' or 'article'

//   // Determine the category dynamically or fallback to 'bitcoin'
//   const itemCategory = item.category || (state?.item ? state.item.category : 'bitcoin');

//   // Structured data for the article
//   const articleSchema = {
//     "@context": "https://schema.org",
//     "@type": "NewsArticle",
//     "headline": item.headline || 'Untitled Crypto News',
//     "image": item.image || 'https://via.placeholder.com/500x500',
//     "datePublished": item.date || '2025-09-11',
//     "description": item.summary || item.headline || 'No content available.',
//     "author": {
//       "@type": "Organization",
//       "name": "Crypto Khabar"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Crypto Khabar",
//       "url": "https://cryptookhabar.netlify.app/"
//     }
//   };

//   const shareArticle = (e) => {
//     e.stopPropagation();
//     if (navigator.share) {
//       navigator.share({
//         title: item.headline || 'Crypto News',
//         text: 'Check out this crypto news article',
//         url: window.location.href,
//       }).catch((err) => console.error('Share failed:', err));
//     } else {
//       navigator.clipboard.writeText(window.location.href)
//         .then(() => console.log('Link copied to clipboard!'))
//         .catch((err) => console.error('Clipboard copy failed:', err));
//     }
//   };

//   const showComments = (e) => {
//     e.stopPropagation();
//     console.log('Comments feature coming soon!');
//   };

//   const likeArticle = (e) => {
//     e.stopPropagation();
//     console.log('Like feature coming soon!');
//   };

//   const handleRelatedItemClick = (relatedItem, relatedType) => {
//     console.log('Navigating to related item:', relatedItem);
//     navigate(`/all/${relatedItem.category}/${relatedItem.id}`, { state: { item: relatedItem, type: relatedType } });
//     window.scrollTo(0, 0); // Scroll to top on navigation
//   };

//   // Combine stories and articles for related items, excluding the current item
//   const relatedItems = [
//     ...(allData.bitcoin?.top_bitcoin_stories?.stories?.map((story) => ({ ...story, category: "bitcoin", type: 'story' })) || []),
//     ...(allData.bitcoin?.latest_bitcoin_news?.articles?.map((article) => ({ ...article, category: "bitcoin", type: 'article' })) || []),
//     ...(allData.ethereum?.top_ethereum_stories?.stories?.map((story) => ({ ...story, category: "ethereum", type: 'story' })) || []),
//     ...(allData.ethereum?.latest_ethereum_news?.articles?.map((article) => ({ ...article, category: "ethereum", type: 'article' })) || []),
//     ...(allData.blockchain?.top_blockchain_stories?.stories?.map((story) => ({ ...story, category: "blockchain", type: 'story' })) || []),
//     ...(allData.blockchain?.latest_blockchain_news?.articles?.map((article) => ({ ...article, category: "blockchain", type: 'article' })) || []),
//     ...(allData.defi?.top_defi_stories?.stories?.map((story) => ({ ...story, category: "defi", type: 'story' })) || []),
//     ...(allData.defi?.latest_defi_news?.articles?.map((article) => ({ ...article, category: "defi", type: 'article' })) || []),
//     ...(allData.nft?.top_nft_stories?.stories?.map((story) => ({ ...story, category: "nft", type: 'story' })) || []),
//     ...(allData.nft?.latest_nft_news?.articles?.map((article) => ({ ...article, category: "nft", type: 'article' })) || []),
//   ].filter((related) => !(related.category === itemCategory && related.id === item.id)).slice(0, 3);

//   return (
//     <div className="w-full min-h-screen bg-gray-100 pt-12 p-4 mt-8">
//       {/* SEO Metadata */}
//       <Helmet>
//         <title>{`${item.headline || 'Crypto News'} - Crypto Khabar`}</title>
//         <meta
//           name="description"
//           content={item.summary || `Read the latest ${itemCategory} news: ${item.headline || 'Crypto News'} on Crypto Khabar.`}
//         />
//         <link rel="canonical" href={`https://cryptookhabar.netlify.app/all/${itemCategory}/${item.id}`} />
//         <script type="application/ld+json">
//           {JSON.stringify(articleSchema)}
//         </script>
//       </Helmet>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2">
//             <article className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <div className="relative">
//                 <img
//                   src={item.image || 'https://via.placeholder.com/500x500'}
//                   alt={`Featured image for ${item.headline || 'Crypto News'} in ${itemCategory} news`}
//                   className="w-full h-64 sm:h-80 md:h-96 object-cover-contain rounded-t-lg"
//                   loading="lazy"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
//                     {item.tag || itemCategory.toUpperCase()}
//                   </span>
//                 </div>
//               </div>
//               <div className="p-6 sm:p-8">
//                 <h1 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-4">
//                   {item.headline || 'Untitled Crypto News'}
//                 </h1>
//                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 mb-6">
//                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
//                     <span>By Unknown Author</span>
//                     {item.time && (
//                       <>
//                         <span className="hidden sm:inline">•</span>
//                         <span>{item.time}</span>
//                       </>
//                     )}
//                     {item.coin && (
//                       <>
//                         <span className="hidden sm:inline">•</span>
//                         <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">
//                           {item.coin}
//                         </span>
//                       </>
//                     )}
//                   </div>
//                   <div className="flex items-center space-x-4 mt-4 sm:mt-0">
//                     <button
//                       onClick={likeArticle}
//                       className="hover:text-blue-600 transition-colors flex items-center gap-1"
//                     >
//                       <FaThumbsUp /> Like
//                     </button>
//                     <button
//                       onClick={showComments}
//                       className="hover:text-blue-600 transition-colors flex items-center gap-1"
//                     >
//                       <FaComment /> Comments
//                     </button>
//                     <button
//                       onClick={shareArticle}
//                       className="hover:text-blue-600 transition-colors flex items-center gap-1"
//                     >
//                       <FaShare /> Share
//                     </button>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
//                   {item.summary || item.headline || 'No content available.'}
//                 </p>
//                 {/* Placeholder for additional content */}
//                 <div className="mb-6">
//                   <h2 className="text-xl font-bold text-gray-900 mb-2">Details</h2>
//                   <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
//                     {item.summary
//                       ? `This article covers: ${item.summary}`
//                       : 'Detailed information about this crypto news is currently unavailable. Stay tuned for updates.'}
//                   </p>
//                 </div>
//               </div>
//             </article>
//           </div>
//           <div className="lg:col-span-1">
//             <div className="space-y-6">
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">Advertisement</h3>
//                 <div className="relative">
//                   <a href="https://example.com/crypto-ad-1" target="_blank" rel="noopener noreferrer">
//                     <img
//                       src="https://images.unsplash.com/photo-1621416950685-56b5d4c0b8a6"
//                       alt="Advertisement for cryptocurrency services"
//                       className="w-full h-48 sm:h-64 md:h-56 object-cover rounded-lg cursor-pointer"
//                       loading="lazy"
//                     />
//                   </a>
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">Advertisement</h3>
//                 <div className="relative">
//                   <a href="https://example.com/crypto-ad-2" target="_blank" rel="noopener noreferrer">
//                     <img
//                       src="https://images.unsplash.com/photo-1549421263-5ec394a5adf3"
//                       alt="Advertisement for cryptocurrency trading"
//                       className="w-full h-48 sm:h-64 md:h-56 object-cover rounded-lg cursor-pointer"
//                       loading="lazy"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Crypto News</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {relatedItems.length > 0 ? (
//               relatedItems.map((related) => (
//                 <article
//                   key={`${related.category}-${related.id}`}
//                   className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
//                   onClick={() => handleRelatedItemClick(related, related.type)}
//                 >
//                   <img
//                     src={related.image || 'https://via.placeholder.com/500x500'}
//                     alt={`Image for ${related.headline || 'Related News'} in ${related.category} news`}
//                     className="w-full h-48 object-cover-contain"
//                     loading="lazy"
//                   />
//                   <div className="p-4 flex flex-col">
//                     <h3 className="font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer line-clamp-1">
//                       {related.headline || 'Untitled'}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-2 line-clamp-3">
//                       {related.summary || related.headline || 'No content available.'}
//                     </p>
//                     <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
//                       <span>{related.time || 'Unknown Time'}</span>
//                       {related.coin && (
//                         <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">
//                           {related.coin}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </article>
//               ))
//             ) : (
//               <p className="text-gray-600">No related news available.</p>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default AllDetailsPage;


import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import { useEffect } from 'react';
import allData from '../data/allData'; // Adjust path to your allData.js file

function AllDetailsPage() {
  const { state, pathname } = useLocation();
  const navigate = useNavigate();

  // Scroll to top when pathname or state changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, state]);

  // Debug: Log state to diagnose missing data
  console.log('State received:', state);

  // Use the item from state, or fallback to a default object if no data is available
  const item = state?.item || (allData.bitcoin?.latest_bitcoin_news?.articles?.[0] || {});
  const _type = state?.type || 'article'; // 'story' or 'article'

  // Determine the category dynamically or fallback to 'bitcoin'
  const itemCategory = item.category || (state?.item ? state.item.category : 'bitcoin');

  // Structured data for the article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": item.headline || 'Untitled Crypto News',
    "image": item.image || 'https://via.placeholder.com/500x500',
    "datePublished": item.date || '2025-09-11',
    "description": item.summary || item.headline || 'No content available.',
    "author": {
      "@type": "Organization",
      "name": "Crypto Khabar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Crypto Khabar",
      "url": "https://cryptokhabar.net/"
    }
  };

  const shareArticle = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: item.headline || 'Crypto News',
        text: 'Check out this crypto news article',
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

  const handleRelatedItemClick = (relatedItem, relatedType) => {
    console.log('Navigating to related item:', relatedItem);
    navigate(`/all/${relatedItem.category}/${relatedItem.id}`, { state: { item: relatedItem, type: relatedType } });
    window.scrollTo(0, 0); // Scroll to top on navigation
  };

  // Combine stories and articles for related items, excluding the current item
  const relatedItems = [
    ...(allData.bitcoin?.top_bitcoin_stories?.stories?.map((story) => ({ ...story, category: "bitcoin", type: 'story' })) || []),
    ...(allData.bitcoin?.latest_bitcoin_news?.articles?.map((article) => ({ ...article, category: "bitcoin", type: 'article' })) || []),
    ...(allData.ethereum?.top_ethereum_stories?.stories?.map((story) => ({ ...story, category: "ethereum", type: 'story' })) || []),
    ...(allData.ethereum?.latest_ethereum_news?.articles?.map((article) => ({ ...article, category: "ethereum", type: 'article' })) || []),
    ...(allData.blockchain?.top_blockchain_stories?.stories?.map((story) => ({ ...story, category: "blockchain", type: 'story' })) || []),
    ...(allData.blockchain?.latest_blockchain_news?.articles?.map((article) => ({ ...article, category: "blockchain", type: 'article' })) || []),
    ...(allData.defi?.top_defi_stories?.stories?.map((story) => ({ ...story, category: "defi", type: 'story' })) || []),
    ...(allData.defi?.latest_defi_news?.articles?.map((article) => ({ ...article, category: "defi", type: 'article' })) || []),
    ...(allData.nft?.top_nft_stories?.stories?.map((story) => ({ ...story, category: "nft", type: 'story' })) || []),
    ...(allData.nft?.latest_nft_news?.articles?.map((article) => ({ ...article, category: "nft", type: 'article' })) || []),
  ].filter((related) => !(related.category === itemCategory && related.id === item.id)).slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-gray-100 pt-12 p-4 mt-8">
      {/* SEO Metadata */}
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${item.headline || 'Crypto News'} - Crypto Khabar`}</title>
        <meta
          name="description"
          content={item.summary || `Read the latest ${itemCategory} news: ${item.headline || 'Crypto News'} on Crypto Khabar.`}
        />
        <meta name="keywords" content={`crypto news, cryptocurrency, ${itemCategory}, Crypto Khabar, ${item.headline ? item.headline.toLowerCase() : ''}`} />
        <meta name="author" content="Crypto Khabar Team" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://cryptokhabar.net/all/${itemCategory}/${item.id}`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${item.headline || 'Crypto News'} - Crypto Khabar`} />
        <meta property="og:description" content={item.summary || `Read the latest ${itemCategory} news: ${item.headline || 'Crypto News'} on Crypto Khabar.`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://cryptokhabar.net/all/${itemCategory}/${item.id}`} />
        <meta property="og:image" content={item.image || 'https://cryptokhabar.net/images/preview.jpg'} />
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
                  src={item.image || 'https://via.placeholder.com/500x500'}
                  alt={`Featured image for ${item.headline || 'Crypto News'} in ${itemCategory} news`}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover-contain rounded-t-lg"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {item.tag || itemCategory.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h1 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {item.headline || 'Untitled Crypto News'}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                    <span>By Unknown Author</span>
                    {item.time && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <span>{item.time}</span>
                      </>
                    )}
                    {item.coin && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">
                          {item.coin}
                        </span>
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
                  {item.summary || item.headline || 'No content available.'}
                </p>
                {/* Placeholder for additional content */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Details</h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {item.summary
                      ? `This article covers: ${item.summary}`
                      : 'Detailed information about this crypto news is currently unavailable. Stay tuned for updates.'}
                  </p>
                </div>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Crypto News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedItems.length > 0 ? (
              relatedItems.map((related) => (
                <article
                  key={`${related.category}-${related.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleRelatedItemClick(related, related.type)}
                >
                  <img
                    src={related.image || 'https://via.placeholder.com/500x500'}
                    alt={`Image for ${related.headline || 'Related News'} in ${related.category} news`}
                    className="w-full h-48 object-cover-contain"
                    loading="lazy"
                  />
                  <div className="p-4 flex flex-col">
                    <h3 className="font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer line-clamp-1">
                      {related.headline || 'Untitled'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                      {related.summary || related.headline || 'No content available.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                      <span>{related.time || 'Unknown Time'}</span>
                      {related.coin && (
                        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">
                          {related.coin}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p className="text-gray-600">No related news available.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AllDetailsPage;