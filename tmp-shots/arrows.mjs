import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1200));
await page.mouse.move(1050, 450);

for (const [n, name] of [
  [1, "inspire"],
  [2, "map"],
  [3, "rise"],
]) {
  await page.click(`.hero-dots button:nth-child(${n})`);
  await new Promise((r) => setTimeout(r, 1800));
  await page.screenshot({ path: `tmp-shots/ui/arrows-${name}.png` });
}

await browser.close();
