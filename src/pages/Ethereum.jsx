import { useState } from 'react';

function Ethereum() {
  const [likes, setLikes] = useState({
    ethStaking: 289,
    layer2: 156
  });

  const showArticle = (articleId) => alert(`Opening article: ${articleId}`);
  const likeArticle = (articleId) => {
    setLikes((prev) => ({ ...prev, [articleId]: prev[articleId] + 1 }));
  };

  return (
    <div className="page">
      <main className=" max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ethereum News & Updates</h1>
          <p className="text-gray-600">Latest developments in the Ethereum ecosystem, DApps, and Layer 2 solutions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <article className="bg-white rounded-lg shadow-md p-6 crypto-card">
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">Ξ</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer" onClick={() => showArticle('eth-staking')}>
                      Ethereum Staking Rewards Reach 8.5% APY After Latest Update
                    </h3>
                    <p className="text-gray-600 mb-3">
                      The recent Ethereum network upgrade has significantly boosted staking rewards, with validators now earning an average of 8.5% annual percentage yield. Over 15 million ETH is currently staked.
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Mike Chen • 2 hours ago</span>
                      <button onClick={() => likeArticle('ethStaking')} className="hover:text-blue-600">👍 {likes.ethStaking}</button>
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-lg shadow-md p-6 crypto-card">
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer" onClick={() => showArticle('layer2')}>
                      Layer 2 Solutions Process 2M Transactions Daily
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Ethereum Layer 2 networks including Polygon, Arbitrum, and Optimism are now processing over 2 million transactions daily. This represents a 300% increase from last year.
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Lisa Park • 4 hours ago</span>
                      <button onClick={() => likeArticle('layer2')} className="hover:text-blue-600">👍 {likes.layer2}</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Ethereum Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Market Cap</span>
                  <span className="font-medium">$310.4B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">24h Volume</span>
                  <span className="font-medium">$15.2B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Supply</span>
                  <span className="font-medium">120.3M ETH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Staked ETH</span>
                  <span className="font-medium">15.2M ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Ethereum;