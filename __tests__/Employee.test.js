const Employee = require("../lib/Employee");
const employee = new Employee("Thomas", "4564353", "tomhoffmanco@gmail.com");

test("test if we can get the constructor values for the employee object", () => {
  expect(employee.name).tobe("Thomas");
  expect(employee.id).tobe("4564353");
  expect(employee.email).tobe("tomhoffmanco@gmail.com");
});

test("test if we can get the name from the getName() method", () => {
  expect(employee.getName()).tobe("Thomas");
});

test("test if we can get the id from the getId() method", () => {
  expect(employee.getId()).tobe("4564353");
});

test("test if we can get the email from the getEmail() method", () => {
  expect(employee.getEmail()).tobe("4564353");
});

test("test if we can get the role from the getRole() method", () => {
  expect(employee.getRole()).tobe("Employee");
});
