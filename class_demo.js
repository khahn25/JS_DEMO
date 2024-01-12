class User {
    // name = "65CS";

    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log("Helooo")
    }

    set name(value) {
        if(value.length < 4) {
            console.log("The name is greater than equal 4")
        }
    }

    get name() {
        console.log("getter is called")
        return "ABCD"
    }

}

let user = new User("65CS2")
user.sayHi()
console.log(user.name)