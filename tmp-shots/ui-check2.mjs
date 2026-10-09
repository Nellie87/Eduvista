import puppeteer from "puppeteer-core";
import { mkdir } from "node:fs/promises";

await mkdir("tmp-shots/ui", { recursive: true });
const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
page.setDefaultNavigationTimeout(60000);

async function open(width, height) {
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".hero-cta");
  await new Promise((r) => setTimeout(r, 600));
}

await open(1440, 900);
await page.screenshot({ path: "tmp-shots/ui/hero-final.png" });
await page.click(".hero-words button:nth-child(2)");
await new Promise((r) => setTimeout(r, 300));
const map = await page.$eval(".hero-line", (el) => el.textContent.trim());
console.log("map", map);
await page.screenshot({ path: "tmp-shots/ui/hero-map-final.png" });
await page.evaluate(() => document.getElementById("about-detail").scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: "tmp-shots/ui/cards.png" });

await open(768, 900);
const overflow = await page.evaluate(
  () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
);
console.log("768 overflow", overflow);
await page.screenshot({ path: "tmp-shots/ui/hero-768.png" });

await open(390, 844);
await page.click(".nav-toggle");
await page.waitForSelector("#mobile-menu a");
const menu = await page.evaluate(() =>
  [...document.querySelectorAll("#mobile-menu a")].map((a) => a.textContent.trim()),
);
console.log("menu", menu.join(" | "));
await page.screenshot({ path: "tmp-shots/ui/menu-390.png" });
await browser.close();
