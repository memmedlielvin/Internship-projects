var titleVal,
  priorityVal,
  dataContainer,
  dataInnerContainer,
  dataInnerLeft,
  dataInnerRight,
  paragraf,
  titleValArr,
  priorityValArr,
  y,
  span,
  add,
  btnDelete,
  btnEdit,
  xhr;

add = document.querySelector(".addNew");
add.addEventListener("click", showData);
titleValArr = [];
priorityValArr = [];

function showData() {
  titleVal = document.querySelector("#title").value;
  priorityVal = document.querySelector("#priority").value;
  dataContainer = document.querySelector("#data");
  if (titleVal == "") {
    alert("Please write Title and choose Priority");
  } else {
    dataInnerContainer = document.createElement("div");
    dataInnerContainer.className = "data-inner";
    dataContainer.appendChild(dataInnerContainer);
    dataInnerLeft = document.createElement("div");
    dataInnerRight = document.createElement("div");
    dataInnerContainer.appendChild(dataInnerLeft);
    dataInnerContainer.appendChild(dataInnerRight);

    paragraf = document.createElement("p");
    paragraf.classList.add("data-p");
    span = document.createElement("span");
    span.classList.add("data-span");
    dataInnerLeft.appendChild(paragraf);
    dataInnerLeft.appendChild(span);
    paragraf.innerHTML = titleVal;
    span.innerHTML = priorityVal;
    dataInnerRight.innerHTML =
      "<i class='icon fa-solid fa-pencil' ></i><i class='icon fa-regular fa-trash-can' ></i>";
    document.querySelector("#title").value = "";

    btnDelete = document.querySelectorAll(".fa-trash-can");

    btnDelete.forEach(function (item) {
      item.addEventListener("click", function () {
        item.style.cursor = "pointer";
        item.parentElement.parentElement.remove();
        localStorage.removeItem("title");
        localStorage.removeItem("priority");
      });
    });

    btnEdit = document.querySelectorAll(".fa-pencil");

    btnEdit.forEach(function (item) {
      item.addEventListener("click", function () {
        let changeTitle =
          item.parentElement.parentElement.appendChild(paragraf).textContent;
        let changePriority =
          item.parentElement.parentElement.appendChild(span).value;
        document.querySelector("#title").value = changeTitle;
        document.querySelector("#priority").value = changePriority;
      });
    });
    /********************************************/

    /* xhr = new XMLHttpRequest();

    xhr.open("GET", "data.json", true);

    xhr.onload = function () {
      if (this.status == 200) {
        paragraf.innerHTML = JSON.parse(this.responseText).title;

        span.innerHTML = JSON.parse(this.responseText).priority;
      }
    };
    xhr.send();*/

    titleValArr.push(titleVal);
    priorityValArr.push(priorityVal);

    localStorage.setItem("title", titleValArr);
    localStorage.setItem("priority", priorityValArr);

    localStorage.getItem("title", titleValArr);

    localStorage.getItem("priority", priorityValArr);
  }
}
