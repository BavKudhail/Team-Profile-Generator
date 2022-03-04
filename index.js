// team classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//  node dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// output paths
const path = require("path");
const outputDir = path.resolve(__dirname, "dist");
const outputPath = path.join(outputDir, "theTeam.html");

// link to create team HTML file
const createTeamHTML = require("./src/createTeamHTML");

// team array
const teamArr = [];

// Generate team function
const generateTeam = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "selectEmployee",
        message: "What employee role would you like to add to your team?",
        choices: ["Manager", "Engineer", "Intern", "No more"],
      },
    ])
    .then((selection) => {
      const choice = selection.selectEmployee;
      if (choice === "Manager") {
        addManager();
      } else if (choice === "Engineer") {
        addEngineer();
      } else if (choice === "Intern") {
        addIntern();
      } else {
        console.log(teamArr);
        return createHTML();
      }
    });
};

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
      const { managerName, managerId, managerEmail, managerOfficeNumber } =
        managerAnswers;
      const manager = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerOfficeNumber
      );

      teamArr.push(manager);
      console.log(manager);
      generateTeam();
    });
};

// Engineer Questions
const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
        validate: (input) => {
          if (!input) {
            return "please enter the engineers name";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID?",
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
        name: "engineerEmail",
        message: "What is the engineer's email?",
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
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's github?",
        default: "github.com/username",
        validate: (github) => {
          if (!github) {
            return "Please enter your github";
          } else {
            return true;
          }
        },
      },
    ])
    .then((engineerAnswers) => {
      const { engineerName, engineerId, engineerEmail, engineerGithub } =
        engineerAnswers;
      const engineer = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        engineerGithub
      );

      teamArr.push(engineer);
      console.log(engineer);
      generateTeam();
    });
};

// Intern Questions
const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
        validate: (input) => {
          if (!input) {
            return "please enter the intern's name";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's ID?",
        validate: (input) => {
          if (isNaN(input) || input === "") {
            return "please enter a number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
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
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?",
        validate: (school) => {
          if (!school) {
            console.log("please enter your school");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((internAnswers) => {
      const { internName, internId, internEmail, internSchool } = internAnswers;
      const intern = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );

      teamArr.push(intern);
      console.log(intern);
      generateTeam();
    });
};

// Create HTML
function createHTML() {
  console.log("Team created");
  fs.writeFileSync(outputPath, createTeamHTML(teamArr), "utf-8");
}

// Execute generate team function
generateTeam();
