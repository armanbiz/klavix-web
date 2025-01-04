import React from 'react';
import { MEETING_TYPES } from '../../config/calendly';
import CalendlyButton from '../common/CalendlyButton';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="max-w-7xl w-full space-y-8 sm:space-y-12">
        <div className="space-y-4 sm:space-y-6 animate-fade-in">
          <h1 className="tech-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
            <span className="gradient-text">Revolutionize Your Business</span>
            <br />
            <span className="text-white/90">with AI Automation</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl">
            Save hours weekly, boost efficiency, and deliver better customer experiences—without the extra overhead.
          </p>
        </div>
        
        <div className="animate-slide-up">
          <CalendlyButton
            meetingUrl={MEETING_TYPES.DEMO}
            className="nav-button text-lg bg-blue-600 border-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto justify-center"
          >
            Get a Free Demo
          </CalendlyButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;