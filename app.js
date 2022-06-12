const inquirer = require("inquirer");
const path = require("path");

const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateSite = require("./src/generate-site.js");
const internal = require("stream");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        mesasge: "What is your name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        mesasge: "Enter your employee Id (Required)",
        validate: (employeeID) => {
          if (employeeID) {
            return true;
          } else {
            console.log("Please enter your employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        mesasge: "Enter your email address (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        mesasge: "Enter your officeNumber address (Required)",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter your office number!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answeres.employeeID,
        answers.email,
        answeres.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select which option  you would like to continue with:",
        choices: [
          "add an engineer",
          "add an intern",
          "finish building my team",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.menu) {
        case "add an engineer":
          promptEngineer();
          break;
        case "add an intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
};

const promptEngineer = () => {
  console.log(`================
                   Add a New Engineer 
                 ================`);

  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the engineer? (Required)",
      validate: (engineerName) => {
        if (engineerName) {
          return true;
        } else {
          console.log("Please enter the name of the engineer!");
          return false;
        }
      },
    },
    {
        type: "input",
        name: "employeeId",
        message: "Please enter employee ID (Required)",
        validate: employeeId => {
            if (employeeId) {
            return true;
          } else {
            console.log("Please enter your employee ID!");
            return false;
      }
     }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter employee ID (Required)",
        validate: email => {
            if (email) {
            return true;
          } else {
            console.log("Please enter a valid email address!");
            return false;
    }
  ]);


