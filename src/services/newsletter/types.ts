export interface NewsletterSubscription {
  name: string;
  email: string;
}

export interface NewsletterSubmission extends NewsletterSubscription {
  type: 'newsletter_subscription';
  submittedAt: string;
}