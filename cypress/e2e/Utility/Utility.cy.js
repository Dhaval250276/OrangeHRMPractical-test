const faker = require('faker');

export class Utils {

    Utils() {

    }
    generareRandomNum() {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        return randomNumber;
    }
    generateUserInfo() {
        var fName = faker.name.firstName()
        var lName = faker.name.lastName()
        var pass = "Dhyey@23032014"
        var user = {

            firstName: fName,
            lastName: lName,
            userName: fName + '_' + this.generareRandomNum(),
            password: pass,
            confPass: pass

        }
        return user;
    }
    writeJson(fileName, valArray) {
        var obj = new Array()
        obj.push(valArray)
        cy.writeFile(fileName, JSON.stringify(obj))
    }
    appendJson(fileName, valArray) {
        cy.readFile(fileName).then((data) => {
            var obj = new Array()
            obj = data
            obj.push(valArray)
            cy.writeFile(fileName, JSON.stringify(obj))
        })
    }

    readJson(fileName) {
        var arr = new Array()
        cy.readFile(fileName).then((data) => {

            arr = data

        })
        return arr
    }
    lengthJson(fileName) {
        var len = 0;
        cy.readFile(fileName).then((data) => {
            var arr = new Array()
            arr = data
            len = arr.length
        })
        return len
    }

}
