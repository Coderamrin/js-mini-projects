const items = document.querySelectorAll('.item');
const display = document.querySelector('.calculator__display');
let firstNumber = 0;
let secondNumber = 0;
let operator = '';

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    const isOperator = e.target.classList.contains('operator');

    display.textContent += e.target.textContent;

    // check if the item is operator and if the operator variable is empty
    if (isOperator && operator == '') {
      operator = e.target.textContent;
    } else {
      if (operator == '') {
        firstNumber += e.target.textContent;
        console.log(firstNumber);
      } else {
        secondNumber += e.target.textContent;
        console.log(secondNumber);
      }
    }

    if (e.target.textContent === '=') {
      const result = calculate(firstNumber, secondNumber, operator);
      display.textContent += result;
    }

    if (e.target.textContent === 'AC') {
      clearAll();
    }
  });
});

// get all the nubers and operator. then calculate
function calculate(firstNumber, secondNumber, operator) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
  }
}

function clearAll() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  display.textContent = '';
}
