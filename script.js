const myCalculator = document.querySelector('.myCalc');
let myOutput = document.createElement('div');
myOutput.classList.add('output');
myOutput.innerHTML = '0';
let display = myCalculator.appendChild(myOutput);
// console.log(display);

let operator = '';
let value = '';
let firstNumber = '';
let secondNumber = '';
let myCalc = '';

const myKeys = [
  ['1', '2', '3', '+'],
  ['4', '5', '6', '-'],
  ['7', '8', '9', '*'],
  ['C', '0', '=', '/'],
];
const myOper = ['+', '-', '*', '/'];

// add calculator keys------------------------------------------------------------------

for (let y = 0; y < myKeys.length; y++) {
  let div = document.createElement('div');
  div.classList.add('row');
  for (let x = 0; x < myKeys[y].length; x++) {
    // console.log(myKeys[y][x]);
    let btn = document.createElement('div');
    btn.innerHTML = myKeys[y][x];
    btn.classList.add('btn');
    btn.addEventListener('click', colectInput);
    div.appendChild(btn);
  }
  myCalculator.appendChild(div);
  // console.log(div);
}

// add function to keys-------------------------------------------------------------

function colectInput(e) {
  value = this.innerText;
  // console.log(value);
  evaluates(value);
}

function evaluates(value) {
  if (isNaN(value)) {
    evaluatesOperator(value);
  } else {
    evaluatesNumber(value);
  }
}

/* operators part */

function evaluatesOperator(value) {
  // console.log(value);
  if (myCalc === '0') {
    myCalc = parseInt('0');
  }

  if (value === 'C') {
    display.innerText = '0';
    myCalc = '';
  }

  if (value === '+' || value === '-' || value === '*' || value === '/') {
    operator = value;
    display.innerText = operator;
   
    firstNumber = parseInt(myCalc);
    myCalc = '';
    
  }

  if (value === '=') {
    calculate(firstNumber);
  }
}

/* Numbers part */

function evaluatesNumber(value) {
  myCalc += value;
  // console.log(myCalc);
  printEvaluation(myCalc);
}

function printEvaluation(myCalc) {
  display.innerText = myCalc;
  // console.log(display.innerText);
}

// do the Math-------------------------------------------------------

function calculate(firstNumber) {
  secondNumber = parseInt(myCalc);
  // console.log(secondNumber);
  if (operator === '+') {
    myCalc = firstNumber + secondNumber;
  }
  if (operator === '-') {
    myCalc = firstNumber - secondNumber;
  }
  if (operator === '*') {
    myCalc = firstNumber * secondNumber;
  }
  if (operator === '/') {
    myCalc = firstNumber / secondNumber;
  }
  display.innerText = myCalc;
  // console.log(display.innerText);
}
