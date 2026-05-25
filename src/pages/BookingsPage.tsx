import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '@components/Header';
import BookingCard from '@components/BookingCard';
import Alert from '@components/Alert';
import { Booking } from '@types/index';

const MOCK_BOOKINGS: Booking[] = [
  {
    id: '1',
    userId: 'user1',
    serviceId: '2',
    serviceName: '2 Bedroom Deep Cleaning',
    status: 'inProgress',
    pickupLocation: 'Gwarinpa Estate',
    propertySize: '2bedroom',
    scheduledDate: new Date(2026, 4, 26),
    estimatedPrice: 60000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    userId: 'user1',
    serviceId: '1',
    serviceName: 'Apartment Relocation',
    status: 'completed',
    pickupLocation: 'Garki',
    destination: 'Wuse 2',
    propertySize: '1bedroom',
    scheduledDate: new Date(2026, 4, 20),
    estimatedPrice: 75000,
    actualPrice: 72000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function BookingsPage() {
  const [bookings] = useState<Booking[]>(MOCK_BOOKINGS);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  const handleViewDetails = (bookingId: string) => {
    const booking = bookings.find((b) => b.id === bookingId);
    setSelectedBooking(booking || null);
  };

  const handleCancel = (bookingId: string) => {
    setAlert({ type: 'success', message: 'Booking cancelled successfully' });
    setTimeout(() => setAlert(null), 3000);
  };

  if (selectedBooking) {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900 pb-24">
        <div className="container-mobile">
          <Header />
          <div className="p-5 space-y-6">
            <button
              onClick={() => setSelectedBooking(null)}
              className="flex items-center gap-2 text-black font-semibold mb-4 hover:text-gray-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Bookings
            </button>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4">{selectedBooking.serviceName}</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm">Status</p>
                  <p className="font-bold mt-1 capitalize">{selectedBooking.status}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Pickup Location</p>
                  <p className="font-bold mt-1">{selectedBooking.pickupLocation}</p>
                </div>
                {selectedBooking.destination && (
                  <div>
                    <p className="text-gray-600 text-sm">Destination</p>
                    <p className="font-bold mt-1">{selectedBooking.destination}</p>
                  </div>
                )}
                <div>
                  <p className="text-gray-600 text-sm">Scheduled Date</p>
                  <p className="font-bold mt-1">{new Date(selectedBooking.scheduledDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Estimated Price</p>
                  <p className="font-bold text-xl mt-1">₦{selectedBooking.estimatedPrice.toLocaleString()}</p>
                </div>
              </div>

              {selectedBooking.status === 'pending' && (
                <button
                  onClick={() => handleCancel(selectedBooking.id)}
                  className="w-full mt-6 border border-red-300 text-red-600 py-3 rounded-2xl font-semibold hover:bg-red-50 transition-colors"
                >
                  Cancel Booking
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 pb-24">
      <div className="container-mobile">
        <Header />
        <div className="p-5 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Recent Bookings</h2>
              <button className="text-sm text-gray-500 font-semibold hover:text-gray-900 transition-colors">
                History
              </button>
            </div>

            {alert && (
              <Alert
                type={alert.type}
                message={alert.message}
                onClose={() => setAlert(null)}
              />
            )}

            <div className="space-y-3 mt-4">
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <BookingCard
                    key={booking.id}
                    booking={booking}
                    onViewDetails={handleViewDetails}
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No bookings yet. Book a service to get started!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
