/**
 * Lightweight analytics event tracking.
 * Logs in dev; can be wired to Vercel Analytics or another provider later.
 */
export function trackEvent(name, data = {}) {
  console.log("[Analytics Event]", name, data);

  // Future: connect to real analytics provider
  // e.g. vercel analytics custom events, GA4, etc.
}
