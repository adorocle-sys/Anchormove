import React, { useState } from 'react';
import Header from '@components/Header';
import PaymentCard from '@components/PaymentCard';
import Alert from '@components/Alert';

const PENDING_PAYMENTS = [
  {
    id: '1',
    amount: 80000,
    serviceName: 'Deep Cleaning Service',
  },
];

export default function PaymentsPage() {
  const [payments] = useState(PENDING_PAYMENTS);
  const [isProcessing, setIsProcessing] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  const handlePaymentInitiate = () => {
    setIsProcessing(true);
    // Simulate Paystack integration
    setTimeout(() => {
      setIsProcessing(false);
      setAlert({ type: 'success', message: 'Payment processed successfully!' });
      setTimeout(() => setAlert(null), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 pb-24">
      <div className="container-mobile">
        <Header />
        <div className="p-5 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Payments</h2>

            {alert && (
              <Alert
                type={alert.type}
                message={alert.message}
                onClose={() => setAlert(null)}
              />
            )}

            <div className="space-y-4 mt-4">
              {payments.length > 0 ? (
                payments.map((payment) => (
                  <PaymentCard
                    key={payment.id}
                    amount={payment.amount}
                    serviceName={payment.serviceName}
                    onPaymentInitiate={handlePaymentInitiate}
                    isProcessing={isProcessing}
                  />
                ))
              ) : (
                <div className="text-center py-8 card">
                  <p className="text-gray-500">No pending payments</p>
                </div>
              )}
            </div>
          </div>

          {/* Payment History */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Payment History</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b">
                <div>
                  <p className="font-bold">Apartment Relocation</p>
                  <p className="text-sm text-gray-500">20 May 2026</p>
                </div>
                <span className="text-green-600 font-bold">₦72,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
