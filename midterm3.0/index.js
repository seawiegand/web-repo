
console.log("hello");


let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
let prevday = "monday";

for(i=0; i<document.getElementsByClassName("day").length; i++){
  document.getElementsByClassName("day")[i].innerHTML="<h2>" + day[i] + "</h2>";

  document.getElementsByClassName("day")[i].addEventListener('click', setActive, false);

  document.getElementsByClassName("day")[i].id = day[i];

  document.getElementsById("monday").addEventListener('click', setActiveButton, false);
  document.getElementsById("tuesday").addEventListener('click', setActiveButton, false);
  document.getElementsById("wednesday").addEventListener('click', setActiveButton, false);
  document.getElementsById("thursday").addEventListener('click', setActiveButton, false);
  document.getElementsById("friday").addEventListener('click', setActiveButton, false);
  document.getElementsById("saturday").addEventListener('click', setActiveButton, false);
  document.getElementsById("sunday").addEventListener('click', setActiveButton, false);
}

//document.getElementById("mon").classList.toggle("active");

function setActiveButton(e){
  e.target.classList.toggle("active");
}


//function setActive(e){

  //prevday = document.getElementsByClassName("active")[0].id;
  //if(prevday != undefined){
    //document.getElementById(prevday).classList.toggle("active");
    //document.getElementById(prevday + "menu").style.display = "none";
  //}

  //if(e.target.tagName == "H2"){
      //e.target.parentNode.classList.toggle("active");
    //}
    //else{
      //e.target.classList.toggle("active");
    //}

    //day = document.getElementsByClassName('active')[0].id;
    //console.log(day);
    //document.getElementById(day + "menu").style.display = "block";
  //}
