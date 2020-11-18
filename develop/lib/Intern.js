const Employee = require ('./Employee.js')

class Intern extends Employee {
    constructor (name, id, email, schoolName) {
        super (name, id, email);
        this.school = schoolName;
    }
    getSchool () {
        return this.school;
    }
    getRole () {
        return 'Intern';
    }
}

module.exports = Intern