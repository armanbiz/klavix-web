import React from 'react';
import HeroButtons from './HeroButtons';

const HeroContent = () => {
  return (
    <div className="flex-1 space-y-8 animate-slide-up">
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
        Revolutionize Your Workflow with{' '}
        <span className="text-blue-600 dark:text-blue-400">AI Automation</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Empowering businesses with intelligent, scalable solutions.
      </p>
      <HeroButtons />
    </div>
  );
};

export default HeroContent;