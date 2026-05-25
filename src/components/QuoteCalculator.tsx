import React, { useState } from 'react';
import { Zap, AlertCircle } from 'lucide-react';
import { SERVICES, PROPERTY_SIZES } from '@utils/constants';
import { calculateQuote } from '@utils/helpers';

interface QuoteCalculatorProps {
  onCalculate: (quote: number) => void;
}

export default function QuoteCalculator({ onCalculate }: QuoteCalculatorProps) {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    destination: '',
    serviceType: '',
    propertySize: '',
  });
  const [quote, setQuote] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    setError('');

    if (!formData.pickupLocation || !formData.serviceType || !formData.propertySize) {
      setError('Please fill in all required fields');
      return;
    }

    const service = SERVICES.find((s) => s.id === formData.serviceType);
    if (!service) return;

    const calculatedQuote = calculateQuote(
      service.basePrice,
      formData.propertySize as any
    );
    setQuote(calculatedQuote);
    onCalculate(calculatedQuote);
  };

  return (
    <div className="bg-gray-50 rounded-3xl p-5 border border-gray-200">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold">Smart Quote</h2>
          <p className="text-gray-500 text-sm mt-1">AI-powered estimate calculator</p>
        </div>
        <div className="bg-black text-white px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1">
          <Zap size={16} />
          FAST
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
          <AlertCircle size={16} className="text-red-600" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <div className="mt-5 space-y-4">
        <input
          type="text"
          name="pickupLocation"
          placeholder="Pickup Location"
          value={formData.pickupLocation}
          onChange={handleChange}
          className="input-field"
        />

        <input
          type="text"
          name="destination"
          placeholder="Destination (optional)"
          value={formData.destination}
          onChange={handleChange}
          className="input-field"
        />

        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="input-field"
        >
          <option value="">Select Service</option>
          {SERVICES.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>

        <select
          name="propertySize"
          value={formData.propertySize}
          onChange={handleChange}
          className="input-field"
        >
          <option value="">Property Size</option>
          {PROPERTY_SIZES.map((size) => (
            <option key={size.id} value={size.id}>
              {size.label}
            </option>
          ))}
        </select>

        {quote && (
          <div className="bg-white rounded-lg p-4 border border-green-200 text-center">
            <p className="text-gray-600 text-sm mb-1">Estimated Price</p>
            <p className="text-3xl font-bold text-green-600">₦{quote.toLocaleString()}</p>
          </div>
        )}

        <button
          onClick={handleCalculate}
          className="w-full btn-secondary font-black text-lg py-4"
        >
          Calculate Quote
        </button>
      </div>
    </div>
  );
}
