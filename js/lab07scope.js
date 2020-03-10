function delayMsg() {
setTimeout(booyah, 5000);
document.getElementById("output").innerHTML =
"Wait for it...";
}
function booyah() {
// called when the timer goes off
document.getElementById("output").innerHTML =
"BOOYAH!";
}

timer = null; // stores ID of interval timer
function delayMsg2() {
if (timer === null) {
timer = setInterval(rudy, 1000);
} else {
clearInterval(timer);
timer = null;
}
}
function rudy() { // called each time the timer goes off
document.getElementById("output").innerHTML += "Rudy!";
}

window.rudyTimer=(function () {
    let timer1 = null; // stores ID of interval timer
    /** function to display message */
    function delayMsg2() {
        if (timer1 === null) {
            timer1 = setInterval(rudy, 1000);
        } else {
            clearInterval(timer1);
            timer1 = null;
        }
    }
    /**called each time the timer goes off*/
    function rudy() {
        document.getElementById("output").innerHTML += "Rudy!";
    }
    return {
        delayMsg2
    };
   // document.getElementById("click").onclick = delayMsg2;
}());