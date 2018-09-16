function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise(((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step('next', value); }, (err) => { step('throw', err); }); } } return step('next'); })); }; }

const puppeteer = require('puppeteer');

const grabData = (() => {
  const _ref = _asyncToGenerator(function* () {
    const browser = yield puppeteer.launch({
      // will greatly affect the results
      headless: true,
      // important for running on various server where root user is present
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    // actual navigation happens here
    const page = yield browser.newPage();
    yield page.goto('https://example.com');

    // sample data collection
    const title = yield page.title();
    const outerHTML = yield page.evaluate(() => document.querySelector('body').outerHTML);
    // cleanup once done
    yield browser.close();
    return { title, outerHTML };
  });

  return function grabData() {
    return _ref.apply(this, arguments);
  };
})();

module.exports = grabData;
