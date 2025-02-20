import React from 'react';
import { UserPlus, TrendingUp } from 'lucide-react';

const traders = [
  {
    id: 1,
    name: 'Alpha Trader',
    profit: '+458.5%',
    trades: 145,
    winRate: '89%',
    following: true,
  },
  {
    id: 2,
    name: 'Crypto Whale',
    profit: '+287.2%',
    trades: 98,
    winRate: '82%',
    following: false,
  },
];

export function CopyTrading() {
  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-6">Top Traders</h2>
      <div className="space-y-4">
        {traders.map((trader) => (
          <div
            key={trader.id}
            className="bg-gray-800 p-4 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">{trader.name}</h3>
                <div className="flex space-x-4 text-sm">
                  <span className="text-green-400">{trader.profit}</span>
                  <span className="text-gray-400">{trader.trades} trades</span>
                  <span className="text-blue-400">{trader.winRate} win rate</span>
                </div>
              </div>
            </div>
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                trader.following
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>{trader.following ? 'Following' : 'Follow'}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}