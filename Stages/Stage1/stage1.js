function checkInput() {
  var a = document.getElementById("stageOneInput");
  if (a.value == "w" || a.value == "W") {
    location.href = "/Stages/Stage2/stage2.html";
  } else {
    document.getElementById("err").innerHTML = "Wrong Answer :(";
  }
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
