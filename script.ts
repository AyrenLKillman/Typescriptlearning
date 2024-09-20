const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime: number = 0;
let interval: number;
let isRunning: boolean = false;



function startTimer() {
    if (isRunning) return;

    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    timerTime = 0;

    minutes!.textContent = '00';
    seconds!.textContent = '00';
}

function incrementTimer() {
    timerTime += 1;

    const numberMinutes = Math.floor(timerTime / 60);
    const numberSeconds = timerTime % 60;

    minutes!.textContent = pad(numberMinutes);
    seconds!.textContent = pad(numberSeconds);
}


function pad(number) {
    return (number < 10) ? '0' + number : number;
    // if (number < 10) {
    //     return '0' + number;
    // } else {
    //     return number;
    // }

}

startButton!.addEventListener('click', startTimer);
stopButton!.addEventListener('click', stopTimer);
resetButton!.addEventListener('click', resetTimer);
