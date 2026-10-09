import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();

async function shot(name, w, h) {
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => {
    const el = document.getElementById("about-detail");
    window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 20);
  });
  await new Promise((r) => setTimeout(r, 450));
  await page.screenshot({ path: `tmp-shots/ui/${name}.png` });
}

await shot("beliefs-1440", 1440, 900);
await shot("beliefs-390", 390, 844);
await browser.close();
console.log("ok");
