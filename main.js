let btn = document.querySelector(".button");
let abs = document.querySelector(".btn1");
let abs1 = document.querySelector(".btn2");
let menu_btn = document.querySelector(".menu_btn");
let menu_close = document.querySelector(".menu_close");
let menu = document.querySelector(".menu");
// button
btn.addEventListener("mouseenter", () => {
  abs.classList.toggle("abs");
  abs1.classList.toggle("abs");
});
btn.addEventListener("mouseleave", () => {
  abs.classList.toggle("abs");
  abs1.classList.toggle("abs");
});
// navbar
menu_btn.addEventListener("click", () => {
  menu.style.right = "0%";
});
menu_close.addEventListener("click", () => {
  menu.style.right = "-100%";
});


AOS.init();