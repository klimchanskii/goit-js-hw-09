import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

 const refs = {
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  }

  refs.startBtn.addEventListener("click",timerTime)

refs.startBtn.disabled = true;

let intervalId = null;

let choosenDate;
const takeData = document.querySelector("#datetime-picker")
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0]< options.defaultDate){
            Notify.failure("Please choose a date in the future");
            return;
        };
        refs.startBtn.disabled = false;
        choosenDate = selectedDates[0].getTime();      
    },
  };

  function timerTime () {
    intervalId = setInterval(() => {
        
       
        const currentTime = Date.now();
        const deltaTime = convertMs(choosenDate - currentTime);

        updateClockFace(deltaTime);

        if (choosenDate - Date.now() < 1000) {
            Notify.success('time is over');
            clearInterval(intervalId);
          };
      }, 1000);
    }

    function updateClockFace({days, hours, minutes, seconds}){

        refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.minutes.textContent = minutes;
        refs.seconds.textContent = seconds;
    }

    function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = pad(Math.floor(ms / day));
        // Remaining hours
        const hours = pad(Math.floor((ms % day) / hour));
        // Remaining minutes
        const minutes = pad(Math.floor(((ms % day) % hour) / minute));
        // Remaining seconds
        const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

        return { days, hours, minutes, seconds };
      }
 
      function pad(value) {
        return String(value).padStart(2, '0');
      }

const fp = flatpickr(takeData, options)

