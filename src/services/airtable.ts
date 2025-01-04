import { z } from 'zod';

// Environment validation schema
const envSchema = z.object({
  VITE_AIRTABLE_API_KEY: z.string().optional(),
  VITE_AIRTABLE_BASE_ID: z.string().optional(),
});

const env = envSchema.parse({
  VITE_AIRTABLE_API_KEY: import.meta.env.VITE_AIRTABLE_API_KEY,
  VITE_AIRTABLE_BASE_ID: import.meta.env.VITE_AIRTABLE_BASE_ID,
});

// Check if we're in development mode
const isDevelopment = import.meta.env.DEV;

interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  website: string;
  description: string;
}

export const submitToAirtable = async (data: ContactSubmission): Promise<void> => {
  // In development, if credentials are missing, log the submission and return
  if (isDevelopment && (!env.VITE_AIRTABLE_API_KEY || !env.VITE_AIRTABLE_BASE_ID)) {
    console.log('Development mode - Form submission data:', data);
    return;
  }

  // In production, validate credentials
  if (!env.VITE_AIRTABLE_API_KEY || !env.VITE_AIRTABLE_BASE_ID) {
    throw new Error('Airtable credentials are not configured');
  }

  const TABLE_NAME = 'Klavix Website Lead Capture';

  try {
    const response = await fetch(`https://api.airtable.com/v0/${env.VITE_AIRTABLE_BASE_ID}/${TABLE_NAME}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.VITE_AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        records: [{
          fields: {
            Name: data.name,
            Email: data.email,
            Phone: data.phone || '',
            Website: data.website || '',
            Description: data.description,
            'Submission Date': new Date().toISOString(),
            Status: 'Todo'
          }
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to submit form');
    }
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Network error or Airtable is unreachable:', error);
    } else {
      console.error('Airtable submission error:', error);
    }
    throw error;
  }
};