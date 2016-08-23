// business logic
var pingPong = function(inputN) {
  var result = [];
  for (var i = 0; i <= inputN; i++) {
    if (i % 15 === 0) {
      result = "PING-PONG";
    } else if (i % 5 === 0) {
      result = "PONG";
    } else if (i % 3 === 0) {
      result = "PING";
    } else {
      result = result.push(i);
    }
  }
  return result;
}
// user logic
$(document).ready(function() {
  $("form.ping-pong" ).submit(function(event) {
    var inputN = parseInt($("#inputNumber").val());
    console.log(inputN);
    var output = pingPong(inputN);
    $(".showoutput").append("<li>" + output + "</li>");

    event.preventDefault();
  });
});
