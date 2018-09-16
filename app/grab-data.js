const puppeteer = require('puppeteer');

const grabData = async () => {
  const browser = await puppeteer.launch({
    // will greatly affect the results
    headless: true,
    // important for running on various server where root user is present
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  // actual navigation happens here
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // sample data collection
  const title = await page.title();
  const outerHTML = await page.evaluate(() => document.querySelector('body').outerHTML);
  // cleanup once done
  await browser.close();
  return { title, outerHTML };
};

module.exports = grabData;
