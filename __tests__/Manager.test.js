const Manager = require("../lib/Manager");
const manager = new Manager(
  "Thomas",
  "4564353",
  "Tomhoffmanco@gmail.com",
  "821"
);

test("test if we can get the constructor values for manager object", () => {
  expect(manager.name).toBe("Thomas");
  expect(manager.id).toBe("4564353");
  expect(manager.email).toBe("Tomhoffmanco@gmail.com");
  expect(manager.officeNumber).toBe("821");
});

test("test if we can get the name from the getName() method", () => {
  expect(manager.getName()).toBe("Thomas");
});

test("test if we can get the id from the getId() method", () => {
  expect(manager.getId()).toBe("4564353");
});

test("test if we can get the email from the getemail() method", () => {
  expect(manager.getEmail()).toBe("Tomhoffmanco@gmail.com");
});

test("test if we can get the officenumber from the getOfficeNumber() method", () => {
  expect(manager.getOfficeNumber()).toBe("821");
});

test("test if we can get the role from the getRole() method", () => {
  expect(manager.getRole()).toBe("Manager");
});
