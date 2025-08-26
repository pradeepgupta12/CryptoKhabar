import { useState } from 'react';

function Markets() {
  return (
    <div className="page">
      <main className=" max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cryptocurrency Markets</h1>
          <p className="text-gray-600">Real-time prices, market cap, and trading data for all cryptocurrencies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">$1.8T</div>
            <div className="text-sm text-gray-500">Total Market Cap</div>
            <div className="text-xs price-up mt-1">+2.4%</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-green-600">$89B</div>
            <div className="text-sm text-gray-500">24h Volume</div>
            <div className="text-xs price-up mt-1">+8.1%</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-purple-600">52%</div>
            <div className="text-sm text-gray-500">BTC Dominance</div>
            <div className="text-xs price-down mt-1">-0.3%</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-orange-600">2,847</div>
            <div className="text-sm text-gray-500">Active Coins</div>
            <div className="text-xs text-gray-500 mt-1">+12 new</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold">Top Cryptocurrencies</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">24h %</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Market Cap</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Volume</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">1</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">₿</div>
                      <div>
                        <div className="font-medium">Bitcoin</div>
                        <div className="text-sm text-gray-500">BTC</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">$43,250</td>
                  <td className="px-6 py-4 price-up">+2.5%</td>
                  <td className="px-6 py-4">$847.2B</td>
                  <td className="px-6 py-4">$28.4B</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">2</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">Ξ</div>
                      <div>
                        <div className="font-medium">Ethereum</div>
                        <div className="text-sm text-gray-500">ETH</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">$2,580</td>
                  <td className="px-6 py-4 price-up">+1.8%</td>
                  <td className="px-6 py-4">$310.4B</td>
                  <td className="px-6 py-4">$15.2B</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">3</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">B</div>
                      <div>
                        <div className="font-medium">Binance Coin</div>
                        <div className="text-sm text-gray-500">BNB</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">$315</td>
                  <td className="px-6 py-4 price-down">-0.5%</td>
                  <td className="px-6 py-4">$48.2B</td>
                  <td className="px-6 py-4">$2.1B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Markets;