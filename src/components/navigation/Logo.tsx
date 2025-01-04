import React from 'react';
import { Brain } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Brain className="h-6 w-6 text-blue-500" />
      <span className="text-xl tech-heading gradient-text">KLAVIX</span>
    </div>
  );
};

export default Logo;