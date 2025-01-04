import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { submitNewsletterSubscription } from '../../services/newsletter';
import type { NewsletterSubscription } from '../../services/newsletter/types';

interface NewsletterFormProps {
  onSuccess?: () => void;
}

const NewsletterForm = ({ onSuccess }: NewsletterFormProps) => {
  const [formData, setFormData] = useState<NewsletterSubscription>({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitNewsletterSubscription(formData);
      alert('Thank you for subscribing!');
      onSuccess?.();
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? 'Subscribing...' : (
          <>
            Subscribe
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default NewsletterForm;