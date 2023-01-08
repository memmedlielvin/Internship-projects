var password, passwordVal, username, usernameVal, email, emailVal, warn, warnText, submit, warning, success, danger, username, email, country;
warning = document.querySelector(".warning");
success = document.querySelector(".success");
danger = document.querySelector(".danger");

submit = document.querySelector("#submit");
warn = document.querySelector("#warn");
warnText = document.querySelector("#warn-text");

submit.addEventListener("click", function () {
  password = document.querySelector("#password");
  passwordVal = document.querySelector("#password").value;
  username = document.querySelector("#username");
  usernameVal = document.querySelector("#username").value;
  email = document.querySelector("#email");
  emailVal = document.querySelector("#email").value;

  country = document.querySelector("select").value;
  submit = document.querySelector("#submit");
  warn = document.querySelector("#warn");
  warnText = document.querySelector("#warn-text");

  if (usernameVal == null && emailVal == null && passwordVal == null) {
    submit.setAttribute("disabled");
    alert("Fill the form");
  } else {
    submit.removeAttribute("disabled");

    if (usernameVal.length <= 2) {
      document.querySelector("#username").style.border = "1px solid red";
      document.querySelector("#userwarntext").innerHTML = "Username should not be less than the minimum 3 charachter";
      document.querySelector("#userwarntext").style.color = "red";
    } else {
      document.querySelector("#username").style.border = "1px solid #ddd";
      document.querySelector("#userwarntext").innerHTML = "";

      if (!emailVal.includes("@")) {
        email.style.border = "1px solid red";
        document.querySelector("#emailwarntext").innerHTML = "Invalid email";
        document.querySelector("#emailwarntext").style.color = "red";
      } else {
        email.style.border = "1px solid #ddd";
        document.querySelector("#emailwarntext").innerHTML = "";
        if (passwordVal.length < 10) {
          warn.style.display = "flex";
          warnText.innerHTML = "Your password is little secure";
          warnText.style.color = "gold";
          warning.style.display = "block";
        } else if (passwordVal === passwordVal.toLowerCase()) {
          warn.style.display = "flex";
          warnText.innerHTML = "Pasword should be uppercase";
          warnText.style.color = "red";
          danger.style.display = "block";
          password.style.border = "1px solid red";
        } else {
          warn.style.display = "flex";
          warnText.innerHTML = "Password is secure";
          warnText.style.color = "green";
          success.style.display = "block";
          password.style.border = "1px solid green";
        }
      }
    }
  }
});
