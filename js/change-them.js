
const toggle = document.querySelector(".change-them");
const darkIconElem = document.querySelector('.dark_icon');
const lightIconElem = document.querySelector('.light_icon');

function updateIcons(isDark) {
  if (isDark) {
    darkIconElem.classList.add('change-them-active');
    lightIconElem.classList.remove('change-them-active');
  } else {
    lightIconElem.classList.add('change-them-active');
    darkIconElem.classList.remove('change-them-active');
  }
}

toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");

  const isDark = document.documentElement.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  updateIcons(isDark);
});


window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    updateIcons(true);
  } else {
    updateIcons(false);
  }
});






// const navbar = document.querySelector('.navbar');
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 100) {
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');
//   }
// });