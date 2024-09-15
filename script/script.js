const navBtn = document.querySelector(".nav__btn")
let navopen = false ;

navBtn = addEventListener("click" , function () {
  if (navopen) {
    navBtn.classList.remove('nav__btn--open')
    navopen = false ;
  } else {
    navBtn.classList.add('nav__btn--open')
    navopen = true ;
  }
})