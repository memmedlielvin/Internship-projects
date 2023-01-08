const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".fa-solid");

let datesOfMontharr,
  date = new Date(),
  currentYear = date.getFullYear(),
  currentmonth = date.getMonth();

const months = [
  "Januray",
  "February",
  "Marc",
  "Aprel",
  "May",
  "June",
  "Jule",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function renderCalendar() {
  let firstDayOfMonth = new Date(currentYear, currentmonth, 1).getDay(),
    lastDateOfMonth = new Date(currentYear, currentmonth + 1, 0).getDate(),
    lastDayOfMonth = new Date(
      currentYear,
      currentmonth,
      lastDateOfMonth
    ).getDay(),
    lastDateOfLastMonth = new Date(currentYear, currentmonth, 0).getDate();

  let liTag = "";

  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currentmonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class=""${isToday}>${i}</li>`;
  }

  for (let i = lastDateOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  currentDate.innerText = ` ${months[currentmonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currentmonth = icon.id === "prev" ? currentmonth - 1 : currentmonth + 1;

    if (currentmonth < 0 || currentmonth > 11) {
      date = new Date(currentYear, currentmonth);
      currentYear = date.getFullYear();
      currentmonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});
