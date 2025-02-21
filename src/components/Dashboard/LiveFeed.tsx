import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const transactions = [
  {
    id: 1,
    type: 'Snipe',
    token: 'SOL/USDC',
    status: 'success',
    timestamp: '2 min ago',
    amount: '500 USDC',
  },
  {
    id: 2,
    type: 'Copy Trade',
    token: 'RAY/SOL',
    status: 'failed',
    timestamp: '5 min ago',
    amount: '200 SOL',
  },
];

export function LiveFeed() {
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h2 className="text-xl font-bold text-white mb-4">Live Transactions</h2>
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between bg-gray-800 p-3 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              {tx.status === 'success' ? (
                <CheckCircle className="text-green-500 w-5 h-5" />
              ) : (
                <XCircle className="text-red-500 w-5 h-5" />
              )}
              <div>
                <p className="text-white font-medium">{tx.type}</p>
                <p className="text-sm text-gray-400">{tx.token}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white">{tx.amount}</p>
              <p className="text-sm text-gray-400">{tx.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}