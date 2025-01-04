export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  website: string;
  description: string;
}

export interface AirtableRecord {
  fields: {
    Name: string;
    Email: string;
    Phone: string;
    Website: string;
    Description: string;
    'Submission Date': string;
    Status: string;
  };
}