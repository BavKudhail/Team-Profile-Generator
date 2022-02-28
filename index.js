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

// manager questions

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
