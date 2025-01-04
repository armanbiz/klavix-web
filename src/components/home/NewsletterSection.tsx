import React from 'react';
import NewsletterForm from '../forms/NewsletterForm';

const NewsletterSection = () => {
  return (
    <section className="py-20 px-6 border-t border-white/10">
      <div className="max-w-2xl mx-auto text-center" data-scroll>
        <h2 className="tech-heading text-3xl mb-6 text-white">
          Stay Updated with AI Innovations
        </h2>
        <p className="text-gray-300 mb-12 text-lg">
          Get weekly insights on AI automation, industry trends, and tips to scale your business.
        </p>
        
        <NewsletterForm />
        
        <p className="text-sm text-gray-400 mt-6">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;