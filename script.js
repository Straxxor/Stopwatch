const seconds = document.querySelector('#second-mark');
const minutes = document.querySelector('#minute-mark');
const hours = document.querySelector('#hour-mark');
const count = document.querySelector('#mil-mark');
const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');

count.textContent = 0
seconds.textContent = 0
minutes.textContent = 0
hours.textContent = 0

startButton.addEventListener('click', () => {
    timer = true;
    stopWatch();
});

stopButton.addEventListener('click', () => {
    timer = false;
})

function stopWatch() {
    if (timer) {
        count.textContent++;

        if(count.textContent == 100) {
            seconds.textContent++;
            count.textContent = 0;
        }
        if (seconds.textContent == 60) {
            minutes.textContent++;
            seconds.textContent = 0;

        }
        if (minutes.textContent == 60) {
            hours.textContent++;
            seconds.textContent = 0;
            minutes.textContent = 0;
        }
        setTimeout(stopWatch, 10)
    }
}
