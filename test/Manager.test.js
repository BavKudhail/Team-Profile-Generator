const { expect } = require("@jest/globals");
const { describe } = require("yargs");
const Manager = require("../lib/Manager");

it("creates a new manager object", () => {
  const manager = new Manager(
    "Bav",
    "1996",
    "bavkudhail@gmail.com",
    "19",
    officeNumber
  );
//   office number to be equal to a Number
  expect(manager.officeNumber).toBe(expect.any(Number));
});
