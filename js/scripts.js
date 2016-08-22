var pingPong = function(inputN) {
  var result = [];
  for (var n = 1; n === inputN; n++) {
    result.push(n);
  }
  return result;
}


$(document).ready(function() {
  $(".ping-pong .btn" ).click(function() {
    var inputN = (parseInt$(".inputNumber").val());
    alert(inputN);
    // if (inputN >= 1) {
    //   var output = pingPong(inputN)
    // }

  });
});
