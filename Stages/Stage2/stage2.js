function checkInput() {
  var a = document.getElementById("stageTwoInput");
  if (a.value == "SCREEN TOP RIGHT" || a.value == "screen top right") {
    location.href = "/Stages/Stage3/stage3.html";
  } else {
    document.getElementById("err").innerHTML = "Wrong Answer :(";
  }
}

function showTextField() {
  document.getElementById("show-now").classList.remove("appear");
}

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.onkeydown = (e) => {
  if (e.key == 123) {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "I") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "C") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "J") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key == "U") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key == "F") {
    e.preventDefault();
  }
};
