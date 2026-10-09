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

async function go() {
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 600));
}

async function pick(n) {
  await page.click(`.hero-words button:nth-child(${n})`);
  await new Promise((r) => setTimeout(r, 500));
}

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await go();
await pick(3);
await page.screenshot({ path: `${out}/orbit-rise-390.png` });
const riseH = await page.evaluate(() => document.querySelector(".hero")?.scrollHeight);
console.log("rise-390 hero height", riseH);
await page.screenshot({
  path: `${out}/orbit-rise-390-full.png`,
  clip: { x: 0, y: 0, width: 390, height: Math.min(riseH, 1200) },
});

await pick(1);
await page.screenshot({ path: `${out}/orbit-inspire-390.png` });
await pick(2);
await page.screenshot({ path: `${out}/orbit-map-390.png` });

await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 1 });
await go();
await pick(3);
await page.screenshot({ path: `${out}/orbit-rise-768.png` });

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await go();
await pick(3);
await page.screenshot({ path: `${out}/orbit-rise-1440.png` });

await browser.close();
console.log("done");
