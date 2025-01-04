import React from 'react';

const HeroImage = () => {
  return (
    <div className="flex-1 animate-scale-in">
      <img
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
        alt="AI Automation"
        className="rounded-lg shadow-2xl smooth-transform hover:scale-[1.02]"
      />
    </div>
  );
};

export default HeroImage;