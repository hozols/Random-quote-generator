
var x ;
$(document).ready(function() {
  var randomq;
  var quotes = [
      "If you clean a vacuum cleaner, are you a vacuum cleaner?",
      "Swear to god ion get tired",
      "It’s Halloween so ima change my name to lil plumkin",
      "I’m rich & ratchet",
      "THE EARTH IS FLAT",
      "STOP TELLING ME HAPPY BIRTHDAY BITCH I KNOW ITS MY BIRTHDAY",
      "BITCH IM JESUS",
      "It’s cool to be weird",
      "tomorrow isn’t promise .. make sure u fuck all the bitches u can today",
      "SHE GOT A BIG BOOTY SO I CALL HER BIG BOOTY",
      "Ugly bitches always bring the bad bitches",
      "I remember in 6th grade I sent the wrong bitch my dick pic"

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
