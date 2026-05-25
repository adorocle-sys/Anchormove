import React, { useState } from 'react';
import { LogOut, Edit2, Bell } from 'lucide-react';
import Header from '@components/Header';
import Alert from '@components/Alert';
import { getInitials } from '@utils/helpers';

const MOCK_USER = {
  id: '1',
  email: 'user@example.com',
  phone: '+2347078717780',
  firstName: 'Chukwu',
  lastName: 'Okafor',
  address: 'Gwarinpa Estate, Abuja',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default function ProfilePage() {
  const [user] = useState(MOCK_USER);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleLogout = () => {
    setAlert({ type: 'success', message: 'Logged out successfully' });
    // Handle logout
  };

  const handleSaveProfile = () => {
    setAlert({ type: 'success', message: 'Profile updated successfully' });
    setIsEditing(false);
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 pb-24">
      <div className="container-mobile">
        <Header />
        <div className="p-5 space-y-6">
          {alert && (
            <Alert
              type={alert.type}
              message={alert.message}
              onClose={() => setAlert(null)}
            />
          )}

          {/* Profile Header */}
          <div className="card text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              {getInitials(user.firstName, user.lastName)}
            </div>
            <h2 className="text-2xl font-bold mt-4">{user.firstName} {user.lastName}</h2>
            <p className="text-gray-500 mt-2">{user.email}</p>
          </div>

          {/* Profile Info */}
          <div className="card space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Personal Information</h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 text-black font-semibold hover:text-gray-600 transition-colors"
              >
                <Edit2 size={18} />
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <input
                  type="text"
                  defaultValue={user.firstName}
                  placeholder="First Name"
                  className="input-field"
                />
                <input
                  type="text"
                  defaultValue={user.lastName}
                  placeholder="Last Name"
                  className="input-field"
                />
                <input
                  type="email"
                  defaultValue={user.email}
                  placeholder="Email"
                  className="input-field"
                />
                <input
                  type="tel"
                  defaultValue={user.phone}
                  placeholder="Phone"
                  className="input-field"
                />
                <input
                  type="text"
                  defaultValue={user.address || ''}
                  placeholder="Address"
                  className="input-field"
                />
                <button
                  onClick={handleSaveProfile}
                  className="w-full btn-primary font-bold py-3"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <p className="font-bold mt-1">{user.email}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Phone</p>
                  <p className="font-bold mt-1">{user.phone}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Address</p>
                  <p className="font-bold mt-1">{user.address || 'Not provided'}</p>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <div className="card space-y-3">
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="flex items-center gap-2 font-semibold">
                <Bell size={18} />
                Notifications
              </span>
              <span>›</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="font-semibold">Privacy & Security</span>
              <span>›</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="font-semibold">Help & Support</span>
              <span>›</span>
            </button>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 border border-red-200 py-4 rounded-2xl font-bold hover:bg-red-100 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
