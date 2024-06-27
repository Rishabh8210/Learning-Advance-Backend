const fs = require('fs')
const dataToWrite = "Hello Developers, Welcome to the Advance learning repository.";

function writeFromFileAsync(){
    console.log("Start Writing from async func")
    fs.writeFile('./dummy.txt', dataToWrite, (err) => {
        if(err){
            console.log("Error Found:");
            throw err;
        }
        console.log("Data saved !");
    })
    console.log("End Writing from async func")
}

function writeFromFileSync(){
    console.log("Start Writing from sync func")
    try{
        fs.writeFileSync('./dummy.txt', dataToWrite);
        console.log("Data saved !");
    }catch(err){
        console.log(err);
        throw err;
    }
    console.log("End Writing from sync func")
}

console.log("Start")
writeFromFileAsync();

writeFromFileSync();
console.log("End");