const Intern = require("../lib/Intern");

test("creating new intern object", () => {
  const intern = new Intern(
    "Bav",
    "1996",
    "bavkudhail@gmail.com",
    "male1",
    "MIT"
  );
  //   intern name
  expect(intern.name).toBe("Bav");
  //   intern ID
  expect(intern.id).toBe("1996");
  //   intern email
  expect(intern.email).toBe("bavkudhail@gmail.com");
  //    intern school
  expect(intern.getSchool()).toBe("MIT");
  //   intern role
  expect(intern.getRole()).toBe("Intern");
});
