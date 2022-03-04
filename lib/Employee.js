class Employee {
  constructor(name, id, email, avatar) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.avatar = avatar;
  }
  getName() {
    //   insert code here
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
    //   insert code here
  }
  getRole() {
    return "Employee";
    //   insert code here
  }
}

module.exports = Employee;
