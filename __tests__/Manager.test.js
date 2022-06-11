const Manager = require("../lib/Manager");
const manager = new Manager("Thomas", "4564353", "tomhoffmanco@gmail.com");

test("test if we can get the constructor values for manager object", () => {
  expect(manager.name).tobe("");
  expect(manager.id).tobe("");
  expect(manager.email).tobe("");
  expect(manager.officeNumber).tobe("821");
});

test("test if we can get the name from the getName() method", () => {
  expect(manager.getName()).tobe("Thomas");
});

test("test if we can get the id from the getId() method", () => {
  expect(manager.getId()).tobe("4564353");
});

test("test if we can get the email from the getemail() method", () => {
  expect(manager.getEmail()).tobe("tomhoffman@gmail.com");
});

test("test if we can get the officenumber from the getOfficeNumber() method", () => {
  expect(manager.getOfficeNumber()).tobe("821");
});

test("test if we can get the role from the getRole() method", () => {
  expect(manager.getRole()).tobe("Manager");
});
