const myCalculator = document.querySelector('.myCalc');
let myOutput = document.createElement('div');
myOutput.classList.add('output');
myOutput.innerHTML = '0';
myCalculator.appendChild(myOutput);
const myKeys = [
  ['1', '2', '3', '+'],
  ['4', '5', '6', '-'],
  ['7', '8', '9', '*'],
  ['C', '0', '=', '/'],
];
const myOper = ['+', '-', '*', '/'];

// add calculator keys------------------------------------------------------------------

for (y = 0; y < myKeys.length; y++) {
  let div = document.createElement('div');
  div.classList.add('row');
  for (x = 0; x < myKeys[y].length; x++) {
    // console.log(myKeys[y][x]);
    let btn = document.createElement('div');
    btn.innerHTML = myKeys[y][x];
    btn.classList.add('btn');
    btn.addEventListener('click', btnHit);
    div.appendChild(btn);
  }
  myCalculator.appendChild(div);
  // console.log(div);
}

// add function to the buttons-------------------------------------------------------------

function btnHit(e) {
  let myValue = this.innerText;
  let myCalc = myOutput.innerText;
  if (myCalc === '0') {
    myCalc = '';
  }
  // if (myValue === '+') {
  //   btn.classList.add(opbtn);
  // }
  if (myValue === '=') {
    myCalc = eval(myCalc);
  } else {
    let lastChar = myCalc.substring(myCalc.length - 1);
    console.log(lastChar);
    if (myOper.includes(myValue)) {
      if (myOper.includes(lastChar)) {
        myCalc = myCalc.substring(0, myCalc.length - 1);
        btn.classList.add(opbtn);
      } else {
        myCalc = eval(myCalc);
      }
    }
    myCalc = myCalc + myValue;
  }
  if (myValue === 'C') {
    myCalc = '0';
  }

  myOutput.innerText = myCalc;
}
