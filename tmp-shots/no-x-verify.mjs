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
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });

async function check(url, name, clickMap = false) {
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 400));
  if (clickMap) {
    await page.click(".hero-words button:nth-child(2)");
    await new Promise((r) => setTimeout(r, 450));
  }
  const r = await page.evaluate(() => {
    window.scrollTo(80, 0);
    const can = window.scrollX !== 0;
    window.scrollTo(0, 0);
    return {
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      can,
    };
  });
  console.log(name, "overflow", r.overflow, "canPanX", r.can);
  await page.screenshot({ path: `tmp-shots/ui/no-x-${name}-390.png` });
}

await check("http://localhost:3000/", "home-map", true);
await check("http://localhost:3000/", "home-rise", false);
await page.click(".hero-words button:nth-child(3)");
await new Promise((r) => setTimeout(r, 450));
await page.screenshot({ path: "tmp-shots/ui/no-x-home-rise-390.png" });
await check("http://localhost:3000/privacy", "privacy");
await check("http://localhost:3000/services/professional-certification", "service");

await browser.close();
console.log("done");
