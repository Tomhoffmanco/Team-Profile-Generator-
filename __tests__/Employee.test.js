const Employee = require("../lib/Employee");
const employee = new Employee("Thomas", "4564353", "Tomhoffmanco@gmail.com");

test("test if we can get the constructor values for the employee object", () => {
  expect(employee.name).toBe("Thomas");
  expect(employee.id).toBe("4564353");
  expect(employee.email).toBe("Tomhoffmanco@gmail.com");
});

test("test if we can get the name from the getName() method", () => {
  expect(employee.getName()).toBe("Thomas");
});

test("test if we can get the id from the getId() method", () => {
  expect(employee.getId()).toBe("4564353");
});

test("test if we can get the email from the getEmail() method", () => {
  expect(employee.getEmail()).toBe("Tomhoffmanco@gmail.com");
});

test("test if we can get the role from the getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});
