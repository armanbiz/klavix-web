import { WebhookError, WebhookNetworkError } from './errors';
import type { ContactSubmission } from './types';

const WEBHOOK_URL = 'https://hook.eu2.make.com/3da07g2jua4dg1kqmc5gtlo92pue3sw7';

export const submitToWebhook = async (data: ContactSubmission): Promise<void> => {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new WebhookError('Failed to submit form');
    }
  } catch (error) {
    if (error instanceof TypeError) {
      throw new WebhookNetworkError(error);
    }
    throw error;
  }
};