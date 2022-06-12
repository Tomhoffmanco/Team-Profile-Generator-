const Intern = require("../lib/Intern");
const intern = new Intern("Thomas", "4564353", "tomhoffmanco@gmail.com");

test("test if we can get the constructor values for manager object", () => {
  expect(intern.name).tobe("");
  expect(intern.id).tobe("");
  expect(intern.email).tobe("");
  expect(intern.school).tobe("MSU");
});

test("test if we can get the name from the getName() method", () => {
  expect(intern.getName()).tobe("Thomas");
});

test("test if we can get the id from the getId() method", () => {
  expect(intern.getId()).tobe("4564353");
});

test("test if we can get the email from the getemail() method", () => {
  expect(intern.getEmail()).tobe("tomhoffman@gmail.com");
});

test("test if we can get the officenumber from the getOfficeNumber() method", () => {
  expect(intern.getOfficeNumber()).tobe("821");
});

test("test if we can get the role from the getRole() method", () => {
  expect(intern.getRole()).tobe("Manager");
});
