const createManager = (manager) => {
  console.log(manager);
  return `
  <div class="flex justify-center m-5 expand">
        <div class="rounded-30 shadow-lg bg-white max-w-sm p-8 card-min-width">
          <!-- circle -->
          <div class="flex justify-center pb-5">
            <div class="rounded-full card-circle-pink">
              <img
                class="justify-center"
                src="../assets/images/${manager.avatar}.png"
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
              <a href="mailto:${manager.email}">${manager.email}</a>
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
        <div class="rounded-30 shadow-lg bg-white max-w-sm p-8 card-min-width">
          <!-- circle -->
          <div class="flex justify-center pb-5">
            <div class="rounded-full card-circle-purple">
              <img
                class="justify-center"
                src="../assets/images/${engineer.avatar}.png"
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
                 <a href="mailto:${engineer.email}">${engineer.email}</a>
              </p>
            </div>
            <!-- github -->
            <div class="flex justify-between my-1">
              <p class="font-bold text-base">Github</p>
              <p class="font-bold text-gray-500 text-sm pl-8">
                <a href="https://github.com/${engineer.github}">${engineer.github}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
};

const createIntern = (intern) => {
  return `
    <div class="flex justify-center m-5 expand">
        <div class="rounded-30 shadow-lg bg-white max-w-sm p-8 card-min-width">
          <!-- circle -->
          <div class="flex justify-center pb-5">
            <div class="rounded-full card-circle-blue">
              <img
                class="justify-center"
                src="../assets/images/${intern.avatar}.png"
                alt=""
              />
            </div>
          </div>
          <h5 class="text-gray-900 text-xl font-bold mb-2 text-center">
            ${intern.name}
          </h5>
          <p
            class="text-white bg-sky-500 font-bold rounded-full mx-5 px-5 py-2.5 text-center mb-2 purple-glow"
          >
            Intern
          </p>
          <!-- container -->
          <div class="pt-4">
            <!-- id -->
            <div class="flex justify-between my-1">
              <p class="font-bold text-base">ID</p>
              <p class="font-bold text-gray-500 text-sm pl-8">${intern.id}</p>
            </div>
            <!-- email -->
            <div class="flex justify-between my-1">
              <p class="font-bold text-base">Email</p>
              <p class="font-bold text-gray-500 text-sm pl-8">
                <a href="mailto:${intern.email}">${intern.email}</a>
              </p>
            </div>
            <!-- school -->
            <div class="flex justify-between my-1">
              <p class="font-bold text-base">School</p>
              <p class="font-bold text-gray-500 text-sm pl-8">
                ${intern.school}
              </p>
            </div>
          </div>
        </div>
      </div>
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

  const number = data.length;

  const generateTeam = generateTeamPage(employeeCards, number);
  return generateTeam;
};

// generate HTML page
const generateTeamPage = function (cards, number) {
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
        We are a team of <span class="text-rose-500">${number}</span> passionate
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
