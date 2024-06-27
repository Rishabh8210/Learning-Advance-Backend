const fs = require('fs')

function readFromFileAsync(){
    console.log("Start Reading from async func")
    fs.readFile('./dummy.txt', 'utf-8', (err, data) => {
        if(err){
            console.log("Error Found !")
            throw err;
        }
        console.log(data)
    })
    console.log("End Reading from async func")
}

function readFromFileSync(){
    console.log("Start Reading from sync func")
    const data = fs.readFileSync('./dummy.txt', 'utf-8');
    if(data){
        console.log(data)
    }
    console.log("End Reading from sync func")
}

console.log("Start")
readFromFileAsync();

readFromFileSync();
console.log("End");