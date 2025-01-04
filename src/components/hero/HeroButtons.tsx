import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="group bg-blue-600 text-white px-8 py-4 rounded-full smooth-all hover:bg-blue-700 hover:shadow-lg flex items-center justify-center gap-2">
        Schedule Consultation
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 smooth-transform" />
      </button>
      <button className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full smooth-all hover:bg-blue-50 dark:hover:bg-gray-800">
        Learn More
      </button>
    </div>
  );
};

export default HeroButtons;