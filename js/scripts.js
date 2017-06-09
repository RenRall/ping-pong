// Business logic:


// User Logic:

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userinput = parseInt($("input#userinput").val());
    // var ping = (userinput / 3);
    // var pong = userinput / 5;
    // var pingpong = userinput / 15;
    // console.log (pingpong)
    // function range(start, end) {
    //   return range.reverse(1, userinput);
    // }
    $("result").show();

    if (userinput <= 0) {
      $("#result").show();
    } else if ("userinput" / 3) {
      $("#ping").show();
    //   // console.log (userinput)
    } else if ("userinput" / 5) {
      $("pong").show();
    } else if ("userinput" / 3 * 5) {
      $("ping-pong").show();
    }
    // else if (userinput >= 1) {
    //   $("result").show()
    //   // console.log(userinput)

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
