import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Klavixai transformed our business operations with their AI solutions. The results exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
  },
  {
    quote: "The team's expertise in AI automation helped us achieve remarkable efficiency improvements.",
    author: "Michael Chen",
    role: "CTO, InnovateX",
  },
  {
    quote: "Working with Klavixai was a game-changer for our company's digital transformation journey.",
    author: "Emma Davis",
    role: "Operations Director, FutureScale",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
          What Our Clients Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl relative">
              <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;