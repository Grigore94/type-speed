const textWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval;

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
        textWrapper.style.borderColor = "red";  
   } else {
       if(textEntered == originTextMatch) {
           textWrapper.style.borderColor = "blue";
       } else {
        textWrapper.style.borderColor = "yellow";
   } 
}

}
//start
function start() {
    let textEnteredLength = testArea.value.length;
    if(textEnteredLength === 0) {
        interval = setInterval(runTimer,10)
    }
    console.log(textEnteredLength)
}
//reset
function reset(){
    console.log("reset button pressed")
}

testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);