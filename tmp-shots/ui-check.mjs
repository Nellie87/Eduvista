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

async function shot(name, width, height) {
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 500));
  const errText = await page.evaluate(() => {
    const portal = document.querySelector("nextjs-portal");
    return portal?.shadowRoot?.textContent?.replace(/\s+/g, " ").slice(0, 280) || "";
  });
  if (errText) console.log(name, "overlay", errText);
  const report = await page.evaluate(() => {
    const doc = document.documentElement;
    const hero = document.querySelector(".hero");
    const btn = document.querySelector(".hero-cta");
    const hr = hero?.getBoundingClientRect();
    const br = btn?.getBoundingClientRect();
    const h1 = document.querySelector(".hero-copy h1");
    const clipped = br && hr ? br.bottom > hr.bottom + 1 || br.top < hr.top : false;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      heroH: Math.round(hr?.height ?? 0),
      btnBottom: Math.round(br?.bottom ?? 0),
      heroBottom: Math.round(hr?.bottom ?? 0),
      clipped,
      h1: h1?.innerText.replace(/\n/g, " | "),
      font: h1 ? getComputedStyle(h1).fontFamily : null,
    };
  });
  await page.screenshot({ path: `${out}/${name}.png` });
  console.log(name, JSON.stringify(report));
}

await shot("hero-1440", 1440, 900);
await page.click(".hero-words button:nth-child(2)");
await new Promise((r) => setTimeout(r, 300));
const line = await page.$eval(".hero-line", (el) => el.textContent.trim());
console.log("map line", line);
await page.screenshot({ path: `${out}/hero-map.png` });

await page.click(".hero-cta");
await new Promise((r) => setTimeout(r, 600));
console.log("after explore", await page.evaluate(() => Math.round(scrollY)));
await page.screenshot({ path: `${out}/about.png` });

await page.evaluate(() => document.getElementById("learners")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: `${out}/learners.png` });

await page.evaluate(() => document.getElementById("contact")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: `${out}/contact.png` });

await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: `${out}/footer.png` });

await shot("hero-390", 390, 844);
const words = await page.$$(".hero-words button");
if (words[2]) await words[2].click();
await new Promise((r) => setTimeout(r, 250));
await page.screenshot({ path: `${out}/hero-390-rise.png` });

await browser.close();
