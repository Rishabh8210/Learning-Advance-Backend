/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    let currTime = new Date().getTime();
    let haltTime = currTime + seconds;
    while(haltTime >= currTime){
        currTime = new Date().getTime();
    }
}
sleep(5000)
console.log("Helllpp")