import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Service } from '@types/index';

interface ServiceCardProps {
  service: Service;
  onBookNow: (serviceId: string) => void;
}

export default function ServiceCard({ service, onBookNow }: ServiceCardProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{service.icon}</span>
          <div>
            <h3 className="font-bold text-xl">{service.title}</h3>
            <p className="text-gray-500 text-xs">Available</p>
          </div>
        </div>
        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
          Available
        </span>
      </div>
      <p className="text-gray-600 mt-3 text-sm leading-relaxed">{service.description}</p>
      <div className="flex items-center justify-between mt-5">
        <span className="font-bold text-lg">₦{service.basePrice.toLocaleString()}</span>
        <button
          onClick={() => onBookNow(service.id)}
          className="btn-primary"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
