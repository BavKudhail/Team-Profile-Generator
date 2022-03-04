const Employee = require("./Employee");

class Engineer extends Employee {
  // insert code here
  constructor(name, id, email, avatar, github) {
    super(name, id, email, avatar);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
