import React, { useState } from 'react';
import { CreditCard, AlertCircle } from 'lucide-react';

interface PaymentCardProps {
  amount: number;
  serviceName: string;
  onPaymentInitiate: () => void;
  isProcessing?: boolean;
}

export default function PaymentCard({
  amount,
  serviceName,
  onPaymentInitiate,
  isProcessing = false,
}: PaymentCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold">Payments</h2>
          <p className="text-sm text-gray-500 mt-1">Secure online transactions</p>
        </div>
        <div className="bg-black text-white px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1">
          <CreditCard size={14} />
          PAYSTACK
        </div>
      </div>

      <div className="space-y-3">
        <div className="border rounded-2xl p-4 flex items-center justify-between bg-gray-50">
          <div>
            <p className="font-bold">{serviceName}</p>
            <p className="text-sm text-gray-500 mt-1">Pending payment</p>
          </div>
          <p className="font-black text-lg">₦{amount.toLocaleString()}</p>
        </div>

        <button
          onClick={onPaymentInitiate}
          disabled={isProcessing}
          className="w-full btn-primary font-bold text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? 'Processing...' : 'Pay Securely'}
        </button>
      </div>
    </div>
  );
}
