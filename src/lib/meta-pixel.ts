// Meta Pixel helper functions for client-side tracking in TanStack Start (SSR safe)

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    ENV_META_PIXEL_ID?: string;
  }
}

/**
 * Tracks standard and custom conversion events with Meta Pixel
 */
export function trackPixelEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined") {
    if (window.fbq) {
      try {
        window.fbq("track", eventName, params);
        console.log(`[Meta Pixel] Event Tracked: ${eventName}`, params);
      } catch (error) {
        console.error(`[Meta Pixel] Error tracking event ${eventName}:`, error);
      }
    } else {
      console.warn(`[Meta Pixel] fbq not defined on window. Event "${eventName}" not tracked.`);
    }
  }
}
