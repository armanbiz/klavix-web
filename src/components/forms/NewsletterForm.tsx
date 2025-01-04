import React from 'react';
import { Send } from 'lucide-react';
import { useNewsletterForm } from '../../hooks/useNewsletterForm';
import FormInput from './FormInput';

const NewsletterForm = () => {
  const { formData, errors, handleChange, handleSubmit } = useNewsletterForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto bg-white/5 p-8 rounded-xl border border-white/10">
      <div className="grid grid-cols-2 gap-4">
        <FormInput
          name="firstName"
          label="First Name"
          value={formData.firstName}
          error={errors.firstName}
          onChange={handleChange}
        />
        <FormInput
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          error={errors.lastName}
          onChange={handleChange}
        />
      </div>
      
      <FormInput
        name="email"
        type="email"
        label="Email Address"
        value={formData.email}
        error={errors.email}
        onChange={handleChange}
      />
      
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group font-medium"
      >
        Subscribe to Newsletter
        <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
};

export default NewsletterForm;