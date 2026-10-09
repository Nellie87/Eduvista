import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: "tmp-shots/ui/no-closer.png" });
const text = await page.evaluate(() => document.body.innerText);
console.log("has closer heading", text.includes("Let’s rise together"));
await browser.close();
