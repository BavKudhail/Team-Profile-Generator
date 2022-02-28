const { expect } = require("@jest/globals");
const { it } = require("jest-circus");
const { describe } = require("yargs");
const Manager = require("../lib/Manager");

test("gets role", () => {
  const manager = new Manager("Bav", "1996", "bavkudhail@gmail.com", "19");
  expect(manager.getRole()).toEqual("Manager");
});
