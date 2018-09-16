const { expect } = require("chai");
const app = require("../app");

describe("tests example website", function() {
  this.timeout(60000);
  
  it("browses the website", async function() {
    const { title, outerHTML } = await app();
    this.title = title;
    this.outerHTML = outerHTML;
  });

  it("title has text: example", async function() {
    expect(this.title.toLowerCase()).to.have.string("example");
  });

  it("outerHTML has text: example", async function() {
    expect(this.outerHTML.toLowerCase()).to.have.string("example");
  });
});
