var password, passVal, warn, warnText, submit, warning, success, danger, username, email;
warning = document.querySelector(".warning");
success = document.querySelector(".success");
danger = document.querySelector(".danger");

submit = document.querySelector("#submit");
warn = document.querySelector("#warn");
warnText = document.querySelector("#warn-text");

submit.addEventListener("click", function () {
  password = document.querySelector("#password");
  username = document.querySelector("#username").value;
  email = document.querySelector("#email").value;
  passVal = document.querySelector("#password").value;
  submit = document.querySelector("#submit");
  warn = document.querySelector("#warn");
  warnText = document.querySelector("#warn-text");

  if (username == null && email == null && passVal == null) {
    submit.setAttribute("disabled");
  } else {
    if (passVal.length < 10) {
      warn.style.display = "flex";
      warnText.innerHTML = "Your password is little secure";
      warnText.style.color = "gold";
      warning.style.display = "block";
      submit.setAttribute("disabled");
    } else if (passVal === passVal.toLowerCase()) {
      warn.style.display = "flex";
      warnText.innerHTML = "Enter a valid Password";
      warnText.style.color = "red";
      danger.style.display = "block";
      password.style.border = "1px solid red";
      submit.setAttribute("disabled");
    } else {
      warn.style.display = "flex";
      warnText.innerHTML = "Password is secure";
      warnText.style.color = "green";
      success.style.display = "block";
      password.style.border = "1px solid green";
    }
  }
});
