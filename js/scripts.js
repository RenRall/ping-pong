// Business logic:
function processPingPong(theNumber) {
  var output = theNumber;
  if (theNumber % 3 === 0) {
    // if divisible by 3 output ping
    output = "ping";
  }
  if (theNumber % 5 === 0) {
    // if divisible by 5 output pong
    output = "pong";
  }
  if (theNumber % 15 === 0) {
    // if divisible by 15 output pong
    output = "ping-pong";
  }
  return output;
};

// User Logic:
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#user-input").val());
    for (i = 1; i <= userInput; i += 1) {
      var listItem = processPingPong(i);
      $("ul#result").append("<li>" + listItem + "</li>");
    }
  });
});
