import { useState } from 'react';

function DeFi() {
  const [likes, setLikes] = useState({
    defiProtocol: 312,
    crossChain: 198
  });

  const showArticle = (articleId) => alert(`Opening article: ${articleId}`);
  const likeArticle = (articleId) => {
    setLikes((prev) => ({ ...prev, [articleId]: prev[articleId] + 1 }));
  };

  return (
    <div className="page">
      <main className=" max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">DeFi News & Protocols</h1>
          <p className="text-gray-600">Decentralized Finance updates, yield opportunities, and protocol analysis</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <article className="bg-white rounded-lg shadow-md p-6 crypto-card">
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">🏦</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer" onClick={() => showArticle('defi-protocol')}>
                      New DeFi Protocol Offers 15% APY on Stablecoin Deposits
                    </h3>
                    <p className="text-gray-600 mb-3">
                      A revolutionary yield farming protocol has launched, offering 15% annual percentage yield on stablecoin deposits. The protocol uses advanced algorithmic strategies to optimize returns.
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Alex Rivera • 1 hour ago</span>
                      <button onClick={() => likeArticle('defiProtocol')} className="hover:text-blue-600">👍 {likes.defiProtocol}</button>
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-lg shadow-md p-6 crypto-card">
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">🌉</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer" onClick={() => showArticle('cross-chain')}>
                      Cross-Chain Bridge Facilitates $2B in Weekly Volume
                    </h3>
                    <p className="text-gray-600 mb-3">
                      A major cross-chain bridge protocol is now facilitating over $2 billion in weekly transaction volume, connecting 12 different blockchain networks.
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Sarah Johnson • 3 hours ago</span>
                      <button onClick={() => likeArticle('crossChain')} className="hover:text-blue-600">👍 {likes.crossChain}</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top DeFi Protocols</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Uniswap</span>
                  <span className="text-sm">$4.2B</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Aave</span>
                  <span className="text-sm">$3.8B</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Compound</span>
                  <span className="text-sm">$2.1B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DeFi;