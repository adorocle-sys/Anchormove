import { Booking, PropertySize, ServiceType } from '@types/index';

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

export function formatTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-NG', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(d);
}

export function formatDateTime(date: Date | string): string {
  return `${formatDate(date)} at ${formatTime(date)}`;
}

export function calculateQuote(basePrice: number, propertySize: PropertySize): number {
  const multipliers: Record<PropertySize, number> = {
    selfContain: 1,
    '1bedroom': 1.5,
    '2bedroom': 2,
    '3bedoomDuplex': 3,
  };
  return Math.round(basePrice * multipliers[propertySize]);
}

export function getServiceIcon(serviceType: ServiceType): string {
  const icons: Record<ServiceType, string> = {
    moving: '🚚',
    cleaning: '🧹',
    fumigation: '🛡️',
  };
  return icons[serviceType];
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    accepted: 'bg-blue-100 text-blue-800',
    inProgress: 'bg-purple-100 text-purple-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
}

export function generateReferralCode(): string {
  return 'AM' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validatePhone(phone: string): boolean {
  const regex = /^(\+234|0)[7-9]\d{9}$/;
  return regex.test(phone.replace(/\s/g, ''));
}

export function truncateText(text: string, length: number): string {
  return text.length > length ? `${text.substr(0, length)}...` : text;
}

export function getInitials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}
