const createManager = (manager) => {
  return `
  <div class="flex justify-center m-5 expand">
        <div class="rounded-30 shadow-lg bg-white max-w-sm p-8">
          <!-- circle -->
          <div class="flex justify-center pb-5">
            <div class="rounded-full card-circle-pink">
              <img
                class="justify-center"
                src="#"
                alt=""
              />
            </div>
          </div>
          <h5 class="text-gray-900 text-xl font-bold mb-2 text-center">
            ${manager.name}
          </h5>
          <p
            class="text-white bg-rose-600 font-bold rounded-full mx-5 px-5 py-2.5 text-center mb-2 purple-glow"
          >
            Manager
          </p>
          <!-- container -->
          <div class="pt-4">
            <!-- id -->
            <div class="flex justify-between my-1">
              <p class="font-bold text-base">ID</p>
              <p class="font-bold text-gray-500 text-sm pl-8">${manager.id}</p>
            </div>
            <!-- email -->
            <div class="flex justify-between my-1">
              <p class="font-bold text-base">Email</p>
              <p class="font-bold text-gray-500 text-sm pl-8">
                ${manager.email}
              </p>
            </div>
            <!-- office number -->
            <div class="flex justify-between my-1">
              <p class="font-bold text-base">Office No</p>
              <p class="font-bold text-gray-500 text-sm pl-8">${manager.officeNumber}</p>
            </div>
          </div>
        </div>
      </div>
  `;
};


const createEngineer = (engineer) => {
  return `
    <div class="flex justify-center m-5 expand">
        <div class="rounded-30 shadow-lg bg-white max-w-sm p-8">
          <!-- circle -->
          <div class="flex justify-center pb-5">
            <div class="rounded-full card-circle-purple">
              <img
                class="justify-center"
                src="#"
                alt=""
              />
            </div>
          </div>
          <h5 class="text-gray-900 text-xl font-bold mb-2 text-center">
            ${engineer.name}
          </h5>
          <p
            class="text-white bg-purple-700 font-bold rounded-full mx-5 px-5 py-2.5 text-center mb-2 purple-glow"
          >
            Engineer
          </p>
          <!-- container -->
          <div class="pt-4">
            <!-- id -->
            <div class="flex justify-between my-1">
              <p class="font-bold text-base">ID</p>
              <p class="font-bold text-gray-500 text-sm pl-8">${engineer.id}</p>
            </div>
            <!-- email -->
            <div class="flex justify-between my-1">
              <p class="font-bold text-base">Email</p>
              <p class="font-bold text-gray-500 text-sm pl-8">
                ${engineer.email}
              </p>
            </div>
            <!-- github -->
            <div class="flex justify-between my-1">
              <p class="font-bold text-base">Github</p>
              <p class="font-bold text-gray-500 text-sm pl-8">
                ${engineer.github}
              </p>
            </div>
          </div>
        </div>
      </div>
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
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body class="bg-pink">
    <!-- insert here -->
    <div class="flex justify-center mt-24 m-20">
      <h1 class="text-7xl font-DM">Our Team!</h1>
    </div>
    <div class="flex-col text-center">
      <h2 class="text-5xl font-bold mb-5">
        We are a team of <span class="text-rose-500">4</span> passionate
        creators.
      </h2>
      <h3 class="text-xl font-medium mb-10">
        Together we make your vision a reality
      </h3>
    </div>
    <!-- card container -->
    <div class="flex justify-around flex-wrap my-20 mx-20 lg:m-44">
    ${cards}
    </div>
     </body>
</html>
 
`;
};

// Export
module.exports = createTeamHTML;
