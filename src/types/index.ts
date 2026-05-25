// User Types
export interface User {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  profileImage?: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Service Types
export type ServiceType = 'moving' | 'cleaning' | 'fumigation';
export type PropertySize = 'selfContain' | '1bedroom' | '2bedroom' | '3bedoomDuplex';

export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceType;
  basePrice: number;
  image?: string;
  icon?: string;
}

// Booking Types
export type BookingStatus = 'pending' | 'accepted' | 'inProgress' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  serviceName: string;
  status: BookingStatus;
  pickupLocation: string;
  destination?: string;
  propertySize: PropertySize;
  scheduledDate: Date;
  estimatedPrice: number;
  actualPrice?: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Quote Types
export interface QuoteRequest {
  pickupLocation: string;
  destination?: string;
  serviceType: ServiceType;
  propertySize: PropertySize;
}

export interface Quote {
  id: string;
  requestId: string;
  estimatedPrice: number;
  priceBreakdown?: Record<string, number>;
  validUntil: Date;
  createdAt: Date;
}

// Payment Types
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';
export type PaymentMethod = 'card' | 'transfer' | 'wallet';

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  status: PaymentStatus;
  method: PaymentMethod;
  reference?: string;
  transactionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Live Tracking Types
export interface Location {
  latitude: number;
  longitude: number;
  timestamp: Date;
}

export interface LiveTracking {
  id: string;
  bookingId: string;
  driverId: string;
  currentLocation: Location;
  estimatedArrival: Date;
  status: 'enroute' | 'arrived' | 'completed';
}

// Driver Types
export interface Driver {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  profileImage?: string;
  licenseNumber: string;
  vehicleInfo?: {
    make: string;
    model: string;
    plate: string;
    color: string;
  };
  rating: number;
  totalTrips: number;
  isAvailable: boolean;
  currentLocation?: Location;
}

// Admin Dashboard Types
export interface DashboardStats {
  totalBookings: number;
  totalRevenue: number;
  totalUsers: number;
  totalDrivers: number;
  pendingBookings: number;
  completedBookings: number;
}

// Notification Types
export type NotificationType = 'booking' | 'payment' | 'tracking' | 'message';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

// Referral Types
export interface Referral {
  id: string;
  referrerId: string;
  referreeId?: string;
  code: string;
  discountPercentage: number;
  usageCount: number;
  maxUsage?: number;
  expiresAt?: Date;
  createdAt: Date;
}
