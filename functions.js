// A function that updates display
function updateDisplay(text) {
  // eslint-disable-next-line no-param-reassign
  if (String(text).length > 12) { text = 'limit exceeded'; }
  const display = document.querySelector('.display');
  display.innerHTML = text;
}

// Operator function
function operate(operation, a, b) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }
  switch (operation) {
    case '+':
      return (a + b).toFixed(3);
    case '-':
      return (a - b).toFixed(3);
    case 'x':
      return (a * b).toFixed(3);
    case '/':
      if (b === 0) {
        return Infinity;
      }
      return (a / b).toFixed(3);
    default:
      return NaN;
  }
}

let currentOperand = '';
let previousOperand = '';
let operator = '';

// Add eventlistener to all buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.innerHTML;

    // functions that detect user key press
    // Detects operator key
    if (['+', '-', 'x', '/'].includes(action)) {
      operator = action;
      previousOperand = currentOperand;
      currentOperand = '';
    }

    // Detects number & decimal key
    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'].map(String).includes(action)) {
      currentOperand += action;
      updateDisplay(currentOperand);
    }

    // detects key
    if (action === 'AC') {
      currentOperand = '';
      previousOperand = '';
      operator = '';
      updateDisplay('0');
    }

    // detects delete key
    if (action === 'Delete') {
      currentOperand = currentOperand.slice(0, -1);
      updateDisplay(currentOperand);
    }

    // detects equal key
    if (action === '=') {
      const result = operate(operator, parseFloat(previousOperand), parseFloat(currentOperand));
      updateDisplay(result);
      currentOperand = result;
      previousOperand = '';
      operator = '';
    }
  });
});
