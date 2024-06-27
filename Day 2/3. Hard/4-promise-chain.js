/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved after 1 second");
        }, 1000)
    })
    return promise;
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved after 2 second");
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved after 3 second");
        }, 3000)
    })
}

function calculateTime() {
    const startTime = new Date().getTime();
    const promise1 = waitOneSecond()
    .then((value) => {
        console.log(value);
        console.log("Now calling it for second promise")
        waitTwoSecond()
        .then((value) => {
            console.log(value);
            console.log("Now calling it for third promise")
            waitThreeSecond()
            .then((value) => {
                console.log(value)
                console.log("All Promise is resolved")
                const currTime = new Date().getTime();
                console.log("Total time taken to resolve all promise is "+ (currTime - startTime)/1000+"s");
            })
        })
    })
}
calculateTime()