// business logic
var pingPong = function(inputN) {
  var result = "";
  // for (var i =1; i <= inputN; i++ ) {
  //
  //   if (i % 3 === 0 && i % 15 !== 0) {
  //     $(".showoutput").append("<li>" + "PING" + "</li>");
  //
  //   } else if (i % 5 === 0 && i % 15 !== 0) {
  //     $(".showoutput").append("<li>" + "PONG" + "</li>");
  //
  //   } else if (i % 15 === 0) {
  //     $(".showoutput").append("<li>" + "PING-PING" + "</li>");
  //
  //   } else {
  //     $(".showoutput").append("<li>" + i + "</li>");
  //     console.log(i);
  //   }
    //
    return result;
// }

}


// user logic
$(function() {
  $(".ping-pong" ).submit(function(event) {
    event.preventDefault();
    var inputN = parseInt($("#inputNumber").val());
    console.log(inputN);
      var output = pingPong(inputN);
      for (var i =1; i <= inputN; i++ ) {

        if (i % 3 === 0 && i % 15 !== 0) {
          $(".showOutput").append("<li>" + "PING" + "</li>");

        } else if (i % 5 === 0 && i % 15 !== 0) {
          $(".showOutput").append("<li>" + "PONG" + "</li>");

        } else if (i % 15 === 0) {
          $(".showOutput").append("<li>" + "PING-PING" + "</li>");

        } else {
          $(".showOutput").append("<li>" + i + "</li>");
          console.log(i);
        }

        $("ul.showOutput").children("li").show();
        $("li").remove();

        //
        // return result;
    }
  //     for (var i =1; i <= inputN; i++ ) {
  //       // $(".showoutput").append("<li>" + output + "</li>");
  //     }
  });
});
