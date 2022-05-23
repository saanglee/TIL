// Modal
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".main_item");
const closeButton = document.querySelector(".close_btn");
const modalOverlay = document.querySelector(".modal_overlay");
const content = document.getElementById("content");
const innerTextOutput = document.getElementById("innerTextOutput");

const openModal = () => {
  modal.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
};

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
innerTextOutput.innerHTML = content.innerHTML;

// Side Menu
const burger = document.querySelector("#burger");
const closeMenuButton = document.querySelector(".close_menu_btn");
const sidemenu = document.querySelector(".sidemenu");
const sidemenuLink = document.querySelectorAll(".sidemenu ul li a");

const toggleMenu = () => {
  burger.classList.toggle("active");
  sidemenu.classList.toggle("active");
};

sidemenuLink.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
burger.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);

// Dark Mode
// const toggle = document.querySelector("#toggle");
// let isDarkMode = false;
// let checkbox = document.querySelector("input[name=checkbox]");

// const SwitchMode = () => {
//   isDarkMode = !isDarkMode;
//   let root = document.body;
//   isDarkMode ? (toggle.innerText = "🌚") : (toggle.innerText = "🌞");
//   root.classList.toggle("darkMode");
// };

// checkbox.addEventListener("change", function () {
//   if (this.checked) {
//     SwitchMode();
//   } else {
//     SwitchMode();
//   }
// });
const toggle = document.querySelector("#toggle");
let isLight = true;
let checkbox = document.querySelector("input[name=checkbox]");

const SwitchMode = () => {
  isLight = !isLight;
  let root = document.body;
  isLight ? (toggle.innerText = "🌚") : (toggle.innerText = "🌞");
  root.classList.toggle("lightMode");
};

checkbox.addEventListener("change", function () {
  if (this.checked) {
    SwitchMode();
  } else {
    SwitchMode();
  }
});

// Setting Height
let maxHeight = 0;
let elems = document.querySelectorAll(".main_item");

elems.forEach((e) => {
  let h = arseInt(e.offsetHeight);
  if (max < h) {
    max = h;
  }
});
// elems.forEach((e) => {
//   e.style.height = `${max}px`;
// });
e.style.height = `${max}px`;

function goUp() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
