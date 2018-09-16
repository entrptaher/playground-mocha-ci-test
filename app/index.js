const puppeteer = require("puppeteer");

module.exports = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const title = await page.title();
  const outerHTML = await page.evaluate(
    () => document.querySelector("body").outerHTML
  );
  await browser.close();
  return { title, outerHTML };
};
