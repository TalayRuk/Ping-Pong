var pingPong = function(inputN) {
  var result = [];
  for (var n = 1; n == inputN; n++) {
    result.push(n);
  }
  return result;

}


$(document).ready(function() {
  $(".ping-pong" ).submit(function(event) {
    event.preventDefault();
    var inputN = parseInt($("#inputNumber").val());
    if (inputN >= 1) {
      var output = pingPong(inputN);
        // for (var i = 1; i <= parseInt("#inputNumber"); i++) {
        $(".showoutput").text("<li>" + output + "</li>");
        // }
    } else {
      $(".showoutput").text("Please enter only number more than 1!")
    }


  });
});
