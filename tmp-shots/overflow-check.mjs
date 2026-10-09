import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});

const page = await browser.newPage();
page.setDefaultNavigationTimeout(60000);

async function measure(width, height, extra = "") {
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 400));
  if (extra) await page.evaluate(extra);

  const result = await page.evaluate(() => {
    const html = document.documentElement;
    const body = document.body;
    const offenders = [];
    const vw = html.clientWidth;
    for (const el of document.querySelectorAll("*")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      const left = r.left + window.scrollX;
      const right = r.right + window.scrollX;
      if (left < -1 || right > vw + 1) {
        const cs = getComputedStyle(el);
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className || "").toString().slice(0, 80),
          id: el.id,
          left: Math.round(left),
          right: Math.round(right),
          width: Math.round(r.width),
          overflow: cs.overflow,
          position: cs.position,
        });
      }
    }
    offenders.sort((a, b) => b.right - a.right || a.left - b.left);
    const before = window.scrollX;
    window.scrollTo(40, 0);
    const afterForce = window.scrollX;
    window.scrollTo(before, 0);
    return {
      innerWidth: window.innerWidth,
      clientWidth: html.clientWidth,
      scrollWidth: html.scrollWidth,
      bodyScroll: body.scrollWidth,
      canPanX: afterForce !== 0,
      overflowX: getComputedStyle(html).overflowX + " / body " + getComputedStyle(body).overflowX,
      top: offenders.slice(0, 18),
    };
  });
  return result;
}

for (const [w, h, label, extra] of [
  [390, 844, "390 default"],
  [390, 844, "390 rise", `document.querySelector('.hero-words button:nth-child(3)')?.click()`],
  [360, 740, "360"],
  [768, 1024, "768"],
  [1024, 768, "1024"],
  [1280, 800, "1280"],
  [1440, 900, "1440"],
]) {
  const r = await measure(w, h, extra);
  const overflow = r.scrollWidth - r.clientWidth;
  console.log("\n==", label, "== overflow", overflow, "px canPanX", r.canPanX, r.overflowX);
  if (overflow > 0 || r.top.length) {
    for (const o of r.top) {
      console.log(" ", o.tag, "." + o.cls, o.id, "L", o.left, "R", o.right, "w", o.width, o.position);
    }
  }
}

await browser.close();
