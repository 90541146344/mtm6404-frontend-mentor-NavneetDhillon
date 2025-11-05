const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");
const auth = document.querySelector(".auth-buttons");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  auth.classList.toggle("active");
});
