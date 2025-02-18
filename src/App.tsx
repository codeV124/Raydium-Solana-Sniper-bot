import React from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { TokenSearch } from './components/Dashboard/TokenSearch';
import { SnipePanel } from './components/Dashboard/SnipePanel';
import { CopyTrading } from './components/Dashboard/CopyTrading';
import { LiveFeed } from './components/Dashboard/LiveFeed';
import { AITradingPanel } from './components/Dashboard/AITrading/AITradingPanel';
import { Wallet, Bell } from 'lucide-react';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="w-96">
            <TokenSearch />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
              <Wallet className="w-5 h-5" />
              <span>Connect Wallet</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 space-y-8">
            <AITradingPanel />
            <SnipePanel />
            <CopyTrading />
          </div>
          
          <div className="col-span-4">
            <LiveFeed />
          </div>
        </div>

        <footer className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="https://raw.githubusercontent.com/raydium-io/media-assets/master/logo.svg" alt="Raydium" className="h-6" />
            </div>
            <p className="text-sm text-gray-500">
              © 2024 Solana Sniper Bot. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;