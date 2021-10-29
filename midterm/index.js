//let day = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
//let prevday = "monday";


//for(i=0; i<document.getElementsByClassName('day').length; i++){
//  document.getElementsByClassName("day")[i].innerHTML="<h2>" + day[i] + "</h2>";

  //document.getElementsByClassName("day")[i].addEventListener('click', setActive, false);

  //document.getElementsByClassName("day")[i].id = box[i];

  //document.getElementById("monday").addEventListener('click', setActiveButton, false);
  //document.getElementById("tuesday").addEventListener('click', setActiveButton, false);
  //document.getElementsById("wednesday").addEventListener('click', setActiveButton, false);
  //document.getElementsById("thursday").addEventListener('click', setActiveButton, false);
  //document.getElementsById("friday").addEventListener('click', setActiveButton, false);
  //document.getElementsById("saturday").addEventListener('click', setActiveButton, false);
  //document.getElementsById("sunday").addEventListener('click', setActiveButton, false);
//}

  //document.getElementsById("day").classList.toggle("active");

//function setActiveButton(e){
  //e.target.classList.toggle("active");

  //prevday = document.getElementsByClassName("active")[0].id;
  //if(prevday != undefined){
    //document.getElementById(prevday).classList.toggle("active");
    //document.getElementById(prevday + "menu").style.display = "none";
  //}

//function setActive(e){
  //console.log(e.target.innerHTML);

//if(e.target.tagName == "H2"){
//  console.log("h2 clicked");
  //  e.target.parentNode.classList.toggle("active");
//  }
  //else{
  //  console.log("div clicked");
  //  e.target.classList.toggle("active");
  //}




//day = document.getElementsByClassName('active')[0].id;
//console.log(day);
//document.getElementById(day + "menu").style.display = "block";

//function setActiveButton(e){
  //e.target.classList.toggle("active");
//}

//let days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
//let prevday= "monday";

//for(i=0; i<document.getElementsByClassName('days').length; i++){


//document.getElementById("tuesday").addEventListener("click", buttonClicked1);
//function buttonClicked1(){
  //document.getElementById("tues").innerHTML = days[prevday];
//}





var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


//quote section js
const quotes = ["First of all, I hate paper mache because I am not good at it." , "We’re not going to be young and extremely good looking forever, so sometimes you have to carpe yolo. Like carpe diem but you only live once.", "We’re prairie kids, and prairie kids f**kn send it.", "Asking me about where your abdominal pain is like asking a piece of grass what the sky is.", "Hold my beer. I’m going to catch a chicken.", "Is it weird to use “XD” in an email to a professor.", "I either need glasses or less beer.", "Let’s see who the steeziest on the block is and play a game of skate.", "It’s hard for me to read vibes without my contacts in.", "I would be so bad at swording.", "I haven’t run full speed in like multiple years.", "You look like lord farquads handsome cousin."];
    let quotecount = 0;

    document.getElementById("newquote").addEventListener("click", buttonClicked);

    function buttonClicked()
    {
      console.log(quotes[quotecount]);
      document.getElementById("qtext").innerHTML = quotes[quotecount];
      if(quotecount>=11)
      {
        quotecount = 0;
      }
      else
      {
        quotecount++;
      }
    }
