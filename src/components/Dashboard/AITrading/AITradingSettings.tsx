import React from 'react';

export function AITradingSettings() {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Risk Level
        </label>
        <select className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
          <option value="low">Conservative (Low Risk)</option>
          <option value="medium">Balanced (Medium Risk)</option>
          <option value="high">Aggressive (High Risk)</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Max Trade Amount (USDC)
        </label>
        <input
          type="number"
          className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="1000"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Stop Loss (%)
        </label>
        <input
          type="number"
          className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="5"
        />
      </div>
    </div>
  );
}