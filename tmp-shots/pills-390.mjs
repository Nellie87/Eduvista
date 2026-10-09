import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => {
  const el = document.querySelector("#learners .chapter");
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo(0, y);
});
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: "tmp-shots/ui/flow-pills-390.png" });
const pills = await page.$$eval("#learners .hero-words button", (els) =>
  els.map((el) => ({
    t: el.textContent.trim(),
    w: Math.round(el.getBoundingClientRect().width),
    y: Math.round(el.getBoundingClientRect().top),
    overflow: el.getBoundingClientRect().right > 390,
  })),
);
console.log(JSON.stringify(pills, null, 2));
await browser.close();
