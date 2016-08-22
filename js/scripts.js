var pingPong = function(inputN) {
  var result = [];
  for (var n = 1; n === inputN; n++) {
    result.push(n);
  }
  return result;
}


$(document).ready(function() {
  $(".ping-pong .btn" ).click(function() {
    var inputN = parseInt($(".inputNumber").val());
    alert(inputN);
    // need to figure out how to reset the enter number ..using
    // submit instead of click & event preventDefault ..change submit
    // btn type
    // if (inputN >= 1) {
    //   var output = pingPong(inputN)
    // }

  });
});
