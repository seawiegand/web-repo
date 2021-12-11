//front page pictures
let pics = 19; //make sure to take out other picture on index page that use pics id
let pic;

for(i=0; i<pics; i++){
  pic = 1+i;

  document.getElementById('portfolio').innerHTML += "<img src='albumassets/portfolio/" + pic + ".jpg'" + "class='portfoliopic' id='pic" + pic+ "' />";
}
