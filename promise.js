// Syntax One

const mpromise = new Promise((resolve, reject) => {
    if (true) {
        resolve("success")
    } else {
        reject("failure")
    }
})
let x = mpromise.then(result => {
    return result
}).catch((error) => {
    return error
})

console.log(x)


// mpromise.then(result => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// Syntax Two

function checkeven(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

async function getnum(num) {
    try {
        let result = await checkeven(num)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

getnum(4)


function delay(s){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`running after ${s} seconds`)
        },s)
    })
}

delay(100).then(console.log)

