declare global {
  interface Window {
    vm?: (...args: unknown[]) => void;
  }
}

// Records a successful newsletter signup (signup + activation) in VibeMetrics.
// Call only after the subscription request succeeds. Sends no personal data.
export const trackSignup = (): void => {
  try {
    window.vm?.('track', 'signup');
    window.vm?.('track', 'activation');
  } catch {
    // Analytics must never break the form.
  }
};
