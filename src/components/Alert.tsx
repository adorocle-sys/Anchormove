import React from 'react';
import { AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  onClose?: () => void;
}

export default function Alert({ type, message, onClose }: AlertProps) {
  const config = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: CheckCircle,
      iconColor: 'text-green-600',
      textColor: 'text-green-700',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: XCircle,
      iconColor: 'text-red-600',
      textColor: 'text-red-700',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: AlertCircle,
      iconColor: 'text-yellow-600',
      textColor: 'text-yellow-700',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: Clock,
      iconColor: 'text-blue-600',
      textColor: 'text-blue-700',
    },
  };

  const { bg, border, icon: Icon, iconColor, textColor } = config[type];

  return (
    <div className={`${bg} border ${border} rounded-lg p-4 flex items-center justify-between animate-slide-in`}>
      <div className="flex items-center gap-3">
        <Icon className={`${iconColor} flex-shrink-0`} size={20} />
        <p className={`${textColor} text-sm font-medium`}>{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className={`${textColor} hover:opacity-75 transition-opacity`}
        >
          ✕
        </button>
      )}
    </div>
  );
}
