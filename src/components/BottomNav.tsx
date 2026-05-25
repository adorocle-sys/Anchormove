import React from 'react';
import { Home, Package, CreditCard, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'bookings', label: 'Bookings', icon: Package },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4 flex justify-between text-xs font-semibold max-w-md mx-auto">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'text-black bg-gray-100'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            <Icon size={20} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
