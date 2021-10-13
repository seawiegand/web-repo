//console.log("hello world");
//console.log(Math.random()*3);
//console.log(Math.floor(Math.random(3)));
// math random is 0 to 1, so multiply by whatever number you want

//console.log(document.getElementsByClassName("options"));
//console.log(document.getElementsByClassName("options")[0].innerHTML);

//for(i=0;i<document.getElementsByClassName('options').length;i++);

const images = ["dietable.jpg", "jareds21st.jpg", "rampsnowday.jpg"];
const title = ["fall", "summer", "winter"];

for(i=0;i<3;i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];

  //console.log(document.getElementsByClassName("options")[i].innerHTML);

  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + '  ">';
  document.getElementsByClassName("options")[i].addEventListener("click", function(){alert("you clicked a div")});
//set the ID of each section
  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
  //call changeColor with the ID of the section when clicked
  document.getElementsByClassName("options")[i].addEventListener("click", function(){changeColor(this.id)});
}

  function changeColor(sectionID){
    console.log(sectionID);
    document.getElementById(sectionID).classList.toggle("blue");
  }
//single quote and double quote do the same thing
