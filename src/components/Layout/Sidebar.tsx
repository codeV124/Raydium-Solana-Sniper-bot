import React from 'react';
import { LayoutDashboard, Crosshair, Users, History, Settings } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
  { icon: Crosshair, label: 'Sniping Tools', href: '#' },
  { icon: Users, label: 'Copy Trading', href: '#' },
  { icon: History, label: 'History', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Sniper Bot</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-all duration-200 hover:text-blue-400 group"
              >
                <item.icon className="w-5 h-5 group-hover:text-blue-400" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}