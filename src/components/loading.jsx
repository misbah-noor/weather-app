import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="h-12 w-12 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;