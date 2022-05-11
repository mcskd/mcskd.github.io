const humburger = document.querySelector(".humburger");
const menu = document.query
const nav_menu = document.querySelector(".open_links");
const logo = document.getElementById("logo_phrase");
const social = document.getElementById("social");
const button = document.getElementById("nav_button");

//ハンバーガーメニューを開く時の処理
  humburger.addEventListener("click", () => {
  humburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
  logo.classList.toggle('active');
  social.classList.toggle('active');
  button.classList.toggle('active');
})


//ハンバーガーメニューを閉じる時の処理
document.querySelectorAll('.open_links').forEach(n => n.addEventListener("click", () => {
  humburger.classList.remove("active");
  nav_menu.classList.remove("active");
  logo.classList.remove('active');
  social.classList.remove('active');
  button.classList.remove('active');
}))

document.querySelectorAll('.open_links').forEach(n => n.addEventListener("click", (e) => {
  if (!e.target.closest('.links_item')) {
    humburger.classList.remove("active");
  }
}))
