// Animation timing constants
export const TIMING = {
  FAST: 200,
  MEDIUM: 300,
  SLOW: 500,
} as const;

// Easing functions
export const EASING = {
  SMOOTH: 'cubic-bezier(0.4, 0, 0.2, 1)',
  BOUNCE: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  SOFT: 'cubic-bezier(0.4, 0, 0.6, 1)',
} as const;

// CSS custom properties for animations
export const initAnimationProperties = () => {
  const style = document.documentElement.style;
  style.setProperty('--animate-timing-fast', `${TIMING.FAST}ms`);
  style.setProperty('--animate-timing-medium', `${TIMING.MEDIUM}ms`);
  style.setProperty('--animate-timing-slow', `${TIMING.SLOW}ms`);
  style.setProperty('--animate-easing-smooth', EASING.SMOOTH);
  style.setProperty('--animate-easing-bounce', EASING.BOUNCE);
  style.setProperty('--animate-easing-soft', EASING.SOFT);
};