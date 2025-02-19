import React from 'react';
import { Search } from 'lucide-react';

export function TokenSearch() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search tokens..."
        className="w-full bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
    </div>
  );
}