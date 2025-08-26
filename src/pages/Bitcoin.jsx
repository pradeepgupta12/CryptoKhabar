import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Bitcoin() {
  const [likes, setLikes] = useState({
    btcEtf: 342,
    lightningGrowth: 198
  });
  const [chartTimeframe, setChartTimeframe] = useState('1D');

  const showArticle = (articleId) => alert(`Opening article: ${articleId}`);
  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: 'CryptoNews Article',
        text: 'Check out this crypto news article',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };
  const likeArticle = (articleId) => {
    setLikes((prev) => ({ ...prev, [articleId]: prev[articleId] + 1 }));
  };
  const updateChart = (timeframe) => {
    setChartTimeframe(timeframe);
    alert(`Chart updated to ${timeframe} view`);
  };

  return (
    <div className="page">
      <main className=" max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bitcoin News & Analysis</h1>
          <p className="text-gray-600">Latest updates, price analysis, and developments in the Bitcoin ecosystem</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Bitcoin Price Chart</h2>
                <div className="flex space-x-2">
                  <button onClick={() => updateChart('1D')} className={`px-3 py-1 rounded text-sm ${chartTimeframe === '1D' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    1D
                  </button>
                  <button onClick={() => updateChart('1W')} className={`px-3 py-1 rounded text-sm ${chartTimeframe === '1W' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    1W
                  </button>
                  <button onClick={() => updateChart('1M')} className={`px-3 py-1 rounded text-sm ${chartTimeframe === '1M' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    1M
                  </button>
                  <button onClick={() => updateChart('1Y')} className={`px-3 py-1 rounded text-sm ${chartTimeframe === '1Y' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    1Y
                  </button>
                </div>
              </div>
              <div className="h-64 bg-gray-50 rounded-lg flex items-end justify-between p-4">
                <div className="chart-bar bg-orange-500 w-8 rounded-t" style={{ height: '60%' }}></div>
                <div className="chart-bar bg-orange-500 w-8 rounded-t" style={{ height: '75%' }}></div>
                <div className="chart-bar bg-orange-500 w-8 rounded-t" style={{ height: '45%' }}></div>
                <div className="chart-bar bg-orange-500 w-8 rounded-t" style={{ height: '80%' }}></div>
                <div className="chart-bar bg-orange-500 w-8 rounded-t" style={{ height: '90%' }}></div>
                <div className="chart-bar bg-orange-500 w-8 rounded-t" style={{ height: '70%' }}></div>
                <div className="chart-bar bg-orange-500 w-8 rounded-t" style={{ height: '85%' }}></div>
                <div className="chart-bar bg-orange-500 w-8 rounded-t" style={{ height: '95%' }}></div>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-medium">$43,250</div>
                  <div className="text-gray-500">Current</div>
                </div>
                <div>
                  <div className="font-medium text-green-600">+2.5%</div>
                  <div className="text-gray-500">24h Change</div>
                </div>
                <div>
                  <div className="font-medium">$45,200</div>
                  <div className="text-gray-500">24h High</div>
                </div>
                <div>
                  <div className="font-medium">$42,100</div>
                  <div className="text-gray-500">24h Low</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <article className="bg-white rounded-lg shadow-md p-6 crypto-card">
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">₿</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer" onClick={() => showArticle('btc-etf')}>
                      Bitcoin ETF Sees Record $2.1B Inflows This Week
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Institutional investors continue to pour money into Bitcoin ETFs, with BlackRock's IBIT leading the charge. The surge in demand comes as traditional finance embraces digital assets at an unprecedented pace.
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>Sarah Johnson</span>
                        <span>•</span>
                        <span>1 hour ago</span>
                        <span>•</span>
                        <span>4 min read</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button onClick={() => likeArticle('btcEtf')} className="hover:text-blue-600">👍 {likes.btcEtf}</button>
                        <button onClick={shareArticle} className="hover:text-blue-600">📤</button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-lg shadow-md p-6 crypto-card">
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer" onClick={() => showArticle('lightning-growth')}>
                      Lightning Network Capacity Reaches 5,000 BTC Milestone
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Bitcoin's Lightning Network continues its rapid expansion, with total capacity now exceeding 5,000 BTC. The growth is driven by increased adoption from merchants and payment processors worldwide.
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>Mike Chen</span>
                        <span>•</span>
                        <span>3 hours ago</span>
                        <span>•</span>
                        <span>6 min read</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button onClick={() => likeArticle('lightningGrowth')} className="hover:text-blue-600">👍 {likes.lightningGrowth}</button>
                        <button onClick={shareArticle} className="hover:text-blue-600">📤</button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Bitcoin Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Market Cap</span>
                  <span className="font-medium">$847.2B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">24h Volume</span>
                  <span className="font-medium">$28.4B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Circulating Supply</span>
                  <span className="font-medium">19.6M BTC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Supply</span>
                  <span className="font-medium">21M BTC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Bitcoin;