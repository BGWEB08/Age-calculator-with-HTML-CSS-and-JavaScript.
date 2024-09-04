let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let yourAge = document.getElementById("age");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let birthYear = birthDate.getFullYear();

  let today = new Date();

  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let years, months, days;

  years = currentYear - birthYear;

  if (currentMonth >= birthMonth) {
    months = currentMonth - birthMonth;
  } else {
    years--;
    months = 12 + currentMonth - birthMonth;
  }

  if (currentDay >= birthDay) {
    days = currentDay - birthDay;
  } else {
    months--;
    days = getDaysInMonth(birthYear, birthMonth) + currentDay - birthDay;
  }

  if (months < 0) {
    months = 11;
    years--;
  }

  yourAge.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months and <span>${days}</span> days.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
