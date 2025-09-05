// analysis.js

const analysisData = {
  articles: [
    {
      id: "goldenCross",
      type: "Technical Analysis",
      sentiment: "Bullish",
      title: "Bitcoin Forms Golden Cross Pattern - Target $50,000",
      description:
        "Bitcoin's 50-day moving average has crossed above the 200-day moving average, forming a bullish 'golden cross' pattern. Historically, यह strong upward momentum का संकेत देता है और long-term investors के लिए confidence बढ़ाता है।",
      author: "Technical Team",
      timeAgo: "1h ago",
      readTime: "8 min read",
      likes: 456,
      tags: ["Bitcoin", "Technical Analysis", "Bullish"],
    },
    {
      id: "altcoinSeason",
      type: "Market Outlook",
      sentiment: "Neutral",
      title: "Altcoin Season Indicators Flash Green Signals",
      description:
        "Multiple on-chain metrics suggest the beginning of altcoin season, with Ethereum leading the charge. Layer 1 tokens showing strong relative strength against Bitcoin, जबकि DeFi tokens भी बढ़ रहे हैं।",
      author: "Market Research Team",
      timeAgo: "3h ago",
      readTime: "5 min read",
      likes: 234,
      tags: ["Ethereum", "Altcoins", "Market Outlook"],
    },
    {
      id: "regulationUpdate",
      type: "Regulation",
      sentiment: "Mixed",
      title: "US SEC Hints at Stricter Stablecoin Regulations",
      description:
        "SEC ने stablecoins को 'systemic risk' बताते हुए संकेत दिया है कि जल्द ही regulatory framework लागू किया जाएगा। इससे short-term market volatility आ सकती है, लेकिन long-term adoption के लिए clarity मिलेगी।",
      author: "Policy Desk",
      timeAgo: "5h ago",
      readTime: "6 min read",
      likes: 118,
      tags: ["Stablecoins", "Regulation", "SEC"],
    },
    {
      id: "nftGrowth",
      type: "NFT & Web3",
      sentiment: "Bullish",
      title: "NFT Sales Surge 40% as Gaming Tokens Gain Popularity",
      description:
        "NFT marketplaces में पिछले 7 दिनों में 40% trading volume बढ़ा है। खासकर Web3 gaming tokens ने बड़ा growth दिखाया है, जिससे NFTs और Play-to-Earn sector में revival देखा जा रहा है।",
      author: "Web3 Insights",
      timeAgo: "12h ago",
      readTime: "7 min read",
      likes: 321,
      tags: ["NFT", "Web3", "Gaming"],
    },
    {
      id: "macroImpact",
      type: "Macro Analysis",
      sentiment: "Bearish",
      title: "US Inflation Data Pushes Bitcoin Below $42k",
      description:
        "US inflation expectations ने crypto market पर दबाव डाला है। Risk assets जैसे Bitcoin और Ethereum पर selling pressure दिख रहा है, जबकि traders safe-haven assets की ओर रुख कर रहे हैं।",
      author: "Macro Strategy Team",
      timeAgo: "1d ago",
      readTime: "9 min read",
      likes: 198,
      tags: ["Bitcoin", "Macro", "Inflation"],
    },
  ],

  marketSentiment: {
    overall: {
      sentiment: "Bullish",
      color: "text-green-600",
      label: "Overall Market",
    },
    metrics: [
      { name: "Fear & Greed Index", value: "75 (Greed)", color: "text-green-600" },
      { name: "Social Sentiment", value: "Positive", color: "text-blue-600" },
      { name: "Funding Rates", value: "Neutral", color: "text-gray-600" },
    ],
  },

  trendingTopics: [
    "Bitcoin ETF Inflows",
    "Ethereum 2.0 Staking",
    "DeFi Liquidity Surge",
    "Stablecoin Regulation",
    "NFT Gaming Boom",
    "Macro Inflation Impact",
  ],

  upcomingEvents: [
    {
      event: "Ethereum Cancun Upgrade",
      date: "Sep 20, 2025",
      impact: "High",
      description:
        "Ethereum network का Cancun upgrade scalability और gas fees optimization पर फोकस करेगा।",
    },
    {
      event: "Bitcoin Halving",
      date: "Apr 2028",
      impact: "Very High",
      description:
        "Bitcoin halving block reward को 6.25 से 3.125 BTC तक कम करेगा, जिससे scarcity बढ़ेगी।",
    },
    {
      event: "Cardano Hydra Rollout",
      date: "Q4 2025",
      impact: "Medium",
      description:
        "Cardano Hydra layer-2 solution launch करेगा जिससे TPS बढ़ेगा और DeFi adoption तेज होगा।",
    },
  ],

  authors: [
    { name: "Technical Team", role: "Chart Analysts", articles: 120 },
    { name: "Market Research Team", role: "On-chain Analysts", articles: 98 },
    { name: "Policy Desk", role: "Regulatory Experts", articles: 45 },
    { name: "Web3 Insights", role: "NFT & Metaverse Analysts", articles: 60 },
    { name: "Macro Strategy Team", role: "Global Macro Analysts", articles: 70 },
  ],
};

export default analysisData;
