var pingOrPongString = "";

var pingPongify = function(userInput) {
  for(var i = 1; i <= userInput; i++) {
    if (i % 15 === 0) {
      $("#pingpong-results").append("<p><strong>PING PONG!</strong></p>");
    } else if (i % 5 === 0) {
      $("#pingpong-results").append("<p><strong>PONG!</strong></p>");
    } else if (i % 3 === 0) {
      $("#pingpong-results").append("<p><strong>PING!</strong></p>");
    } else {
      $("#pingpong-results").append("<p>"+i+"</p>");
    }
  };
};


$(document).ready(function() {
  $("#pingpong").submit(function(event){
    event.preventDefault();
    $("#pingpong-results").empty();
    var userInput = parseInt($("#input").val());
    var pongOutput = pingPongify(userInput);
    $("#pingpong-results").text(pongOutput);
    $(".img").show();
    $("#results").show();
  });
});
