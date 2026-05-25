import React, { useState, useEffect } from 'react';
import HomePage from '@pages/HomePage';
import BookingsPage from '@pages/BookingsPage';
import PaymentsPage from '@pages/PaymentsPage';
import ProfilePage from '@pages/ProfilePage';
import AuthPage from '@pages/AuthPage';
import BottomNav from '@components/BottomNav';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Check if user is already logged in
    const savedAuth = localStorage.getItem('isAuthenticated');
    if (savedAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <AuthPage
        onAuthSuccess={() => {
          localStorage.setItem('isAuthenticated', 'true');
          setIsAuthenticated(true);
        }}
      />
    );
  }

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'bookings':
        return <BookingsPage />;
      case 'payments':
        return <PaymentsPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-50">
      {renderPage()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
