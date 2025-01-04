import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "We reduced customer response time by 85% and saved 20+ hours weekly using Klavixai's automation.",
    author: "Sarah Chen",
    role: "Head of Operations, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "The AI-powered CRM transformed our lead conversion rate. We saw a 40% increase in just two months.",
    author: "Michael Rodriguez",
    role: "Sales Director, GrowthForce",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "Setup was seamless, and the ROI was immediate. Our team can finally focus on strategic tasks.",
    author: "Emily Watson",
    role: "CEO, InnovateX",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="tech-heading text-3xl md:text-4xl text-center mb-16">
          Trusted by Industry Leaders
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              data-scroll
            >
              <Quote className="h-8 w-8 text-blue-500 mb-4" />
              <p className="text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;