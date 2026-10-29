/* Optional analytics hook for Hypas Anti-Cheat purchase clicks.
   This does not install analytics, set cookies, or transmit data independently.
   Once the site owner configures a compliant analytics service, the
   hypas_purchase_click event can be collected from a consented dataLayer.
*/
(() => {
  'use strict';
  const recognised = new Set([
    '7543365', // pay-in-full package
    '7588830'  // monthly package
  ]);
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    let address;
    try { address = new URL(link.href, window.location.href); } catch (_) { return; }
    if (address.hostname !== 'the-lobby-shop.tebex.io') return;
    const match = address.pathname.match(/^\/package\/(\d+)\/?$/);
    if (!match || !recognised.has(match[1])) return;
    const option = match[1] === '7543365' ? 'one_time' : 'monthly';
    // Do not send personal data or treat a checkout click as a completed sale.
    const payload = { event: 'hypas_purchase_click', licence_option: option,
      source_page: window.location.pathname };
    const consented = typeof window.hypasAnalyticsConsent === 'function' &&
      window.hypasAnalyticsConsent() === true;
    if (!consented) return;
    // Send through only one analytics transport to avoid duplicate conversions.
    // An analytics integration and explicit consent callback must be installed separately.
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'hypas_purchase_click', {
        licence_option: option,
        source_page: window.location.pathname
      });
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
    }
  });
})();
