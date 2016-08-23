// business logic
var pingPong = function(inputN) {
  var result = "";
  for (var i = 0; i <= inputN; i++ ) {

   if (i % 15 === 0) {
    $(".showoutput").append("<li>" + "PING-PONG" + "</li>");

    if (i % 3 === 0 && i % 15 != 0) {
      result = result.replace(i, "PING");

    } else if (i % 5 === 0 && i % 15 != 0) {
      $(".showoutput").append("<li>" + "PONG" + "</li>");

    } else {
      $(".showoutput").append("<li>" + i + "</li>");
    }

  }
  return result;
}


// user logic
$(function() {
  $(".ping-pong" ).submit(function(event) {
    event.preventDefault();
    var inputN = parseInt($("#inputNumber").val());
    console.log(inputN);
      var output = pingPong(inputN);
      for (var i = 1; i < inputN; i++) {
        $(".showoutput").append("<li>" + i + "</li>");
      }
  });
});
