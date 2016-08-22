var pingPong = function(inputN) {
  var result = [];
  for (var n = 1; n === inputN; n++) {
    result.push(n);
  }
  return result;
  console.log("result");
}


$(document).ready(function() {
  $(".ping-pong" ).submit(function(event) {
    event.preventDefault();
    var inputN = parseInt($("#inputNumber").val());
    if (inputN >= 1) {
      var output = pingPong(inputN);
        for (var i = ; i < output.length; i++) {
        $(".showoutput").append("<li>" + output[i] + "</li>");
        }
    } else {
      $(".showoutput").append("Please enter only number more than 1!")
    }


  });
});
