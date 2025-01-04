import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="tech-heading text-3xl md:text-4xl mb-6 animate-fade-in">
          Got Questions?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Tell us about your workflow automation needs. Our team will analyze your requirements and get back to you with a custom solution.
        </p>
        
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;