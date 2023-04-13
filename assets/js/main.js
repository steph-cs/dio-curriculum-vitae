const btnDarkMode = document.getElementById("btn-dark-mode")

const white = document.querySelectorAll(".w3-white")
const lightGray = document.querySelectorAll(".w3-light-gray")
const indigo = document.querySelectorAll(".w3-indigo")

const textBlack = document.querySelectorAll(".w3-text-black")
const textGray = document.querySelectorAll(".w3-text-gray")
const textIndigo = document.querySelectorAll(".w3-text-indigo")

const opacity = document.querySelectorAll(".w3-opacity")

function changepagetheme(){
  btnDarkMode.classList.toggle('w3-black')
  
  lightGray.forEach(el => {
    el.classList.toggle("w3-light-gray")
    el.classList.toggle("dark-gray")
  });

  white.forEach(el => {
    el.classList.toggle("w3-white")
    el.classList.toggle("w3-black")
  });

  indigo.forEach(el => {
    el.classList.toggle("w3-indigo")  
    el.classList.toggle("light-purple")
  });

  textGray.forEach(el => {
    el.classList.toggle("w3-text-gray")
    el.classList.toggle("w3-text-white")
  });

  textBlack.forEach(el => {
    el.classList.toggle("w3-text-black")  
    el.classList.toggle("w3-text-white")
  });

  textIndigo.forEach(el => {
    el.classList.toggle("w3-text-indigo")  
    el.classList.toggle("text-light-purple")
  });

  opacity.forEach(el => {
    el.classList.toggle("w3-opacity")
  });

  btnDarkMode.classList.toggle('w3-light-gray')

}