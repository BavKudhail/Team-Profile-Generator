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

// Generate team function
const generateTeam = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "selectEmployee",
        message: "What employee role would you like to add to your team?",
        choices: ["Manager", "Engineer", "Intern", "No more employees"],
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
        return teamArr;
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
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's Id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
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
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's github?",
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
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?",
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

// generate HTML using file system
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    err
      ? console.log("Oops, there was an error" + err)
      : console.log("Successfully generated team HTML file");
  });
};

generateTeam();
