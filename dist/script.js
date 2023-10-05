const timerRef = document.querySelector(".timer-display");
const start_btn = document.getElementById("start-timer");
const stop_btn = document.getElementById("stop-timer");
const reset_btn = document.getElementById("reset-timer");

let seconds = 0;
let int = null;

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);


function timer () {
    
    let hrs = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - (hrs * 3600)) / 60);
    let sec = seconds % 60;

    if (sec < 10) sec = '0' + sec;
    if (min < 10) min = '0' + min;
    if (hrs < 10) hrs = '0' + hrs;

    
    timerRef.innerHTML = `${hrs}:${min}:${sec}`;
    seconds++;G
}

function start () {
    if (int){
        return
    }
    int = setInterval(timer, 1000);
}

function stop () {
    clearInterval(int);
    int = null;
}

function reset (){
    stop();
    seconds = 0;
    timerRef.innerHTML = '00:00:00';
}