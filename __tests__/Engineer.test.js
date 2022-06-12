const Engineer = require("../lib/Engineer");
const engineer = new Engineer(
  "Thomas",
  "4564353",
  "Tomhoffmanco@gmail.com",
  "Tomhoffmanco/github.com"
);

test("test if we can get the constructor values for the employee object", () => {
  expect(engineer.name).toBe("Thomas");
  expect(engineer.id).toBe("4564353");
  expect(engineer.email).toBe("Tomhoffmanco@gmail.com");
  expect(engineer.github).toBe("Tomhoffmanco/github.com");
});

test("test if we can get the name from the getName() method", () => {
  expect(engineer.getName()).toBe("Thomas");
});

test("test if we can get the id from the getId() method", () => {
  expect(engineer.getId()).toBe("4564353");
});

test("test if we can get the email from the getEmail() method", () => {
  expect(engineer.getEmail()).toBe("Tomhoffmanco@gmail.com");
});

test("test if we can get the github user name from the getGithub() method", () => {
  expect(engineer.getGithub()).toBe("Tomhoffmanco/github.com");
});

test("test if we can get the role from the getRole() method", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
