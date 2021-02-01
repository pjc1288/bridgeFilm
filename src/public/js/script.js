/* <!--################################### BURGER ####################################### --> */
// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);






/* <!--################################### STARS ####################################### --> */

const $rate = document.getElementsByClassName('rates__number')[0].innerHTML
console.log($rate)
const ratings = {
  rate : $rate
};

// total number of stars
const starTotal = 5;

for(const rating in ratings) {  
  const starPercentage = (ratings[rating] / starTotal) * 100;
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  document.querySelector(`.${rating} .rates__stars-inner`).style.width = starPercentageRounded; 
}

//Traer Poster Al pug Film


const $poster = document.getElementsByClassName('getPosterPut')[0].innerHTML
document.getElementsByClassName('film-detail-header')[0].style.backgroundImage= "url('" + $poster + "')"


