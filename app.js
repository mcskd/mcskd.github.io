const humberger = document.querySelector(".humberger");
const nav_menu = document.querySelector(".open_links");

  humberger.addEventListener("click", () => {
  humberger.classList.toggle("active");
  nav_menu.classList.toggle("active");
})

document.querySelectorAll(".links_item").forEach(n => n.addEventListener("click", () => {
  humberger.classList.remove("active");
  nav_menu.classList.remove("active");
}))


document.querySelectorAll(".links_item").forEach(n => window.addEventListener("scroll", () => {
  humberger.classList.remove("active");
  nav_menu.classList.remove("active");
}))

