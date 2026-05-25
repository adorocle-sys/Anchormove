import React from 'react';
import { BarChart3 } from 'lucide-react';
import { DashboardStats } from '@types/index';

interface AdminDashboardProps {
  stats: DashboardStats;
  onOpenDashboard: () => void;
}

export default function AdminDashboard({ stats, onOpenDashboard }: AdminDashboardProps) {
  return (
    <div className="bg-black text-white rounded-3xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <p className="text-gray-300 mt-2 text-sm">Manage bookings and staff activities</p>
        </div>
        <div className="text-4xl">📊</div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="bg-gray-900 rounded-2xl p-4">
          <p className="text-gray-400 text-sm">Total Bookings</p>
          <h3 className="text-3xl font-black mt-2">{stats.totalBookings}</h3>
        </div>
        <div className="bg-gray-900 rounded-2xl p-4">
          <p className="text-gray-400 text-sm">Revenue</p>
          <h3 className="text-3xl font-black mt-2">₦{(stats.totalRevenue / 1000000).toFixed(1)}M</h3>
        </div>
        <div className="bg-gray-900 rounded-2xl p-4">
          <p className="text-gray-400 text-sm">Total Users</p>
          <h3 className="text-3xl font-black mt-2">{stats.totalUsers}</h3>
        </div>
        <div className="bg-gray-900 rounded-2xl p-4">
          <p className="text-gray-400 text-sm">Active Drivers</p>
          <h3 className="text-3xl font-black mt-2">{stats.totalDrivers}</h3>
        </div>
      </div>

      <button
        onClick={onOpenDashboard}
        className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-black text-lg hover:bg-yellow-500 transition-colors"
      >
        Open Dashboard
      </button>
    </div>
  );
}
