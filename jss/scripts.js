






$(document).ready(function(){

// Gather form values, place them into array1
//  Create array2 , order 213
// Display array2 in list

$("#favoriteThings").submit(function(event){
  debugger;
  var foodInput = $("#food").val();
  var colorInput = $("#color").val();
  var animalInput = $("#animal").val();
  var answers = [foodInput, colorInput, animalInput];

  // colorInput, foodInput, animalInput
  var answersOrder = [];
  answersOrder.push(answers[1], answers[0], answers[2]);

  $(".color").text(answersOrder[0]);
  $(".food").text(answersOrder[1]);
  $(".animal").text(answersOrder[2]);




event.preventDefault();


  });


});
