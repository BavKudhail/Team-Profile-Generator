const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, avatar, officeNumber) {
    super(name, id, email, avatar);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
