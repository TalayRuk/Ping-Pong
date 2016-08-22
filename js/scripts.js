var pingPong = function(inputN) {
  var result = [];
  for (var n = 1; n === inputN; n++) {
    result.push(n);
  }
  return result;
}


$(document).ready(function() {
  $(".ping-pong .btn" ).click(function(event) {
    var inputN = (parseInt$("inputNumber").val());
    console.log(inputN);
    // if (inputN >= 1) {
    //   var output = pingPong(inputN)
    // }
    event.preventDefault();
  });
});
