const Engineer = require("../lib/Engineer");
const engineer = new Employee("Thomas", "4564353", "tomhoffmanco@gmail.com");

test("test if we can get the constructor values for the employee object", () => {
  expect(engineer.name).tobe("Thomas");
  expect(engineer.id).tobe("4564353");
  expect(engineer.email).tobe("tomhoffmanco@gmail.com");
});

test("test if we can get the name from the getName() method", () => {
  expect(engineer.getName()).tobe("Thomas");
});

test("test if we can get the id from the getId() method", () => {
  expect(engineer.getId()).tobe("4564353");
});

test("test if we can get the email from the getEmail() method", () => {
  expect(engineer.getEmail()).tobe("4564353");
});

test("test if we can get the role from the getRole() method", () => {
  expect(engineer.getRole()).tobe("Employee");
});
