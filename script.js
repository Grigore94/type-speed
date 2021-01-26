const textWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

function spellCheck() {
    let textEntered = testArea.nodeValue;
    console.log(textEntered);
}

function start() {
    let textEnteredLength = testArea.nodeValue.length;
    console.log(textEnteredLength)
}

function reset(){
    console.log("reset button pressed")
}

testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);