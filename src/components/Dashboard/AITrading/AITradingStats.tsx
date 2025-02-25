import React from 'react';
import { TrendingUp, Clock, BarChart2 } from 'lucide-react';

export function AITradingStats() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <TrendingUp className="w-4 h-4 text-green-400" />
          <span className="text-sm text-gray-400">Profit Today</span>
        </div>
        <p className="text-xl font-bold text-green-400">+24.5%</p>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Clock className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-400">Active Time</span>
        </div>
        <p className="text-xl font-bold text-white">14h 22m</p>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <BarChart2 className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-gray-400">Success Rate</span>
        </div>
        <p className="text-xl font-bold text-white">92%</p>
      </div>
    </div>
  );
}