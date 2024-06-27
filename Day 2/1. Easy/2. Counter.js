let target = 0;
let id;
function customSetInterval(){
    id = setTimeout(() => {
        target += 10;
        console.log(target);
        clearTimeout(id);
        if(target != 100)
            setTimeout(customSetInterval, 0);
    }, 1000)
}
customSetInterval();