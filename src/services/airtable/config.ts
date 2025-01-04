import { z } from 'zod';

const envSchema = z.object({
  VITE_AIRTABLE_API_KEY: z.string().optional(),
  VITE_AIRTABLE_BASE_ID: z.string().optional(),
});

export const config = {
  env: envSchema.parse({
    VITE_AIRTABLE_API_KEY: import.meta.env.VITE_AIRTABLE_API_KEY,
    VITE_AIRTABLE_BASE_ID: import.meta.env.VITE_AIRTABLE_BASE_ID,
  }),
  isDevelopment: import.meta.env.DEV,
  tableName: 'Klavix Website Lead Capture',
  apiUrl: 'https://api.airtable.com/v0',
};