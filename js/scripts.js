// business logic
var pingPong = function(inputN) {
  var result = "";
  var i;
  for (var i = 1; i <= inputN; i++) {
    if (i % 15 === 0) {
      result = "PING-PONG";
    
