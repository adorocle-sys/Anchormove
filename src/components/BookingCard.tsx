import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { Booking } from '@types/index';
import { formatDate, getStatusColor } from '@utils/helpers';

interface BookingCardProps {
  booking: Booking;
  onViewDetails: (bookingId: string) => void;
}

export default function BookingCard({ booking, onViewDetails }: BookingCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-shadow">
      <div className="flex-1">
        <h3 className="font-bold text-sm">{booking.serviceName}</h3>
        <p className="text-sm text-gray-500 mt-1">{formatDate(booking.scheduledDate)}</p>
      </div>
      <div className="flex items-center gap-3">
        <span className={`text-xs font-bold px-3 py-2 rounded-full ${getStatusColor(booking.status)}`}>
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
        </span>
        <button
          onClick={() => onViewDetails(booking.id)}
          className="text-gray-600 hover:text-black transition-colors"
        >
          →
        </button>
      </div>
    </div>
  );
}
