console.log('hello');

let pics = 19; //make sure to take out other picture on index page that use pics id
let pic;

for(i=0; i<pics; i++){
  pic = 1+i;

  document.getElementById('portfolio').innerHTML += "<img src='albumassets/portfolio/" + pic + ".jpg'" + "class='portfoliopic' id='pic" + pic+ "' />";
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("proj");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
