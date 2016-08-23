// business logic
var pingPong = function(inputN) {
  var result = "";
    return result;
};

// user interface
$(function() {
  $(".ping-pong" ).submit(function(event) {
    event.preventDefault();
    $("ul").empty();
    var inputN = parseInt($("#inputNumber").val());
    var output = pingPong(inputN);
      for (var i =1; i <= inputN; i++ ) {

        if (i % 3 === 0 && i % 15 !== 0) {
          $("ul#showOutput").append("<li>" + "PING" + "</li>");

        } else if (i % 5 === 0 && i % 15 !== 0) {
          $("ul#showOutput").append("<li>" + "PONG" + "</li>");

        } else if (i % 15 === 0) {
          $("ul#showOutput").append("<li>" + "PING-PING" + "</li>");

        } else {
          $("ul#showOutput").append("<li>" + i + "</li>");

        }
      }
  });
});
