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
await page.evaluate(() => document.getElementById("learners")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));

const stem = await page.$("#learners .hero-words button:nth-child(2)");
await stem.click();
await new Promise((r) => setTimeout(r, 300));
const title = await page.$eval("#learners .svc-feature h3", (el) => el.textContent.trim());
console.log("stem title", title);

await page.click("#learners .svc-feature .more");
await page.waitForNavigation({ waitUntil: "domcontentloaded" });
console.log("after learn more", page.url());
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: `${out}/flow-service.png` });

await page.evaluate(() => document.getElementById("svc-more")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: `${out}/flow-related.png` });

const related = await page.$(".svc-section .hero-words a");
const relatedLabel = await related.evaluate((el) => el.textContent.trim());
await related.click();
await page.waitForNavigation({ waitUntil: "domcontentloaded" });
console.log("related", relatedLabel, page.url());

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => {
  const el = document.querySelector("#learners .hero-words");
  el?.scrollIntoView({ block: "center" });
});
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: `${out}/flow-learners-390.png` });

const mobilePills = await page.$$("#learners .hero-words button");
await mobilePills[4].click();
await new Promise((r) => setTimeout(r, 300));
await page.evaluate(() => document.querySelector("#learners .svc-feature")?.scrollIntoView({ block: "start" }));
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: `${out}/flow-careers-390.png` });
const careers = await page.$eval("#learners .svc-feature h3", (el) => el.textContent.trim());
console.log("careers", careers, "pills", mobilePills.length);

await browser.close();
