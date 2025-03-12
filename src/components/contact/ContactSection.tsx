import React from 'react';
import ContactForm from './ContactForm';
import { useScrollTypewriter } from '../../hooks/useScrollTypewriter';

const ContactSection = () => {
  const [text, sectionRef] = useScrollTypewriter({
    texts: [
      'Got Questions?',
      'Tell us about your workflow automation needs. Our team will analyze your requirements and get back to you with a custom solution.'
    ],
    speed: 25
  });

  return (
    <section id="contact" className="py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 ref={sectionRef} className="tech-heading text-3xl md:text-4xl mb-6 animate-fade-in">
          {text[0]}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          {text[1]}
        </p>
        
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;