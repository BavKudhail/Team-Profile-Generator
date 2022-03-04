const Engineer = require("../lib/Engineer");

// test creates engineer object
test("creates engineer object", () => {
  const github = "bavkudhail";
  const engineer = new Engineer(
    "Bav",
    "1996",
    "bavkudhail@gmail.com",
    "male1",
    github
  );

  //   test name, id and email
  expect(engineer.name).toEqual("Bav");
  expect(engineer.id).toEqual("1996");
  expect(engineer.email).toEqual("bavkudhail@gmail.com");

  //   github
  expect(engineer.getGithub()).toBe(github);

  //   get role
  expect(engineer.getRole()).toBe("Engineer");
});
