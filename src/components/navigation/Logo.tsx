import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src="/Klavix_logo.svg" alt="Klavix Logo" className="h-8 w-auto" />
      <span className="text-xl tech-heading gradient-text">KLAVIX</span>
    </div>
  );
};

export default Logo;