import React from 'react';

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <p className="mt-4 text-gray-600">Loading content...</p>
    </div>
  );
}

export default LoadingSpinner;