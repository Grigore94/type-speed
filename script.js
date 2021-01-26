const textWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval;
var timerRunns = false;

function leadinZero(time) {
    if(time <= 9) {
        time = "0" + time;
    }
    return time;
}

function runTimer() {
    let currentTime = leadinZero(timer[0]) + ":" + leadinZero(timer[1]) + ":" + leadinZero(timer[2]);
theTimer.innerHTML = currentTime;
timer[3]++;

timer[0] = Math.floor((timer[3]/100)/60);
timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);

    //acurating border color in order with your spelling
    if(textEntered == originText) {
        //clearing interval
        clearInterval(inteval);
        textWrapper.style.borderColor = "#429890";  
   } else {
       if(textEntered == originTextMatch) {
           textWrapper.style.borderColor = "#65CCF3";
       } else {
        textWrapper.style.borderColor = "#E95D0F";
   } 
}

}
//start
function start() {
    let textEnteredLength = testArea.value.length;
    if(textEnteredLength === 0 && !timerRunns) {
        timerRunns = true;
        interval = setInterval(runTimer,10)
    }
    console.log(textEnteredLength)
}
//reset
function reset(){
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunns = false;
    
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    textWrapper.style.borderColor = "grey";
}

testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);