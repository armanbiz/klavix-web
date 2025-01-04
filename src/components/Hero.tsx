import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full">
        <h1 className="tech-heading text-[12vw] leading-none mb-4 animate-fade-in">
          <span className="gradient-text">SOVEREIGN</span>
          <br />
          SUPER AI
        </h1>
        <div className="flex flex-col md:flex-row gap-8 mt-12 animate-slide-up">
          <div className="flex-1">
            <p className="text-lg text-gray-400 font-light">
              Next-generation AI solutions for enterprise automation and intelligence.
              <span className="block mt-4 text-sm font-medium text-blue-400">// Powered by advanced machine learning</span>
            </p>
          </div>
          <div className="flex-1">
            <button className="nav-button text-lg group">
              Get Started 
              <span className="inline-block ml-2 transform transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;