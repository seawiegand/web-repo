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
