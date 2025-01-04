import { config } from './config';
import { AirtableConfigError, AirtableNetworkError, AirtableError } from './errors';
import type { ContactSubmission, AirtableRecord } from './types';

const createAirtableRecord = (data: ContactSubmission): AirtableRecord => ({
  fields: {
    Name: data.name,
    Email: data.email,
    Phone: data.phone || '',
    Website: data.website || '',
    Description: data.description,
    'Submission Date': new Date().toISOString(),
    Status: 'Todo'
  }
});

export const submitToAirtable = async (data: ContactSubmission): Promise<void> => {
  // In development, if credentials are missing, log the submission and return
  if (config.isDevelopment && (!config.env.VITE_AIRTABLE_API_KEY || !config.env.VITE_AIRTABLE_BASE_ID)) {
    console.log('Development mode - Form submission data:', data);
    return;
  }

  // In production, validate credentials
  if (!config.env.VITE_AIRTABLE_API_KEY || !config.env.VITE_AIRTABLE_BASE_ID) {
    throw new AirtableConfigError();
  }

  try {
    const response = await fetch(
      `${config.apiUrl}/${config.env.VITE_AIRTABLE_BASE_ID}/${config.tableName}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.env.VITE_AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          records: [createAirtableRecord(data)]
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new AirtableError(errorData.error?.message || 'Failed to submit form');
    }
  } catch (error) {
    if (error instanceof TypeError) {
      throw new AirtableNetworkError(error);
    }
    throw error;
  }
};