const employeeChoice = ['engineer', 'intern', 'manager'];

const userQues = [
    {type: 'input',
    name: 'name',
    message: 'what is the name of the employee?',
    validate: answer => {
        if (typeof answer !== 'string' || typeof answer == ' ') {
            console.log("please enter a valid name");
            return false;
        }
        else {
            return true;}
        }
    },
    {type: 'input',
    name: 'email',
    message: 'Enter email of the employee',
    validate: answer => {
        if (typeof answer !== 'string' || typeof answer == ' ') {
            console.log("please enter a valid email");
            return false;}
        else {
            return true;}
        }
    },
    {type: 'list',
    name: 'role',
    message: 'Choose the role of the employee',
    choices: employeeChoice,
    validate: answer => {
        if (answer.length !== 1) {
            console.log('You must to select only one option');
            return false;
        } else {
            return true;
            }
        }
    },
    {type: 'input',
    name: 'gitHubName',
    message: 'What is the employees GitHub username?',
    when: answer => {return answer.role === 'engineer';},
    validate: answer => {
        if (typeof answer !== 'string' || typeof answer == ' ') {
            console.log("please e nter a valid answer");
            return false;}
        else {
            return true;}
    }
    },
    {type: 'input',
    name: 'schoolName',
    message: 'What is the name of the school intern is attending?',
    when: answer => {return answer.role === 'intern';},
    validate: answer => {
        if (typeof answer !== 'string' || typeof answer == ' ') {
            console.log("please enter a valid answer");
            return false;}
        else {
            return true;}
    }
    },
    {type: 'input',
    name: 'officeNumber',
    message: 'What is the employee office number?',
    when: answer => {return answer.role === 'manager';},
    validate: answer => {
        if (typeof answer !== 'string' || typeof answer == ' ') {
            console.log("please enter a valid office number");
            return false;}
        else {
            return true;}
        }
    },
];

module.exports = userQues


/*    {type: 'input',
name: 'id',
message: 'Enter id of the employee',
validate: answer => {
    if (typeof answer !== 'number' || typeof answer == ' ') {
        console.log("please enter a valid id");
        return false;}
    else {
        return true;}
    }
},
*/