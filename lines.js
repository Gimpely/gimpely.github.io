const homeTitle = document.querySelector("#home h2");

function addShowLinesClass() {
  homeTitle.classList.add("show-lines");
}

homeTitle.addEventListener("animationend", addShowLinesClass);
