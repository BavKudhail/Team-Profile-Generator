const createManager = (manager) => {
  return `
    <h3>Manager Name: ${manager.name} </h3>
    <h3>Manager ID: ${manager.id}</h3>
    <h3>Manager Email: ${manager.email} </h3>
    <h3>Manager Office Number: ${manager.officeNumber} </h3>
    `;
};

//
createTeamHTML = (data) => {
  pageArray = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = createManager(employee);

      pageArray.push(managerCard);
    }
  }

  const employeeCards = pageArray.join("");

  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

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
