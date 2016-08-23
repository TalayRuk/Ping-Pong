// business logic
var pingPong = function(inputN) {
  var result = "";
  for (var i =1; i <= inputN; i++ ) {

    if (i % 3 === 0 && i % 15 != 0) {
      $(".showoutput").append("<li>" + "PING" + "</li>");

    } else if (i % 5 === 0 && i % 15 != 0) {
      $(".showoutput").append("<li>" + "PONG" + "</li>");

    } else if (i % 15 === 0) {
      $(".showoutput").append("<li>" + "PING-PING" + "</li>");

    } else {
      $(".showoutput").append("<li>" + i + "</li>");
    }

    return result;
}

}


// user logic
$(function() {
  $(".ping-pong" ).submit(function(event) {
    event.preventDefault();
    var inputN = parseInt($("#inputNumber").val());
    console.log(inputN);
      var output = pingPong(inputN);
        $(".showoutput").append("<li>" + i + "</li>");
  });
});
