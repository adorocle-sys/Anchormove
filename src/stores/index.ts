import { create } from 'zustand';
import { User, Booking, Quote, Notification } from '@types/index';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>, password: string) => Promise<void>;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      // Firebase login logic will be added here
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  signup: async (user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>, password: string) => {
    set({ isLoading: true, error: null });
    try {
      // Firebase signup logic will be added here
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
    }
  },
  setUser: (user: User | null) => {
    set({ user, isAuthenticated: user !== null });
  },
}));

interface BookingStore {
  bookings: Booking[];
  currentBooking: Booking | null;
  isLoading: boolean;
  error: string | null;
  fetchBookings: () => Promise<void>;
  createBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateBooking: (id: string, updates: Partial<Booking>) => Promise<void>;
  deleteBooking: (id: string) => Promise<void>;
  setCurrentBooking: (booking: Booking | null) => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  bookings: [],
  currentBooking: null,
  isLoading: false,
  error: null,
  fetchBookings: async () => {
    set({ isLoading: true, error: null });
    try {
      // Fetch bookings from Firestore
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
    }
  },
  createBooking: async (booking: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>) => {
    set({ isLoading: true, error: null });
    try {
      // Create booking in Firestore
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
    }
  },
  updateBooking: async (id: string, updates: Partial<Booking>) => {
    set({ isLoading: true, error: null });
    try {
      // Update booking in Firestore
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
    }
  },
  deleteBooking: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      // Delete booking from Firestore
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
    }
  },
  setCurrentBooking: (booking: Booking | null) => {
    set({ currentBooking: booking });
  },
}));

interface QuoteStore {
  quote: Quote | null;
  isLoading: boolean;
  error: string | null;
  generateQuote: (pickupLocation: string, destination: string, serviceType: string, propertySize: string) => Promise<void>;
  clearQuote: () => void;
}

export const useQuoteStore = create<QuoteStore>((set) => ({
  quote: null,
  isLoading: false,
  error: null,
  generateQuote: async (pickupLocation: string, destination: string, serviceType: string, propertySize: string) => {
    set({ isLoading: true, error: null });
    try {
      // Generate quote
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
    }
  },
  clearQuote: () => {
    set({ quote: null });
  },
}));

interface NotificationStore {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Notification) => void;
  markAsRead: (id: string) => void;
  clearNotifications: () => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  unreadCount: 0,
  addNotification: (notification: Notification) => {
    set((state) => ({
      notifications: [notification, ...state.notifications],
      unreadCount: state.unreadCount + 1,
    }));
  },
  markAsRead: (id: string) => {
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
      unreadCount: state.unreadCount - 1,
    }));
  },
  clearNotifications: () => {
    set({ notifications: [], unreadCount: 0 });
  },
}));

interface UIStore {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  showModal: (modalType: string) => void;
  hideModal: () => void;
  activeModal: string | null;
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarOpen: false,
  theme: 'light',
  activeModal: null,
  toggleSidebar: () => {
    set((state) => ({ sidebarOpen: !state.sidebarOpen }));
  },
  setTheme: (theme: 'light' | 'dark') => {
    set({ theme });
  },
  showModal: (modalType: string) => {
    set({ activeModal: modalType });
  },
  hideModal: () => {
    set({ activeModal: null });
  },
}));
