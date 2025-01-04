import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              alt="Team Collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Who We Are</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Klavixai is a leading AI automation agency specializing in delivering cutting-edge solutions 
              tailored to your unique business needs. Our team of experts combines deep technical expertise 
              with industry knowledge to drive meaningful results for our clients.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">100+</h4>
                <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">95%</h4>
                <p className="text-gray-600 dark:text-gray-300">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;