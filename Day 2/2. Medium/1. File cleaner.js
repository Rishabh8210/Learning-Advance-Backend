const fs = require('fs')

function writeToAsyncFun(cleanData){
    fs.writeFile("./dummy.txt", cleanData, (err) => {
        if(err){
            console.log("Error Found: ");
            throw err;
        }
        console.log("Data Saved");
    })
}
function readFromAsyncFun(){
    fs.readFile('./dummy.txt', 'utf-8', (err, data) => {
        if(err){
            console.log("Error Found :");
            throw err;
        }
        const readedData = data;
        // Clean the data using inbuilt methods 
        // const getAllWords = readedData.replace(/\s+/g, ' ').trim();

        // Manually;
        let tempWord = "";
        let cleanData = "";
        for(let i = 0; i < readedData.length; i++){
            if(readedData[i] == ' '){
                if(tempWord) {
                    cleanData += tempWord;
                    cleanData += ' ';
                    tempWord = "";
                }
            }
            else {
                tempWord += readedData[i];
            }
        }
        if(tempWord) {
            cleanData += tempWord;
            tempWord = "";
        }
        console.log(cleanData);
        writeToAsyncFun(cleanData);
    })
} 

readFromAsyncFun();
