import { useState } from 'react';
import { submitToWebhook } from '../services/webhook';
import type { ContactSubmission } from '../services/webhook/types';
import { WebhookError, WebhookNetworkError } from '../services/webhook/errors';

interface FormErrors {
  name?: string;
  email?: string;
  website?: string;
  description?: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    phone: '',
    website: '',
    description: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.website && !/^https?:\/\/.*/.test(formData.website)) {
      newErrors.website = 'Please enter a valid URL starting with http:// or https://';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your workflow';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm() && !isSubmitting) {
      setIsSubmitting(true);
      try {
        await submitToWebhook(formData);
        
        // Clear form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          website: '',
          description: ''
        });
        
        alert('Thank you for your submission! We will get back to you soon.');
      } catch (error) {
        if (error instanceof WebhookNetworkError) {
          alert('Unable to reach our servers. Please check your internet connection and try again.');
        } else {
          alert('Sorry, there was an error submitting your form. Please try again.');
        }
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};