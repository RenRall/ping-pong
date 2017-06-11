// Business logic:


// User Logic:

$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var userinput = parseInt($("input#userinput").val());

    for (i = 1; i <= userinput; i += 1) {
      var output = i;
      if (i % 3 === 0) {
        // if divisible by 3 output ping
        output = "ping";
      }
      if (i % 5 === 0) {
        // if divisible by 5 output pong
        output = "pong";
      }
      if (i % 15 === 0) {
        // if divisible by 15 output pong
        output = "ping-pong";
      }
      $("ul#result").append("<li>" + output + "</li>");
    }
  });
});
