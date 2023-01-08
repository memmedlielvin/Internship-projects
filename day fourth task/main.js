/*
var btns, display;

btns.map(function (btn) {
  btn.addEventListener("click", (e) => {
    btns = Array.from(document.getElementsByClassName("btn"));
    display = document.getElementById("#display");

    switch (e.target.innerText) {
      case "7":
        display.innerText = "7";
      case "8":
        display.innerText = "9";
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
});*/

var btns, btnNums, btnNumsArray, display, clearAll, btnDiv, result;
btns = document.querySelectorAll(".btn");
result = document.querySelector("#result");

btnNums = document.querySelectorAll(".btn-num");
btnNumsArray = Array.from(btnNums);
display = document.querySelector("#display");

btns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    switch (e.target.innerHTML) {
      case "C":
        display.innerHTML = " ";
        break;
      case "←":
        display.innerText = display.innerText.slice(0, -1);

        break;

      case "x":
        display.innerText = e.target.innerHTML;
        result.innerText *= display.innerHTML;

        break;

      case "=":
        if (isNaN(e.target.innerHTML)) {
          result.innerHTML = " ";
        } else {
          result.innerHTML += e.target.innerHTML;
        }
        break;

      default:
        display.innerHTML += e.target.innerHTML;
    }
  });
});

/*btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.target.innerHTML != "=") {
      display.innerText += e.target.innerText;

      if (e.target.innerText == "C") {
        display.innerText = " ";
      } else if (e.target.innerText == "←") {
        display.innerText = display.innerText.slice(0, -1);
      } else if (e.target.innerText == "x" && isNaN(!e.target.innerText)) {
        result.innerText *= display.innerText;
      }
    }
  });
});*/
