import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'black' | 'yellow' | 'white';
  message?: string;
}

export default function LoadingSpinner({
  size = 'md',
  color = 'black',
  message,
}: LoadingSpinnerProps) {
  const sizeClass = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }[size];

  const colorClass = {
    black: 'border-black',
    yellow: 'border-yellow-400',
    white: 'border-white',
  }[color];

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className={`${sizeClass} border-4 ${colorClass} border-t-transparent rounded-full animate-spin`}
      />
      {message && <p className="text-sm text-gray-600">{message}</p>}
    </div>
  );
}
