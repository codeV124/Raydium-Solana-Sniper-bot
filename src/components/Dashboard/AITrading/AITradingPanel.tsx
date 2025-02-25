import React from 'react';
import { Brain, Settings } from 'lucide-react';
import { AITradingStats } from './AITradingStats';
import { AITradingSettings } from './AITradingSettings';

export function AITradingPanel() {
  const [isTrading, setIsTrading] = React.useState(false);

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">AI Trading</h2>
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <AITradingStats />
      <AITradingSettings />
      
      <button
        onClick={() => setIsTrading(!isTrading)}
        className={`w-full mt-6 font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group ${
          isTrading 
            ? 'bg-red-600 hover:bg-red-700 text-white' 
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        <Brain className="w-5 h-5 group-hover:animate-pulse" />
        <span>{isTrading ? 'Stop AI Trading' : 'Start AI Trading'}</span>
      </button>
    </div>
  );
}