const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  btn.classList.toggle("open");
});
