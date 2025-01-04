export class AirtableError extends Error {
  constructor(message: string, public originalError?: unknown) {
    super(message);
    this.name = 'AirtableError';
  }
}

export class AirtableConfigError extends AirtableError {
  constructor() {
    super('Airtable credentials are not configured');
    this.name = 'AirtableConfigError';
  }
}

export class AirtableNetworkError extends AirtableError {
  constructor(error: unknown) {
    super('Network error or Airtable is unreachable', error);
    this.name = 'AirtableNetworkError';
  }
}