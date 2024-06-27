/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
    const promise1 = waitOneSecond();
    const promise2 = waitTwoSecond();
    const promise3 = waitThreeSecond();

    Promise.all([promise1, promise2, promise3])
        .then((value) => {
            console.log(value)
            const currTime = new Date().getTime();
            console.log("Total time taken to resolve all promise is "+ (currTime - startTime)/1000+"s");
        })
        .catch((value) => {
            console.log(value);
        })

}

calculateTime()