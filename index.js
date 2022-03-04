// team classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//  node dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// link to create team HTML file
const createTeamHTML = require("./src/createTeamHTML");

// team array
const teamArr = [];

// Manager Questions
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
        validate: (input) => {
          if (!input) {
            return "please enter the managers name";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's Id?",
        validate: (input) => {
          if (isNaN(input)) {
            return "please enter a number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (!valid) {
            return "please enter an email";
          } else {
            return true;
          }
        },
      },
      {
        type: "list",
        name: "managerAvatar",
        message: "Please select your avatar?",
        choices: ["male1", "male2", "male3", "female1", "female2", "female3"],
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
        validate: (officeNum) => {
          if (isNaN(officeNum)) {
            console.log("Please enter an office number");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerAnswers) => {
      const {
        managerName,
        managerId,
        managerEmail,
        managerAvatar,
        managerOfficeNumber,
      } = managerAnswers;
      const manager = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerAvatar,
        managerOfficeNumber
      );

      teamArr.push(manager);
    });
};

// Add Employees
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role",
        choices: ["Engineer", "Intern", "Manager"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter an employee's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID.",
        validate: (ID) => {
          if (isNaN(ID)) {
            console.log("Please enter the employee's ID");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
        validate: (email) => {
          email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (email) {
            return true;
          } else {
            console.log("Please enter an email");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "avatar",
        message: "Please select your avatar?",
        choices: ["male1", "male2", "male3", "female1", "female2", "female3"],
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's github?",
        when: (input) => input.role === "Engineer",
        validate: (github) => {
          if (!github) {
            return "Please enter your github";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's school");
          }
        },
      },
      {
        type: "input",
        name: "officeNum",
        message: "What is the team manager's office number?",
        when: (input) => input.role === "Manager",
        validate: (officeNum) => {
          if (isNaN(officeNum)) {
            console.log("Please enter an office number");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployees",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeInfo) => {
      const {
        name,
        id,
        email,
        role,
        avatar,
        github,
        school,
        officeNum,
        confirmAddEmployees,
      } = employeeInfo;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, avatar, github);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, avatar, school);
      } else if (role === "Manager") {
        employee = new Manager(name, id, email, avatar, officeNum);
      }
      teamArr.push(employee);

      if (confirmAddEmployees) {
        return addEmployee(teamArr);
      } else {
        return teamArr;
      }
    });
};

// function to generate HTML page file using file system
const writeFile = (data) => {
  fs.writeFile("./dist/theTeam.html", data, (err) => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the profile has been created
    } else {
      console.log(
        "HTML has been successfully generated. Please view 'theTeam.html' in the dist folder"
      );
    }
  });
};

// Execute addManager function and write file
addManager()
  .then(addEmployee)
  .then((teamArr) => {
    return createTeamHTML(teamArr);
  })
  .then((HTML) => {
    return writeFile(HTML);
  })
  .catch((err) => {
    console.log(err);
  });
