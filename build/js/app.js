(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (i = 1; i<= goal; i++) {
    if (i % 15 == 0) {
      output.push("ping-pong");
    } else if (i % 3 == 0) {
      output.push("ping");
    } else if (i % 5 == 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output;
}

Calculator.prototype.addition = function(int, int2) {
  return int + int2;
}

Calculator.prototype.subtract = function(int, int2) {
  return int - int2;
}

Calculator.prototype.multiply = function (int, int2) {
  return int * int2;
}

Calculator.prototype.divide = function(int, int2) {
  return int / int2;
}



exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/pingpong.js":1}]},{},[2]);
