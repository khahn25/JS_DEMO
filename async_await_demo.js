function div(a, b) {
    return new Promise((resovle, reject) => {
        if(b == 0) {
            reject("Can't div by zero")
        }else {
            resovle(a/b)
        }
    })
}

async function main() {
    try {
        let result = await div(2, 2)
        console.log(result)
    } catch (err) {
        console.log(err)
    }
    
}

main()