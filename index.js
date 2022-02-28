// import

// team classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//  node dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// link to create team HTML file
const createTeam = require("./src/createTeam");

// team array
const teamArr = [];

const generateTeam = () => {
  input;
};

// Manager Questions
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's Id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
      },
    ])
    .then((managerAnswers) => {
      const { name, id, email, officeNumber } = managerAnswers;
      const manager = new Manager(name, id, email, officeNumber);

      teamArr.push(manager);
      console.log(manager);
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
      const { name, id, email, github } = engineerAnswers;
      const engineer = new Engineer(name, id, email, github);

      teamArr.push(engineer);
      console.log(engineer);
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
      const { name, id, email, school } = internAnswers;
      const intern = new Intern(name, id, email, school);

      teamArr.push(intern);
      console.log(intern);
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

// execute function

addManager();
