const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, avatar, school) {
    super(name, id, email, avatar);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
