// business logic
var pingPong = function(inputN) {
  var result = [];
  for (var i = 0; i <= inputN; i++ ) {
    result.push(i);
  }

  //     $(".showoutput").append("<li>" + "PING" + "</li>");
  //   } else if (i % 5 === 0 && i % 15 != 0) {
  //     $(".showoutput").append("<li>" + "PONG" + "</li>");
  //   } else if (i % 15 === 0) {
  //   $(".showoutput").append("<li>" + "PING-PING" + "</li>");
  //   } else {
  //     $(".showoutput").append("<li>" + i + "</li>");
  //   }
  // }
  return result;
}
// user logic
$(function() {
  $("form.ping-pong" ).submit(function(event) {
    event.preventDefault();
    var inputN = parseInt($("#inputNumber").val());
    console.log(inputN);
    if (i % 3 === 0 && i % 15 != 0) {
      var output = pingPong(inputN);
      for (var i = 0; i < output.length; i++) {
        $(".showoutput").append("<li>" + output[i] + "PING" + "</li>");
      }

      } else if (i % 5 === 0 && i % 15 != 0) {
        $(".showoutput").append("<li>" + output[i] + "PONG" + "</li>");
      } else if (i % 15 === 0) {
        $(".showoutput").append("<li>" +  output[i] +"PING-PING" + "</li>");
      } else {
        $(".showoutput").append("<li>" +  output[i] +  "</li>");
      }
  });
});
