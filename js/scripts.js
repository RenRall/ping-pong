// Business logic:


// User Logic:
$(document).ready(function() {
  $("form#ping-pongform").submit(function(event) {
    event.preventDefault();
    var userinput = parseInt($("input#userinput").val());

    if (userinput <= 0) {
      comment = "Number must be greater than zero."
      $("#result").hide()
      // console.log (userinput)
    } else if (userinput / 3) {
      result = result + "ping"
    } else if (userinput / 5) {
      result = result + "pong"
    } else if (userinput / 15) {
      result = result + "ping-pong"
    }
    // else if (userinput >= 1) {
    //   $("result").show()
      // console.log(userinput)
  });
});



    // var userinput = userinput.toString();
    // var replies = ["ping", "pong," "ping-pong"];
    // for (var userinput = reply)
    //
    // var resultcomment = "";
    // var warningcomment = "";
    //
    // if (userinput / 3 || userinput / 5 || userinput / 15) {

    // }
