var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function(){
  console.log('per request');
  $('#addition').click(function(event) {
    console.log('hello');
    event.preventDefault();
    var inputOne = parseInt($('#input1').val());
    var inputTwo = parseInt($('#input2').val());
    var calculator = new Calculator("hot pink");

    var additionResult = calculator.addition(inputOne, inputTwo);
    console.log('help');

    $('#calculatorResults').text(additionResult);
  });

  $('#subtract').click(function(event) {
    event.preventDefault();
    var inputOne = parseInt($('#input1').val());
    var inputTwo = parseInt($('#input2').val());
    var calculator = new Calculator("hot pink");

    var subtractResult = calculator.subtract(inputOne, inputTwo);

    $('#calculatorResults').text(subtractResult);
  });

  $('#multiply').click(function(event) {
    event.preventDefault();
    var inputOne = parseInt($('#input1').val());
    var inputTwo = parseInt($('#input2').val());
    var calculator = new Calculator("hot pink");

    var multiplyResult = calculator.multiply(inputOne, inputTwo);
    $('#calculatorResults').text(multiplyResult);
  });

  $('#division').click(function(event) {
    event.preventDefault();
    var inputOne = parseInt($('#input1').val());
    var inputTwo = parseInt($('#input2').val());
    var calculator = new Calculator("hot pink");

    var divisionResult = calculator.divide(inputOne, inputTwo);

    $('#calculatorResults').text(divisionResult);
  });
});

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
