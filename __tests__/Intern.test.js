const Intern = require("../lib/Intern");
const intern = new Intern("Thomas", "4564353", "Tomhoffmanco@gmail.com", "MSU");

test("test if we can get the constructor values for manager object", () => {
  expect(intern.name).toBe("Thomas");
  expect(intern.id).toBe("4564353");
  expect(intern.email).toBe("Tomhoffmanco@gmail.com");
  expect(intern.school).toBe("MSU");
});

test("test if we can get the name from the getName() method", () => {
  expect(intern.getName()).toBe("Thomas");
});

test("test if we can get the id from the getId() method", () => {
  expect(intern.getId()).toBe("4564353");
});

test("test if we can get the email from the getemail() method", () => {
  expect(intern.getEmail()).toBe("Tomhoffmanco@gmail.com");
});

test("test if we can get the school from the getSchool() method", () => {
  expect(intern.getSchool()).toBe("MSU");
});

test("test if we can get the role from the getRole() method", () => {
  expect(intern.getRole()).toBe("Intern");
});
