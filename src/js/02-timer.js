import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css'

const daysTimer = document.querySelector('span[data-days]')
const hoursTimer = document.querySelector('span[data-hours]')
const minutesTimer = document.querySelector('span[data-minutes]')
const secondsTimer = document.querySelector('span[data-seconds]')

const input = document.querySelector('#datetime-picker')
const buttonStart = document.querySelector('button[data-start]')
buttonStart.disabled = true
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] <= new Date()) {  
          buttonStart.disabled = true
            Notify.failure('Please choose a date in the future')
        } else {
            buttonStart.disabled = false
      }
    console.log(selectedDates[0]);
  },
};

const fp = flatpickr(input, options)

let ms

buttonStart.addEventListener('click', startTimer)
function startTimer() {
    const intervalId = setInterval(() => {
    const selectedDates = fp.selectedDates
    const currentDates = new Date()
    ms = selectedDates[0].getTime() - currentDates.getTime()
    const { formatDays, formatHours, formatMinutes, formatSeconds } = addLeadingZero(ms)

    daysTimer.textContent = formatDays
    hoursTimer.textContent = formatHours
    minutesTimer.textContent = formatMinutes
    secondsTimer.textContent = formatSeconds
    
    if (ms<1000) {
            clearInterval(intervalId)
        }
        
    }, 1000)
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(ms) {
    const { days, hours, minutes, seconds } = convertMs(ms)
    const formatDays = days.toString().padStart(2, 0)
    const formatHours = hours.toString().padStart(2, 0)
    const formatMinutes = minutes.toString().padStart(2, 0)
    const formatSeconds = seconds.toString().padStart(2, 0)
    return {formatDays, formatHours, formatMinutes, formatSeconds}
}
