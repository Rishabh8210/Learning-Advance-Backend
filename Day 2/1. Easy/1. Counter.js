let target = 0
let intervalId = setInterval(() => {
    if(target == 100){
        console.log("You reached at your target", target)
        clearInterval(intervalId);
    }else{
        console.log(target);
        target += 10;
    }
}, 1000)
