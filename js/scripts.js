// business logic
var pingPong = function(inputN) {
  var result = [];
  for (var i = 1; i <= inputN; i++) {
    if (i % 15 === 0) {
      result + "PING-PONG";
    } else if (i % 5 === 0) {
      result = "PONG";
    } else if (i % 3 === 0) {
      result = "PING";
    } else {
      result.push(i)
    }
  }
}
// user logic
$(document).ready(function() {
  $("form.ping-pong" ).submit(function(event) {
    event.preventDefault();
    var inputN = parseInt($("#inputNumber").val());
    console.log(inputN);
    var output = pingPong(inputN);
    $(".showoutput").append("<li>" + output + "</li>");

  });
});
