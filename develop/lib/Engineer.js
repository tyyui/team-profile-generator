const Employee = require ('./Employee.js')

class Engineer extends Employee {
    constructor (name, id, email, gitHubName) {
        super (name, id, email);
        this.gitHub = gitHubName;
    }
    getGithub() {
        return this.gitHub;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer