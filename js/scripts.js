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
    if (inputN >= 1) {
      var output = pingPong(inputN);
      for (var i = 1; i < output.length; i++); {
      $(".showoutput").append("<li>" + output[i] + "</li>");
      }
    }else {
      $(".showoutput").text("Please enter only number more than 1!")
    }


  });
});
