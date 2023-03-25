const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
const arrowButton = document.querySelector(".arrow-button");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.querySelector("a").getAttribute("href") === "#" + current) {
      li.classList.add("active");
    }
  });
});

navLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    const target = li.querySelector("a").getAttribute("href");
    const targetSection = document.querySelector(target);
    const targetSectionTop = targetSection.offsetTop;

    window.scrollTo({
        top: targetSectionTop,
        behavior: "smooth"
      });

  });
});

arrowButton.addEventListener("click", (e) => {
  e.preventDefault();
  const target = arrowButton.querySelector("a").getAttribute("href");
  const targetSection = document.querySelector(target);
  const targetSectionTop = targetSection.offsetTop;

  window.scrollTo({
    top: targetSectionTop,
    behavior: "smooth"
  });
});
