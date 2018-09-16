const { expect } = require('chai');
const grabData = require('../app/grab-data');

describe('tests example website', function testExample() {
  this.timeout(30000);

  it('browses the website', async function testBrowser() {
    const { title, outerHTML } = await grabData();
    this.title = title;
    this.outerHTML = outerHTML;
  });

  it('title has text: example', async function testTitle() {
    expect(this.title.toLowerCase()).to.have.string('example');
  });

  it('outerHTML has text: example', async function testOuterHTML() {
    expect(this.outerHTML.toLowerCase()).to.have.string('example');
  });
});
