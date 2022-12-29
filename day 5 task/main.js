var titleVal,
  priorityVal,
  dataContainer,
  dataInnerContainer,
  dataInnerLeft,
  dataInnerRight,
  paragraf,
  x,
  y,
  span;

function showData() {
  title = document.querySelector("#title");
  priority = document.querySelector("#priority");
  titleVal = document.querySelector("#title").value;
  priorityVal = document.querySelector("#priority").value;
  dataContainer = document.querySelector("#data");

  document.querySelector("#data").innerHTML +=
    '<div class="data-inner"><div><p class="data-p">' +
    titleVal +
    '</p><span class="data-span">' +
    priorityVal +
    '</span></div><div><i class="icon fa-solid fa-pencil"></i><i class="icon fa-regular fa-trash-can" ></i></div>';
  dataInnerContainer = document.querySelector(".data-inner");

  var del = document.getElementsByClassName("icon");

  for (i = 0; i < del.length; i++) {
    del[i].onclick = function () {
      var delItem;
      delItem.className = ".display";
    };
  }

  var x = localStorage.setItem("title", titleVal);
  var y = localStorage.setItem("priority", priorityVal);
}

/*second code*/

/*

  var titleVal,
  priorityVal,
  dataContainer,
  dataInnerContainer,
  dataInnerLeft,
  dataInnerRight,
  paragraf,
  x,
  y,
  span;

function showData() {
  title = document.querySelector("#title");
  priority = document.querySelector("#priority");
  titleVal = document.querySelector("#title").value;
  priorityVal = document.querySelector("#priority").value;
  dataContainer = document.querySelector("#data");

  titleVal = document.querySelector("#title").value;
  priorityVal = document.querySelector("#priority").value;
  dataContainer = document.querySelector("#data");
  dataInnerContainer = document.createElement("div");
  dataInnerContainer.className = "data-inner";
  dataContainer.appendChild(dataInnerContainer);
  dataInnerLeft = document.querySelector(".data-inner-left");
  dataInnerRight = document.querySelector(".data-inner-right");
  paragraf = document.createElement("p");
  paragraf.className = "data-p";
  span = document.createElement("span");
  span.className = "data-span";
  paragraf.innerHTML = titleVal;
  span.innerHTML = priorityVal;
  dataInnerRight.innerHTML =
    "<i class='icon fa-solid fa-pencil' ></i><i class='icon fa-regular fa-trash-can; ></i>";
  dataInnerContainer.appendChild(dataInnerLeft, dataInnerRight);
  dataInnerLeft.appendChild(paragraf, span);
  dataInnerLeft.innerHTML = paragraf + span;
}*/
