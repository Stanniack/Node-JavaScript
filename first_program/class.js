class Person {
    constructor (name) {
        this.name = name
    }

    toString () {
        return `Person name: ${this.name}`
    }
}

module.exports = Person