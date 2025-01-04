import React from 'react';
import ServiceCard from './services/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Expertise</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;