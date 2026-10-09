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
await new Promise((r) => setTimeout(r, 400));

const data = await page.evaluate(() => {
  const stageEyebrows = [...document.querySelectorAll(".stage-row .eyebrow")].map((el) =>
    el.textContent.trim(),
  );
  return {
    stageEyebrows,
    aboutEyebrow: document.querySelector("#about .eyebrow")?.textContent.trim(),
    aboutHeading: document.querySelector("#about h2")?.textContent.trim(),
    navAbout: document.querySelector('.nav-links a[href="/#about"]')?.getAttribute("href"),
    heroCta: document.querySelector(".hero-cta")?.getAttribute("href"),
    readMore: document.querySelector(".stage-row .more")?.getAttribute("href"),
  };
});
console.log(JSON.stringify(data, null, 2));

await page.evaluate(() => document.querySelector(".stage")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: `${out}/purpose-card.png` });

await page.click('.nav-links a[href="/#about"]');
await new Promise((r) => setTimeout(r, 700));
const afterNav = await page.evaluate(() => ({
  hash: location.hash,
  aboutTop: document.getElementById("about")?.getBoundingClientRect().top,
  heading: document.querySelector("#about h2")?.textContent.trim(),
}));
console.log("after nav About", JSON.stringify(afterNav));
await page.screenshot({ path: `${out}/purpose-about.png` });

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => document.querySelector(".stage")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: `${out}/purpose-card-390.png` });

await browser.close();
