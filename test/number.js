const { expect } = require("chai");
const app = require("../app");

describe("tests example website", function() {
  it("title has text: example", async function() {
    const { title } = await app();
    expect(title.toLowerCase()).to.have.string("example");
  });
  it("outerHTML has text: example", async function() {
    const { outerHTML } = await app();
    expect(outerHTML.toLowerCase()).to.have.string("example");
  });
});
