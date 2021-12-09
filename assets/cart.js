const dateControl = document.querySelector('input[type="date"]');
let currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

currentDate =
  `${currentYear}` + "-" + `${currentMonth}` + "-" + `${currentDay}`;
console.log(currentDate);

dateControl.min.value = currentDate;
