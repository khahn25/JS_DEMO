let promise_demo = new Promise(function(resovle, reject) {
    setTimeout(function() {
        console.log("Function inside promise is called")
        resovle("Result from promise")
    }, 5000)
})

promise_demo.then(function(result) {
    console.log("start")
    console.log(result)
    console.log("stop")
})

function div(a, b) {
    return new Promise((resovle, reject) => {
        if(b == 0) {
            reject("Can't div by zero")
        }else {
            resovle(a/b)
        }
    })
}

// div(2, 0).then(result => {
//     console.log(result)
// }).catch(err => {
//     console.log(err)
// })

// let division = new Promise((resovle, reject) => {
//     reject("Lỗi")
// })

// division.then(result => {
//     console.log(result)
// }).catch(err => {
//     console.log(err)
// })