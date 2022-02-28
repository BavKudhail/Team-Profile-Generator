const Manager = require("../lib/Manager");

// testing create manager object
test("creates manager object", () => {
  const officeNumber = 19;
  const manager = new Manager(
    "Bav",
    "1996",
    "bavkudhail@gmail.com",
    officeNumber
  );
  expect(manager.getOfficeNumber()).toEqual(officeNumber);
});

// testing get role
test("gets role", () => {
  const manager = new Manager("Bav", "1996", "bavkudhail@gmail.com", "19");
  expect(manager.getRole()).toEqual("Manager");
});
