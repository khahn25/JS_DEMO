class Animal {

    constructor(name, speed) {
        console.log("Constructor is called", name)
        this.name = name
        this.speed = speed
    }
    

    run(speed) {
        this.speed += speed
        console.log(`Run called, speed equal to ${ this.speed }`)
    }

    stop() {
        this.speed = 0
        console.log("Animal stopped")
    }

    static add(a, b) {
        return a + b
    }

}

class Rabbit extends Animal {

    // constructor(...args) {
    //     // console.log("args", args)
    //     // super(args[0], args[1])
    // }

    run(speed) {
        this.speed *= speed
        console.log(`${this.speed}`)
    }

}

let rabbitA = new Rabbit("Rabbit A", 100)
rabbitA.run(100)

// console.log(Animal.add(10, 30))