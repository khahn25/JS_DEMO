function async_demo_function(callback, time_in_seconds) {
    setTimeout(callback, time_in_seconds * 1000)
}

function callback_function() {
    console.log("Callback is called")
}

function callback_function2() {
    console.log("Callback2 is called")
}

console.log("Start")
async_demo_function(callback_function2, 5)
console.log("Here")