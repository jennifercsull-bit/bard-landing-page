import { chromium } from 'playwright';

const VIEWS = [
  { name: 'hero', width: 1440, height: 900, scroll: 0 },
  { name: 'stats-scroll', width: 1440, height: 900, scroll: 500 },
  { name: 'scroll-showcase', width: 1440, height: 900, scroll: 1000 },
  { name: 'testimonial', width: 1440, height: 900, scroll: 2154 },
  { name: 'how-it-works-1', width: 1440, height: 900, scroll: 2922 },
  { name: 'how-it-works-2', width: 1440, height: 900, scroll: 3800 },
  { name: 'features', width: 1440, height: 900, scroll: 4963 },
  { name: 'features-cards', width: 1440, height: 900, scroll: 5500 },
  { name: 'pricing', width: 1440, height: 900, scroll: 6302 },
  { name: 'pricing-cards', width: 1440, height: 900, scroll: 6700 },
  { name: 'security', width: 1440, height: 900, scroll: 7450 },
  { name: 'security-cards', width: 1440, height: 900, scroll: 7800 },
  { name: 'mission', width: 1440, height: 900, scroll: 8482 },
  { name: 'bottom-cta', width: 1440, height: 900, scroll: 9145 },
  { name: 'footer', width: 1440, height: 900, scroll: 99999 },
  // Mobile key views
  { name: 'mobile-hero', width: 375, height: 812, scroll: 0 },
  { name: 'mobile-mid', width: 375, height: 812, scroll: 4000 },
  { name: 'mobile-bottom', width: 375, height: 812, scroll: 99999 },
];

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const { name, width, height, scroll } of VIEWS) {
    const page = await browser.newPage({ viewport: { width, height } });
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    // Scroll through entire page to trigger all Framer Motion whileInView animations
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y <= pageHeight; y += height / 2) {
      await page.evaluate((s) => window.scrollTo(0, s), y);
      await page.waitForTimeout(100);
    }
    await page.waitForTimeout(500);
    await page.evaluate((s) => window.scrollTo(0, Math.min(s, document.body.scrollHeight - window.innerHeight)), scroll);
    await page.waitForTimeout(400);
    await page.screenshot({
      path: `scratch/vp-${name}.png`,
      fullPage: false,
    });
    console.log(`Saved scratch/vp-${name}.png`);
    await page.close();
  }

  await browser.close();
})();
