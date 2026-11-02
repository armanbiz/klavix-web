declare global {
  interface Window {
    vm?: (...args: unknown[]) => void;
  }
}

// Records a newsletter signup in VibeMetrics. Sends no personal data.
export const trackSignup = (): void => {
  try {
    window.vm?.('track', 'signup');
  } catch {
    // Analytics must never break the form.
  }
};
