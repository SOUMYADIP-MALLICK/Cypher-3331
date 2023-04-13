function checkInput() {
  var a = document.getElementById("stageThreeInput");
  if (a.value == "25" || a.value == "Twenty Five") {
    location.href = "/Stages/Stage4/stage4.html";
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
