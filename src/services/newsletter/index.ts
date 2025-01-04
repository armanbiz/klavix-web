import { NEWSLETTER_WEBHOOK_URL } from './config';
import type { NewsletterSubscription, NewsletterSubmission } from './types';

export const submitNewsletterSubscription = async (data: NewsletterSubscription): Promise<void> => {
  const submission: NewsletterSubmission = {
    ...data,
    type: 'newsletter_subscription',
    submittedAt: new Date().toISOString()
  };

  const response = await fetch(NEWSLETTER_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(submission)
  });

  if (!response.ok) {
    throw new Error('Failed to submit newsletter subscription');
  }
};