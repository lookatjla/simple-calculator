"use strict";

// calculateNums function triggers when the page loads
window.onload = calculateNums;


// finds html buttons and creates click events
function calculateNums() {
  const addButton = document.getElementById("addButton");
  const subtractButton = document.getElementById("subtractButton");
  const multiplyButton = document.getElementById("multiplyButton");
  const divideButton = document.getElementById("divideButton");

  addButton.onclick = addButtonClicked;
  subtractButton.onclick = subtractButtonClicked;
  multiplyButton.onclick = multiplyButtonClicked;
  divideButton.onclick = divideButtonClicked;
}


// add button's click event function
function addButtonClicked() {

  // find html elements
  const num1Field = document.getElementById("number1Field");
  const num2Field = document.getElementById("number2Field");
  
  // define user inputs
  let num1Input = Number(num1Field.value);
  let num2Input = Number(num2Field.value);
  
  // display results
  const answerField = document.getElementById("answerField");
  let answer = num1Input + num2Input;
  answerField.value = answer;
  
  // check to see if user inputs were invalid
  if (isNaN(num1Input) || isNaN(num2Input)) {
    answerField.value = "Invalid input";
    return;
  }
}


// subtract button's click event function
function subtractButtonClicked() {

  const num1Field = document.getElementById("number1Field");
  const num2Field = document.getElementById("number2Field");
  
  let num1Input = Number(num1Field.value);
  let num2Input = Number(num2Field.value);
  
  const answerField = document.getElementById("answerField");
  let answer = num1Input - num2Input;
  answerField.value = answer;
  
  if (isNaN(num1Input) || isNaN(num2Input)) {
    answerField.value = "Invalid input";
    return;
  }
}


// multiply button's click event function
function multiplyButtonClicked() {

  const num1Field = document.getElementById("number1Field");
  const num2Field = document.getElementById("number2Field");

  let num1Input = Number(num1Field.value);
  let num2Input = Number(num2Field.value);
  
  const answerField = document.getElementById("answerField");
  let answer = num1Input * num2Input;
  answerField.value = answer;
  
  if (isNaN(num1Input) || isNaN(num2Input)) {
    answerField.value = "Invalid input";
    return;
  }
}


// divide button's click event function
function divideButtonClicked() {

  const num1Field = document.getElementById("number1Field");
  const num2Field = document.getElementById("number2Field");
  
  let num1Input = Number(num1Field.value);
  let num2Input = Number(num2Field.value);
  
  const answerField = document.getElementById("answerField");
  let answer = num1Input / num2Input;
  answerField.value = answer;
  
  if (isNaN(num1Input) || isNaN(num2Input)) {
    answerField.value = "Invalid input";
    return;
  }
}