/*const c = document.querySelector(".button-c");
const div = document.querySelector(".div");
const modul = document.querySelector(".modul");
const multi = document.querySelector(".multi");
const seven = document.querySelector(".button-7");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const subSum = document.querySelector(".subSum");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const sub = document.querySelector(".sub");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const sum = document.querySelector(".sum");
const dott = document.querySelector(".dott");
const zero = document.querySelector(".zero");
const equal = document.querySelector(".equal");

var button_c = document.querySelector(".button-c");
var button_c_val = button_c.value;

function show_c() {
  document.querySelector("#display").innerHTML += "c";
}

function show_div() {
  document.querySelector("#display").innerHTML += "/";
}

function show_modul() {
  document.querySelector("#display").innerHTML += "%";
}

function show_multiple() {
  document.querySelector("#display").innerHTML += "*";
}

function show_seven() {
  document.querySelector("#display").innerHTML += "7";
}

function show_eight() {
  document.querySelector("#display").innerHTML += "8";
}

function show_nine() {
  document.querySelector("#display").innerHTML += "9";
}

function show_subSum() {
  document.querySelector("#display").innerHTML += "+/-";
}

function show_four() {
  document.querySelector("#display").innerHTML += "4";
}

function show_five() {
  document.querySelector("#display").innerHTML += "5";
}

function show_six() {
  document.querySelector("#display").innerHTML += "6";
}

function show_sub() {
  document.querySelector("#display").innerHTML += "-";
}

function show_one() {
  document.querySelector("#display").innerHTML += "1";
}

function show_two() {
  document.querySelector("#display").innerHTML += "2";
}

function show_three() {
  document.querySelector("#display").innerHTML += "3";
}

function show_sum() {
  document.querySelector("#display").innerHTML += "+";
}

function show_dott() {
  document.querySelector("#display").innerHTML += ".";
}

function show_zero() {
  document.querySelector("#display").innerHTML += "0";
}

function show_del() {
  document.querySelector("#display").innerHTML += "Del";
}

function show_equal() {
  document.querySelector("#display").innerHTML += "=";
}
*/

/*lassttt*/
let buttons = Array.from(document.getElementsByClassName("button"));
let display = document.getElementById("display");

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;

      case "del":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        break;

      default:
        display.innerText += e.target.innerText;
    }
  });
});
