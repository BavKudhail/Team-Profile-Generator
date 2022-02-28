const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

// test creates employee object
test("creates employee object", () => {
  const employee = new Employee("Bav", "1996", "bavkudhail@gmail.com");

  expect(employee.name).toEqual("Bav");
  expect(employee.id).toEqual("1996");
  expect(employee.email).toEqual("bavkudhail@gmail.com");
});

// gets employee email
test("gets employee email", () => {
  const employee = new Employee("Bav", "1996", "bavkudhail@gmail.com");

  expect(employee.getEmail()).toBe("bavkudhail@gmail.com");
});

// gets employee role
test("gets employee role", () => {
  const employee = new Employee("Bav", "1996", "bavkudhail@gmail.com");

  expect(employee.getRole()).toBe("Employee");
});
