import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
const css = readFileSync(new URL('../app/style.css', import.meta.url), 'utf8');
const products = [...page.matchAll(/\{id:'\d+',name:/g)];
assert.equal(products.length, 15, 'Expected exactly 15 merchandise concepts');
for (const category of ['Apparel', 'Eyewear', 'Music', 'Accessories', 'Collectibles']) {
  assert.ok(page.includes(`category:'${category}'`), `Missing ${category} products`);
}
assert.ok(page.includes('NO ORDERS OR PAYMENTS'), 'Missing no-payments banner');
assert.ok(page.includes('Checkout, payments, and preorders are disabled.'), 'Missing checkout disclaimer');
assert.ok(!/stripe|paypal|checkout\.sessions|paymentintent/i.test(page), 'Unexpected payment integration reference');
assert.ok(layout.includes('canonical'), 'Missing canonical metadata');
assert.ok(page.includes('aria-expanded={menuOpen}'), 'Missing menu accessibility state');
assert.ok(page.includes('aria-pressed={active===cat}'), 'Category filters need pressed state');
assert.ok(page.includes('type="button"'), 'Interactive controls must use button semantics');
assert.ok(page.includes('illustrative design concepts, not product photographs'), 'Concept artwork disclosure missing');
assert.ok(page.includes('Do not send money'), 'Anti-fraud notice missing');
assert.ok(css.includes('@media'), 'Responsive CSS rules missing');
assert.ok(readFileSync(new URL('../app/sitemap.ts', import.meta.url), 'utf8').includes('saalkoo.store'), 'Sitemap domain missing');
console.log('PASS: 15 concepts, categories, preview notices, no checkout integration references, SEO and menu checks');
