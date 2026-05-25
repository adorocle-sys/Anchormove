import React, { useState } from 'react';
import Header from '@components/Header';
import ServiceCard from '@components/ServiceCard';
import QuoteCalculator from '@components/QuoteCalculator';
import LiveTracking from '@components/LiveTracking';
import ReferralCard from '@components/ReferralCard';
import SupportSection from '@components/SupportSection';
import { SERVICES } from '@utils/constants';

export default function HomePage() {
  const [quote, setQuote] = useState<number | null>(null);

  const handleBookNow = (serviceId: string) => {
    const service = SERVICES.find((s) => s.id === serviceId);
    console.log('Booking:', service?.title);
    // Navigate to booking page or open booking modal
  };

  const handleCalculateQuote = (calculatedQuote: number) => {
    setQuote(calculatedQuote);
  };

  const handleShareReferral = () => {
    const referralLink = `${window.location.origin}?ref=ANCHOR2024`;
    if (navigator.share) {
      navigator.share({
        title: 'AnchorMove - Professional Home Services',
        text: 'Join me on AnchorMove and get discounts on moving, cleaning, and fumigation services!',
        url: referralLink,
      });
    } else {
      navigator.clipboard.writeText(referralLink);
      alert('Referral link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 pb-24">
      <div className="container-mobile">
        {/* Header Section */}
        <Header />

        {/* Hero Banner */}
        <div className="p-6 bg-white">
          <div className="bg-yellow-400 text-black rounded-3xl p-5 shadow-lg">
            <p className="text-sm font-semibold">Professional Home Services</p>
            <h2 className="text-3xl font-black mt-2 leading-tight">Book Trusted Services Instantly</h2>
            <p className="mt-3 text-sm">Get moving, cleaning and fumigation experts at your doorstep.</p>
            <button className="mt-5 bg-black text-white px-5 py-4 rounded-2xl font-semibold w-full text-lg hover:bg-gray-900 transition-colors">
              Get Instant Quote
            </button>
          </div>
        </div>

        {/* Services Section */}
        <div className="p-5 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Our Services</h2>
              <button className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {SERVICES.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onBookNow={handleBookNow}
                />
              ))}
            </div>
          </div>

          {/* Quote Calculator */}
          <QuoteCalculator onCalculate={handleCalculateQuote} />

          {/* Live Tracking */}
          <LiveTracking />

          {/* Referral Card */}
          <ReferralCard onShare={handleShareReferral} />

          {/* Support Section */}
          <SupportSection />
        </div>
      </div>
    </div>
  );
}
