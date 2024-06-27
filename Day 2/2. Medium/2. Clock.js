// Format HH:MM:SS Am/Pm
const currTime = new Date();
let currHour = currTime.getHours();
let currMin = currTime.getMinutes();
let currSec = currTime.getSeconds();

setInterval(() => {
    if(currSec == 60){
        if(currMin == 60){
            if(currHour == 24){
                currHour = 0;
            }
            currHour++;
            currMin = 0;
        }
        currMin++;    
        currSec = 0;
    }
    let HH = "", MM = "", SS = "";
    HH = (currHour < 10) ? '0'+currHour : currHour;
    MM = (currMin < 10) ? '0'+currMin : currMin;
    SS = (currSec < 10) ? '0'+currSec : currSec;
    console.log(HH + ":"+MM + ":"+SS+ ((currHour >= 12) ? " Pm": " Am"));
    currSec++;
},1000)