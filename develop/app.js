const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const question = require("./lib/question");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let id = 0;
const roster = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function promptUser() {
    console.log ('////////Thank you for choosing the Team Profile Generator/////////');
    return inquirer.prompt (question)
} 

function resume () {
    inquirer.prompt([{
    type:'confirm',
    name: 'end',
    message: 'Would you like to enter another employee information?'
    }]).then(
        answer => answer.end ? init() : generateHTML ());
};

async function init () {
    try {
        let resOne = await promptUser();
        switch (resOne.role) {
            case 'engineer':
                ++id;
                const newEngineer = new Engineer (resOne.name, id, resOne.email, resOne.gitHubName);
                roster.push(newEngineer);
                resume();
                break;
            case 'intern':
                ++id;
                const newIntern = new Intern (resOne.name, id, resOne.email, resOne.schoolName);
                roster.push(newIntern);
                resume();
                break;
            case 'manager':
                ++id;
                const newManager = new Manager (resOne.name, id, resOne.email, resOne.officeNumber);
                roster.push(newManager);
                resume();
                break;
            default:
                resume();
        };
    } catch (err) {
        return console.log(err);
    }
}

async function generateHTML() {
    try{
        fs.writeFileSync(outputPath, render(roster), 'utf-8')
        console.log('successfully created html');
    }
    catch (err) {
        console.log(err);
    }
}

init();