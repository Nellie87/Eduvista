import puppeteer from "puppeteer-core";
import { mkdir } from "node:fs/promises";

const out = "tmp-shots/ui";
await mkdir(out, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
page.setDefaultNavigationTimeout(60000);

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 500));

await page.screenshot({ path: `${out}/fix-hero.png` });

await page.evaluate(() => document.getElementById("about-detail")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: `${out}/fix-about.png` });

await page.evaluate(() => document.getElementById("learners")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: `${out}/fix-learners.png` });

await page.evaluate(() => document.getElementById("institutions")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: `${out}/fix-institutions.png` });

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => {
  const el = document.getElementById("about-detail");
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo(0, y);
});
await new Promise((r) => setTimeout(r, 500));
await page.screenshot({ path: `${out}/fix-about-390.png` });

await page.evaluate(() => {
  const el = document.getElementById("learners");
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo(0, y);
});
await new Promise((r) => setTimeout(r, 500));
await page.screenshot({ path: `${out}/fix-learners-390.png` });

await browser.close();
