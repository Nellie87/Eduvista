import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
page.on("pageerror", (e) => console.log("PAGEERROR", e.message));
page.on("console", (m) => console.log("CONSOLE", m.type(), m.text()));
await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 2000));
const info = await page.evaluate(() => {
  const letters = [...document.querySelectorAll(".hero-letter")].map((el) => {
    const s = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      className: el.className,
      text: el.textContent,
      opacity: s.opacity,
      display: s.display,
      visibility: s.visibility,
      transform: s.transform,
      left: s.left,
      top: s.top,
      rect: { x: r.x, y: r.y, w: r.width, h: r.height },
    };
  });
  const arrows = document.querySelectorAll(".hero-arrow").length;
  const issue = document.body.innerText.includes("Issue");
  return { count: letters.length, arrows, issue, letters };
});
console.log(JSON.stringify(info, null, 2));
await page.screenshot({ path: "tmp-shots/ui/arrows-full.png" });
await browser.close();
