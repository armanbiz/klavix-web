import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Add explicit dimensions and error handling */}
      <img 
        src="/Klavix_logo.svg" 
        alt="Klavix Logo" 
        className="h-8 w-8"
        onError={(e) => {
          console.error('Logo failed to load:', e);
          // Optionally set a fallback image
          // e.target.src = '/fallback-logo.svg';
        }}
      />
      <span className="text-xl tech-heading gradient-text">KLAVIX</span>
    </div>
  );
};

export default Logo;