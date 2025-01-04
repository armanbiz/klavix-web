import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-700 transition-colors">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Discover how Klavixai can help you achieve your goals with the power of AI
        </p>
        <button className="bg-white text-blue-600 dark:text-blue-700 px-8 py-4 rounded-full hover:bg-blue-50 dark:hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
          Book Your Free Consultation Now
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default CTA;