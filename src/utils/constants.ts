export const SERVICES = [
  {
    id: '1',
    title: 'Moving Services',
    description: 'Home and office relocation across Abuja and Nigeria.',
    category: 'moving' as const,
    basePrice: 50000,
    icon: '🚚',
  },
  {
    id: '2',
    title: 'Cleaning Services',
    description: 'Deep cleaning for apartments, duplexes, and offices.',
    category: 'cleaning' as const,
    basePrice: 30000,
    icon: '🧹',
  },
  {
    id: '3',
    title: 'Fumigation',
    description: 'Professional pest control and fumigation services.',
    category: 'fumigation' as const,
    basePrice: 20000,
    icon: '🛡️',
  },
];

export const PROPERTY_SIZES = [
  { id: 'selfContain', label: 'Self Contain', multiplier: 1 },
  { id: '1bedroom', label: '1 Bedroom', multiplier: 1.5 },
  { id: '2bedroom', label: '2 Bedroom', multiplier: 2 },
  { id: '3bedoomDuplex', label: '3 Bedroom Duplex', multiplier: 3 },
];

export const BOOKING_STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  accepted: 'bg-blue-100 text-blue-800',
  inProgress: 'bg-purple-100 text-purple-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
};

export const PAYMENT_STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800',
  failed: 'bg-red-100 text-red-800',
  refunded: 'bg-blue-100 text-blue-800',
};

export const SUPPORT_PHONE = '07078717780';
export const SUPPORT_WHATSAPP = 'https://wa.me/2347078717780';

export const API_ENDPOINTS = {
  BASE_URL: import.meta.env.VITE_APP_URL || 'http://localhost:3000',
  AUTH: '/api/auth',
  USERS: '/api/users',
  SERVICES: '/api/services',
  BOOKINGS: '/api/bookings',
  PAYMENTS: '/api/payments',
  TRACKING: '/api/tracking',
  QUOTES: '/api/quotes',
  DRIVERS: '/api/drivers',
};
