

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { marketStats, topCryptos } from '../data/marketStats'; // Adjust path to your marketStats.js file

function Markets() {
  const [dynamicStats, setDynamicStats] = useState(marketStats);
  const [dynamicCryptos, setDynamicCryptos] = useState(topCryptos);

  // Structured data for market stats and top cryptocurrencies
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Cryptocurrency Market Statistics",
    "description": "Real-time cryptocurrency market statistics including total market cap, 24h volume, BTC dominance, active coins, and top cryptocurrencies by market cap and volume.",
    "publisher": {
      "@type": "Organization",
      "name": "Crypto Khabar",
      "url": "https://cryptookhabar.netlify.app/"
    },
    "dataset": [
      {
        "@type": "Dataset",
        "name": "Market Statistics",
        "description": "Key market statistics including total market cap, 24h volume, BTC dominance, and active coins.",
        "data": dynamicStats.map((stat) => ({
          "@type": "DataRecord",
          "name": stat.label,
          "value": stat.value,
          "change": stat.change
        }))
      },
      {
        "@type": "Dataset",
        "name": "Top Cryptocurrencies",
        "description": "Top cryptocurrencies by market cap, including price, 24h change, and trading volume.",
        "data": dynamicCryptos.map((crypto) => ({
          "@type": "DataRecord",
          "name": crypto.name,
          "symbol": crypto.symbol,
          "price": crypto.price,
          "change": crypto.change,
          "marketCap": crypto.marketCap,
          "volume": crypto.volume
        }))
      }
    ]
  };

  // Function to simulate real-time market fluctuations
  const simulateMarketChanges = () => {
    // Simulate changes for marketStats
    const updatedStats = dynamicStats.map((stat) => {
      let newValue = stat.value;
      let newChange = stat.change;
      if (stat.label === 'Total Market Cap' || stat.label === '24h Volume') {
        const valueNum = parseFloat(stat.value.replace(/[TBM$]/g, '')) * (stat.value.includes('T') ? 1e12 : 1e9);
        const fluctuation = (Math.random() - 0.5) * 0.05; // +/- 5% change
        const newValueNum = valueNum * (1 + fluctuation);
        newValue = stat.label === 'Total Market Cap'
          ? `$${Math.round(newValueNum / 1e12 * 10) / 10}T`
          : `$${Math.round(newValueNum / 1e9 * 10) / 10}B`;
        newChange = `${(fluctuation * 100).toFixed(1)}%`;
      } else if (stat.label === 'BTC Dominance') {
        const valueNum = parseFloat(stat.value.replace('%', ''));
        const fluctuation = (Math.random() - 0.5) * 2; // +/- 2% change
        newValue = `${Math.round((valueNum + fluctuation) * 10) / 10}%`;
        newChange = `${fluctuation.toFixed(1)}%`;
      } else if (stat.label === 'Active Coins') {
        const valueNum = parseInt(stat.value.replace(/,/g, ''));
        const fluctuation = Math.round((Math.random() - 0.5) * 10); // +/- 10 coins
        newValue = (valueNum + fluctuation).toLocaleString();
        newChange = fluctuation >= 0 ? `+${fluctuation} new` : `${fluctuation} new`;
      }
      return {
        ...stat,
        value: newValue,
        change: newChange,
        trend: newChange.startsWith('-') ? 'price-down' : 'price-up',
      };
    });

    // Simulate changes for topCryptos
    const updatedCryptos = dynamicCryptos.map((crypto) => {
      const priceNum = parseFloat(crypto.price.replace(/[$,]/g, ''));
      const marketCapNum = parseFloat(crypto.marketCap.replace(/[BM$]/g, '')) * (crypto.marketCap.includes('B') ? 1e9 : 1e6);
      const volumeNum = parseFloat(crypto.volume.replace(/[BM$]/g, '')) * (crypto.volume.includes('B') ? 1e9 : 1e6);
      const fluctuation = (Math.random() - 0.5) * 0.05; // +/- 5% change
      const newPrice = priceNum * (1 + fluctuation);
      const newMarketCap = marketCapNum * (1 + fluctuation);
      const newVolume = volumeNum * (1 + fluctuation);
      return {
        ...crypto,
        price: `$${Math.round(newPrice).toLocaleString()}`,
        change: `${(fluctuation * 100).toFixed(1)}%`,
        marketCap: newMarketCap >= 1e9
          ? `$${Math.round(newMarketCap / 1e9 * 10) / 10}B`
          : `$${Math.round(newMarketCap / 1e6 * 10) / 10}M`,
        volume: newVolume >= 1e9
          ? `$${Math.round(newVolume / 1e9 * 10) / 10}B`
          : `$${Math.round(newVolume / 1e6 * 10) / 10}M`,
        trend: fluctuation >= 0 ? 'price-up' : 'price-down',
      };
    });

    setDynamicStats(updatedStats);
    setDynamicCryptos(updatedCryptos);
  };

  // Simulate real-time updates every 30 seconds
  useEffect(() => {
    simulateMarketChanges(); // Initial update
    const interval = setInterval(simulateMarketChanges, 30000); // Update every 30 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="page mt-20">
      {/* SEO Metadata */}
      <Helmet>
        <title>Cryptocurrency Market Stats - Crypto Khabar</title>
        <meta
          name="description"
          content="Explore real-time cryptocurrency market statistics, including total market cap, 24h trading volume, BTC dominance, and top cryptocurrencies by market cap and volume on Crypto Khabar."
        />
        <link rel="canonical" href="https://cryptookhabar.netlify.app/markets/" />
        <script type="application/ld+json">
          {JSON.stringify(datasetSchema)}
        </script>
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {dynamicStats.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {dynamicStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                {stat.value && (
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                )}
                {stat.label && (
                  <div className="text-sm text-gray-500">
                    {stat.label}
                  </div>
                )}
                {stat.change && (
                  <div className={`text-xs ${stat.trend} mt-1`}>
                    {stat.change}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {dynamicCryptos.length > 0 && (
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
                  {dynamicCryptos.map((crypto) => (
                    <tr key={crypto.rank} className="hover:bg-gray-50">
                      {crypto.rank && <td className="px-6 py-4 text-sm">{crypto.rank}</td>}
                      {(crypto.name || crypto.symbol || crypto.logo) && (
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            {crypto.logo && (
                              <div className={`w-8 h-8 ${crypto.bgColor} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                                <img
                                  src={crypto.logo}
                                  alt={`Logo for ${crypto.name || crypto.symbol} cryptocurrency`}
                                  className="w-full h-full object-cover rounded-full"
                                  loading="lazy"
                                />
                              </div>
                            )}
                            {(crypto.name || crypto.symbol) && (
                              <div>
                                {crypto.name && <div className="font-medium">{crypto.name}</div>}
                                {crypto.symbol && <div className="text-sm text-gray-500">{crypto.symbol}</div>}
                              </div>
                            )}
                          </div>
                        </td>
                      )}
                      {crypto.price && <td className="px-6 py-4 font-medium">{crypto.price}</td>}
                      {crypto.change && <td className="px-6 py-4 ${crypto.trend}">{crypto.change}</td>}
                      {crypto.marketCap && <td className="px-6 py-4">{crypto.marketCap}</td>}
                      {crypto.volume && <td className="px-6 py-4">{crypto.volume}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Markets;