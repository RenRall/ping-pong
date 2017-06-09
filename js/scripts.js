// Business logic:


// User Logic:
$(document).ready(function() {
  $("form#submissionform").submit(function(event) {
    event.preventDefault();
    var userinput = parseInt($("input#userinput").val());

    $ ("#result").show();

    if (userinput <= 0) {
      comment = "Number must be greater than zero."
      $("#result").hide()
      console.log (userinput)
    }



    // var userinput = userinput.toString();
    // var replies = ["ping", "pong," "ping-pong"];
    // for (var userinput = reply)
    //
    // var resultcomment = "";
    // var warningcomment = "";
    //
    // if (userinput / 3 || userinput / 5 || userinput / 15) {

    }
