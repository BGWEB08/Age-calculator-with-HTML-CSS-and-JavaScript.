let userInput = document.getElementById("date");
let yourAge = document.getElementById("age");

function calculateAge() {
  let birthDate = userInput.value;
  
  if (!/^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
    yourAge.innerHTML = "Please enter a valid date in YYYY-MM-DD format.";
    return;
  }
  
  let birthDateObj = new Date(birthDate);

  if (isNaN(birthDateObj.getTime())) {
    yourAge.innerHTML = "Invalid date. Please enter a valid date.";
    return;
  }

  let d1 = birthDateObj.getDate();
  let m1 = birthDateObj.getMonth() + 1;
  let y1 = birthDateObj.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  yourAge.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days.`;

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
}
