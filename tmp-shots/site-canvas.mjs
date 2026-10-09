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

async function go(url) {
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 500));
}

async function shot(name) {
  await page.screenshot({ path: `${out}/${name}.png` });
  console.log(name);
}

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await go("http://localhost:3000/");
await shot("canvas-hero");

await page.evaluate(() => document.getElementById("about")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await shot("canvas-stage");

await page.evaluate(() => document.getElementById("about-detail")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await shot("canvas-about");

await page.evaluate(() => document.getElementById("learners")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await shot("canvas-learners");

const pills = await page.$$("#learners .hero-words button");
if (pills[2]) {
  await pills[2].click();
  await new Promise((r) => setTimeout(r, 350));
  await shot("canvas-learners-research");
}

await page.evaluate(() => document.getElementById("institutions")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await shot("canvas-institutions");

await page.evaluate(() => document.getElementById("contact")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await shot("canvas-contact");

await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await new Promise((r) => setTimeout(r, 300));
await shot("canvas-footer");

await go("http://localhost:3000/services/academic-advisory");
await shot("canvas-service");

await go("http://localhost:3000/privacy");
await shot("canvas-privacy");

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await go("http://localhost:3000/");
await shot("canvas-hero-390");

await page.evaluate(() => document.getElementById("learners")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await shot("canvas-learners-390");

await page.evaluate(() => document.getElementById("contact")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await shot("canvas-contact-390");

await browser.close();
