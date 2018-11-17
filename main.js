
var x ;
$(document).ready(function() {
  var randomq;
  var quotes = [
      "Artist transform tragedy into beauty",
      "I haven't done enough research on conservatives to call myself or be called one. I'm just refusing to be enslaved by monolithic thought.",
      "spread love. Put more love into the universe.",
      "we are more worried about what we can lose than what we feel",
      "it's really cool to say I hate you. But it's not cool to say I love you. Love has a stigma"
    ];
 function getRandomInt(min, max) {
      return Math.floor(Math.random() * (quotes.length - 0 + 0)) + 0;
    }

    $("#getMessage").on("click", function getQuote(){
      // Only change code below this line.
      var randomq = quotes[getRandomInt()];
      $(".message").html(randomq);
      // Only change code above this line.
      return  x = quotes[getRandomInt()];
      
    });
    });
$(".twitter").html(
  '<a id="tweetmsg" ' + 
     'class="btn btnherozo text-center" ' + 
     'target="_blank" ' + 
     'href="https://twitter.com/intent/tweet?text=' + x + 
     '">Share on twitter' + 
  '</a>'
);