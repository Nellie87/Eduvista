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
  const res = await page.goto(url, { waitUntil: "networkidle0" });
  console.log("status", res?.status(), url);
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 800));
}

async function shot(name) {
  await page.screenshot({ path: `${out}/${name}.png`, fullPage: false });
  console.log(name);
}

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await go("http://localhost:3000/");
console.log("title", await page.title());

const links = await page.$$eval("footer.footer a", (as) =>
  as.map((a) => ({ text: a.textContent.trim(), href: a.getAttribute("href") })),
);
console.log(JSON.stringify(links, null, 2));

const contact = await page.$("#contact");
if (contact) {
  await contact.screenshot({ path: `${out}/footer-contact-section.png` });
  console.log("footer-contact-section");
}

const footer = await page.$("footer.footer");
if (footer) {
  await footer.screenshot({ path: `${out}/footer-el.png` });
  console.log("footer-el");
}

await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await new Promise((r) => setTimeout(r, 400));
await shot("footer-bottom");

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await go("http://localhost:3000/");
await page.evaluate(() => document.querySelector("footer.footer")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await shot("footer-bottom-390");

await page.evaluate(() => document.getElementById("contact")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await shot("footer-contact-390-top");

await page.evaluate(() => document.querySelector(".contact-side")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await shot("footer-contact-390-hours");

await browser.close();
