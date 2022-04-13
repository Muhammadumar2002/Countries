const body = document.querySelector('body')
const btnToggle = document.querySelector(".button-light")
btnToggle.addEventListener('click' , function(){
  body.classList.toggle('dark-mode')
});