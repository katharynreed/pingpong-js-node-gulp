var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $("#pingpong").submit(function(event){
    event.preventDefault();
    $("#pingpong-results").empty();
    var userInput = parseInt($("#input").val());
    var simpleCalculator = new Calculator("hot pink");
    var pongOutput = simpleCalculator.pingPong(userInput);

    $("#pingpong-results").text(pongOutput);
    $(".img").show();
    $("#results").show();
  });
});
