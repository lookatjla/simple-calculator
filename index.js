"use strict";

window.onload = calculateNums;



function calculateNums() {
  const addButton = document.getElementById("addButton");
  // const subtractButton = document.getElementById("subtractButton");
  // const multiplyButton = document.getElementById("multiplyButton");
  // const divideButton = document.getElementById("divideButton");

  addButton.onclick = addButtonClicked;
  // subtractButton.onclick = subtractButtonClicked;
  // multiplyButton.onclick = multiplyButtonClicked;
  // divideButton.onclick = divideButtonClicked;
}




function addButtonClicked() {
  const num1Field = document.getElementById("number1Field");
  const num2Field = document.getElementById("number2Field");
  const answerField = document.getElementById("answerField");
  
  let num1Input = Number(num1Field.value);
  let num2Input = Number(num2Field.value);

  let answer = num1Input + num2Input;

  answerField.value = answer;
}