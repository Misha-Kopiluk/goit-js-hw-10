import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const fieleBtn = document.querySelector("button");
fieleBtn.setAttribute("disabled", true);
const elemInput = document.querySelector("#datetime-picker");
const timeDays = document.querySelector(".value[data-days]");
const timeHours = document.querySelector(".value[data-hours]");
const timeMinutes = document.querySelector(".value[data-minutes]");
const timeSeconds = document.querySelector(".value[data-seconds]");

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    
    if (selectedDate < new Date()) {
      fieleBtn.setAttribute("disabled", true);
      iziToast.error({
        message: "Please choose a date in the future",
        messageColor: "#ffffff",
        backgroundColor: "#ef4040",
      });
    } else {
      fieleBtn.removeAttribute("disabled");
    }
    userSelectedDate = selectedDate;
  },
};

flatpickr("#datetime-picker", options);

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


function addLeadingZero(value) {
  timeDays.textContent = String(value.days).padStart(2, '0');
  timeHours.textContent = String(value.hours).padStart(2, '0');
  timeMinutes.textContent = String(value.minutes).padStart(2, '0');
  timeSeconds.textContent = String(value.seconds).padStart(2, '0'); 
};

function startTime() {
  const startTimeId = setInterval(() => {
    const time = new Date();
    let timeDelta = userSelectedDate - time;
    if (timeDelta < 0) {
      clearInterval(startTimeId);
      fieleBtn.removeAttribute("disabled");
      elemInput.removeAttribute("disabled");
      return;
    }
    const timerStart = convertMs(timeDelta);
    addLeadingZero(timerStart);
    fieleBtn.setAttribute("disabled", true);
    elemInput.setAttribute("disabled", true);
  }, 1000);
}
fieleBtn.addEventListener("click", startTime);

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


