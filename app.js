const humburger = document.querySelector(".humburger");
const nav_menu = document.querySelector(".open_links");

//ハンバーガーメニューを開く時の処理
  humburger.addEventListener("click", () => {
  humburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
  
})

//ハンバーガーメニューを閉じる時の処理
document.querySelectorAll('.open_links').forEach(n => n.addEventListener("click", () => {
  humburger.classList.remove("active");
  nav_menu.classList.remove("active");
}))

document.querySelectorAll('.open_links').forEach(n => n.addEventListener("click", (e) => {
  if (!e.target.closest('.links_item')) {
    humburger.classList.remove("active");
  }
}))
