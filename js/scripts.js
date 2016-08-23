// business logic
var pingPong = function(inputN) {
  var result = "";
  var i;
  for (var i = 1; i <= inputN; i++) {
    if (i % 15 === 0) {
      result = "PING-PONG";
    } else if (i % 5 === 0) {
      result = "PONG";
    } else if (i % 3 === 0) {
      result = "PING";
    }
  }
}
