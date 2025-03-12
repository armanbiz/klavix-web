import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import FormInput from '../forms/FormInput';
import FormTextarea from '../forms/FormTextarea';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Loader2 } from 'lucide-react';

const ContactForm = () => {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useContactForm();
  const [formRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit} 
      className={`space-y-6 max-w-2xl mx-auto bg-white/5 p-8 rounded-xl border border-white/10 transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <FormInput
          name="name"
          label="Name"
          value={formData.name}
          error={errors.name}
          onChange={handleChange}
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <FormInput
          name="phone"
          type="tel"
          label="Phone (Optional)"
          value={formData.phone}
          onChange={handleChange}
        />
        <FormInput
          name="website"
          type="url"
          label="Website"
          value={formData.website}
          error={errors.website}
          onChange={handleChange}
        />
      </div>
      
      <FormTextarea
        name="description"
        label="Describe your workflow"
        value={formData.description}
        error={errors.description}
        onChange={handleChange}
        placeholder="Tell us about the processes you'd like to automate..."
      />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <span className="inline-block transform transition-transform group-hover:translate-x-1">→</span>
          </>
        )}
      </button>
    </form>
  );
}

export default ContactForm;