import { useState } from 'react';

function NFTs() {
  const [likes, setLikes] = useState({
    nftCollection: 289,
    gamingNFTs: 234
  });

  const showArticle = (articleId) => alert(`Opening article: ${articleId}`);
  const likeArticle = (articleId) => {
    setLikes((prev) => ({ ...prev, [articleId]: prev[articleId] + 1 }));
  };

  return (
    <div className="page">
      <main className=" max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">NFT News & Collections</h1>
          <p className="text-gray-600">Non-Fungible Token market updates, trending collections, and digital art news</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <article className="bg-white rounded-lg shadow-md p-6 crypto-card">
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">🎨</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer" onClick={() => showArticle('nft-collection')}>
                      Metropolitan Museum Launches Exclusive NFT Collection
                    </h3>
                    <p className="text-gray-600 mb-3">
                      The Metropolitan Museum of Art has partnered with renowned digital artists to create an exclusive NFT collection featuring 1,000 unique pieces.
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Lisa Park • 2 hours ago</span>
                      <button onClick={() => likeArticle('nftCollection')} className="hover:text-blue-600">👍 {likes.nftCollection}</button>
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-lg shadow-md p-6 crypto-card">
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">🎮</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer" onClick={() => showArticle('gaming-nfts')}>
                      Gaming NFTs See 200% Surge in Trading Volume
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Gaming-related NFTs have experienced a massive 200% increase in trading volume over the past month. Popular play-to-earn games are driving demand.
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Alex Rivera • 6 hours ago</span>
                      <button onClick={() => likeArticle('gamingNFTs')} className="hover:text-blue-600">👍 {likes.gamingNFTs}</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Collections (24h)</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs">🐵</div>
                    <div>
                      <div className="font-medium text-sm">Bored Apes</div>
                      <div className="text-xs text-gray-500">Floor: 45 ETH</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">2,340 ETH</div>
                    <div className="text-xs price-up">+12%</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs">👾</div>
                    <div>
                      <div className="font-medium text-sm">CryptoPunks</div>
                      <div className="text-xs text-gray-500">Floor: 65 ETH</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">1,890 ETH</div>
                    <div className="text-xs price-up">+8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NFTs;