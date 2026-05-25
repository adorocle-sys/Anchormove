import React from 'react';
import { MapPin, Clock, AlertCircle } from 'lucide-react';

export default function LiveTracking() {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">Live Tracking</h2>
          <p className="text-sm text-gray-500 mt-1">Monitor your team in real time</p>
        </div>
        <div className="bg-green-100 text-green-700 px-3 py-2 rounded-xl text-xs font-bold">
          ACTIVE
        </div>
      </div>

      <div className="bg-gray-100 rounded-3xl h-48 flex items-center justify-center text-center p-6">
        <div>
          <div className="text-5xl mb-3">📍</div>
          <p className="font-bold text-lg">Driver is approaching Gwarinpa</p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-2">
            <Clock size={16} />
            Estimated arrival: 12 mins
          </p>
        </div>
      </div>
    </div>
  );
}
