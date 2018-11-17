if (typeof jQuery === "undefined") {
  var script = document.createElement('script');
  script.src = 'http://code.jquery.com/jquery-latest.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);
}

//edit
window.onload = function() {
  $(function(){ alert("jQuery + DOM loaded."); });
}
$(document).ready(function(){

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (quotes.length - 0 + 0)) + 0;
  }

  var x = getRandomInt;
  console.log(x);
}
)