import React from 'react';
import { Gift } from 'lucide-react';

interface ReferralProps {
  referralCode?: string;
  onShare: () => void;
}

export default function ReferralCard({ referralCode = 'ANCHOR2024', onShare }: ReferralProps) {
  return (
    <div className="bg-yellow-400 rounded-3xl p-5 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-semibold">Rewards Program</p>
          <h2 className="text-2xl font-black mt-1">Invite & Earn</h2>
        </div>
        <div className="text-4xl">🎁</div>
      </div>

      <p className="mt-3 text-sm leading-relaxed mb-4">
        Refer your friends and earn discounts on your next booking.
      </p>

      <div className="bg-black text-yellow-400 rounded-2xl p-4 mb-4 text-center">
        <p className="text-xs text-gray-300 mb-1">Your Referral Code</p>
        <p className="text-2xl font-black font-mono">{referralCode}</p>
      </div>

      <button
        onClick={onShare}
        className="w-full bg-black text-white py-4 rounded-2xl font-bold text-lg hover:bg-gray-900 transition-colors"
      >
        Share Referral Link
      </button>
    </div>
  );
}
