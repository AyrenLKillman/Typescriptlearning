var startButton = document.querySelector('[data-action="start"]');
var stopButton = document.querySelector('[data-action="stop"]');
var resetButton = document.querySelector('[data-action="reset"]');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var timerTime = 0;
var interval;
var isRunning = false;
function startTimer() {
    if (isRunning)
        return;
    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}
function stopTimer() {
    if (!isRunning)
        return;
    isRunning = false;
    clearInterval(interval);
}
function resetTimer() {
    stopTimer();
    timerTime = 0;
    minutes.textContent = '00';
    seconds.textContent = '00';
}
function incrementTimer() {
    timerTime += 1;
    var numberMinutes = Math.floor(timerTime / 60);
    var numberSeconds = timerTime % 60;
    minutes.textContent = pad(numberMinutes);
    seconds.textContent = pad(numberSeconds);
}
function pad(number) {
    return (number < 10) ? '0' + number : number;
    // if (number < 10) {
    //     return '0' + number;
    // } else {
    //     return number;
    // }
}
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
