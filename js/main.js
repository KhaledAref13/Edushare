let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (el) {
  el.onclick = function () {
    navLinks.forEach(function (el) {
      el.classList.remove("active-state");
    });
    el.classList.add("active-state");
  };
});

let scrollUp = document.querySelector(".scroll-up-box");
window.addEventListener("scroll", function () {
  scrollUp.classList.toggle("visible", window.scrollY > 100);
});

scrollUp.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};