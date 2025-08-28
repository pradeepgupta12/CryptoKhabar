import { useState } from 'react';

function Analysis() {
  const [likes, setLikes] = useState({
    goldenCross: 456,
    altcoinSeason: 234
  });

  const showArticle = (articleId) => alert(`Opening article: ${articleId}`);
  const likeArticle = (articleId) => {
    setLikes((prev) => ({ ...prev, [articleId]: prev[articleId] + 1 }));
  };

  return (
    <div className="page mt-20">
      <main className=" max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Market Analysis & Insights</h1>
          <p className="text-gray-600">Expert analysis, technical charts, and market predictions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Technical Analysis</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Bullish</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" onClick={() => showArticle('golden-cross')}>
                Bitcoin Forms Golden Cross Pattern - Target $50,000
              </h2>
              <p className="text-gray-600 mb-4">
                Bitcoin's 50-day moving average has crossed above the 200-day moving average, forming a bullish "golden cross" pattern. This technical indicator historically signals strong upward momentum.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>By Technical Team • 1 hour ago • 8 min read</span>
                <button onClick={() => likeArticle('goldenCross')} className="hover:text-blue-600">👍 {likes.goldenCross}</button>
              </div>
            </article>

            <div className="space-y-6">
              <article className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Market Outlook</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer" onClick={() => showArticle('altcoin-season')}>
                  Altcoin Season Indicators Flash Green Signals
                </h3>
                <p className="text-gray-600 mb-3">
                  Multiple on-chain metrics suggest the beginning of altcoin season, with Ethereum leading the charge. Layer 1 tokens showing strong relative strength against Bitcoin...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Market Research Team • 3h ago</span>
                  <button onClick={() => likeArticle('altcoinSeason')} className="hover:text-blue-600">👍 {likes.altcoinSeason}</button>
                </div>
              </article>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Market Sentiment</h3>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-green-600">Bullish</div>
                <div className="text-sm text-gray-500">Overall Market</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Fear & Greed</span>
                  <span className="text-sm font-medium text-green-600">75 (Greed)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Social Sentiment</span>
                  <span className="text-sm font-medium text-blue-600">Positive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Analysis;