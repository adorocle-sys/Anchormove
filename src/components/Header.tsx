import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { SUPPORT_PHONE, SUPPORT_WHATSAPP } from '@utils/constants';

export default function Header() {
  return (
    <div className="bg-black text-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AnchorMove</h1>
          <p className="text-gray-300 mt-1 text-sm">Moving • Cleaning • Fumigation</p>
        </div>
        <div className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold text-sm">
          Abuja
        </div>
      </div>
    </div>
  );
}
