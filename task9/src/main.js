var btn_start, hidden_display, show_display, time, questions, word;

questions = [
  { title: "salam", description: "sagol" },
  { title: "salam1", description: "sagol1" },
  { title: "salam2", description: "sagol2" },
];

btn_start = document.querySelector("#btn_start");
hidden_display = document.querySelector("#hidden_display");
show_display = document.querySelector("#show_display");
time = document.querySelector("#time");
btn_start.addEventListener("click", startGame);

function startGame() {
  hidden_display = document.querySelector("#hidden_display");
  show_display = document.querySelector("#show_display");
  time = document.querySelector("#time");

  hidden_display.style.display = "flex";
  show_display.style.display = "none";
  time.style.backgroundColor = "#30FC37";

  document.querySelector("#show_display p").forEach(item, function () {
    item.style.marginLeft = "5px";
    item.style.transition = "all 2s";
    item.style.borderRadius = "5px";
  });

  setInterval(function () {
    for (i = 25; i >= 0; i--) {
      document.querySelector("#time p").innerHTML = i;
    }
  }, 1000);
}
