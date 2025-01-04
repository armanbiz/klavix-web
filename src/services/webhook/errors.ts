export class WebhookError extends Error {
  constructor(message: string, public originalError?: unknown) {
    super(message);
    this.name = 'WebhookError';
  }
}

export class WebhookNetworkError extends WebhookError {
  constructor(error: unknown) {
    super('Network error: Unable to reach the server', error);
    this.name = 'WebhookNetworkError';
  }
}