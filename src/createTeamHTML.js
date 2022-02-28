// create manager card
const createManager = (manager) => {
  return `
    <h3>Manager Name: ${manager.name} </h3>
    <h3>Manager ID: ${manager.id}</h3>
    <h3>Manager Email: ${manager.email} </h3>
    <h3>Manager Office Number: ${manager.officeNumber} </h3>
    `;
};

// create engineer card
const createEngineer = (engineer) => {
  return `
    <h3>Engineer Name: ${engineer.name} </h3>
    <h3>Engineer ID: ${engineer.id}</h3>
    <h3>Engineer Email: ${engineer.email} </h3>
    <h3>Engineer Github: ${engineer.github} </h3>
    `;
};

// create intern card
const createIntern = (intern) => {
  return `
    <h3>Intern Name: ${intern.name} </h3>
    <h3>Intern ID: ${intern.id}</h3>
    <h3>Intern Email: ${intern.email} </h3>
    <h3>Intern School: ${intern.school} </h3>
    `;
};

// push others into array
createTeamHTML = (data) => {
  pageArray = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = createManager(employee);
      pageArray.push(managerCard);
    }
    if (role === "Engineer") {
      const engineerCard = createEngineer(employee);
      pageArray.push(engineerCard);
    }
    if (role === "Intern") {
      const internCard = createIntern(employee);
      pageArray.push(internCard);
    }
  }

  const employeeCards = pageArray.join("");

  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

// generate HTML page
const generateTeamPage = function (cards) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${cards}
</body>
</html>
 
`;
};

// Export
module.exports = createTeamHTML;
