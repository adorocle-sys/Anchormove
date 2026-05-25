import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { SUPPORT_PHONE, SUPPORT_WHATSAPP } from '@utils/constants';

export default function SupportSection() {
  const handleWhatsApp = () => {
    window.open(SUPPORT_WHATSAPP, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${SUPPORT_PHONE}`;
  };

  return (
    <div className="bg-black text-white rounded-3xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold">Need Help?</h2>
          <p className="text-gray-300 mt-2 text-sm">Our support team is available 24/7.</p>
        </div>
        <div className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold text-sm">
          LIVE
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <button
          onClick={handleWhatsApp}
          className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-bold text-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </button>

        <button
          onClick={handleCall}
          className="w-full border border-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
        >
          <Phone size={20} />
          Call {SUPPORT_PHONE}
        </button>
      </div>
    </div>
  );
}
