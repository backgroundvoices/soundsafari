// The Google Fonts stylesheet and font files are requested while the page is
// first loading, before the service worker exists, so they would only be saved
// on the second visit. Once the worker controls the page, request them again
// through it so they are saved during the first visit too. The font URLs are
// read from the page, so the app's own CSS and HTML stay untouched.

const FONT_CSS_ORIGIN = 'https://fonts.googleapis.com';

function collectStylesheetUrls(sheets) {
  return sheets.flatMap((sheet) => {
    const own = sheet.href ? [sheet.href] : [];
    // Cross-origin sheets refuse cssRules access; their @imports are not ours to follow.
    if (sheet.href && new URL(sheet.href).origin !== window.location.origin) return own;
    const imported = Array.from(sheet.cssRules)
      .filter((rule) => rule instanceof CSSImportRule)
      .map((rule) => new URL(rule.href, sheet.href ?? window.location.href).href);
    return [...own, ...imported];
  });
}

function extractFontFileUrls(css) {
  return Array.from(css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g), (match) => match[1]);
}

async function fetchOk(url) {
  const response = await fetch(url, { mode: 'cors' });
  if (!response.ok) {
    throw new Error(`Saving font for offline use failed: GET ${url} returned ${response.status}`);
  }
  return response;
}

async function warmFontCache() {
  const fontCssUrls = collectStylesheetUrls(Array.from(document.styleSheets))
    .filter((url) => new URL(url).origin === FONT_CSS_ORIGIN);
  for (const cssUrl of fontCssUrls) {
    const css = await (await fetchOk(cssUrl)).text();
    await Promise.all(extractFontFileUrls(css).map(fetchOk));
  }
}

// Only the first visit needs this. Later loads are controlled from the start, so
// the page's own font requests already go through the worker, and the stylesheet
// it saves from them is opaque, which a readable (CORS) re-fetch would reject.
if (
  typeof window !== 'undefined' &&
  'serviceWorker' in navigator &&
  navigator.serviceWorker.controller === null &&
  navigator.onLine
) {
  navigator.serviceWorker.addEventListener('controllerchange', () => warmFontCache(), { once: true });
}
