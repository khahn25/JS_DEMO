let userA = {
    name: "Nguyễn Văn A",
    address: "Hà Nội",
    age: 18
}

let userB = { ...userA, gender: "Male", age: 20 }

userA.address = "Việt Nam"

console.log(userB)