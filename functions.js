// A function that updates display
function updateDisplay(text) {
    if (String(text).length > 16) {text = 'limit exceeded'};
    var display = document.querySelector('.display');
    display.innerHTML = text;
};

// Operator function 
function operate(operation, a, b) {
    if (operation === "+") return a + b;
    if (operation === "-") return a - b;
    if (operation === "x") return a * b;
    if (operation === "/") return a / b;
};


let currentOperand = "";
let previousOperand = "";
let operator = "";

// Add eventlistener to all buttons
const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        var action = button.innerHTML;

        // functions that detect user key press
        // Detects operator key
        if (['+', '-', 'x', '/'].includes(action)) {
            operator = action;
            previousOperand = currentOperand;
            currentOperand = "";
        }

        // Detects number & decimal key
        if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."].map(String).includes(action)) {
            currentOperand += action;
            updateDisplay(currentOperand);
        }

        // detects key
        if (action === "AC") {
            currentOperand = "";
            previousOperand = "";
            operator = "";
            updateDisplay("0");
        }

        // detects delete key
        if (action === "Delete") {
            currentOperand = currentOperand.slice(0, -1);
            updateDisplay(currentOperand);
        }

        // detects equal key
        if (action === "=") {
            var result = operate(operator, parseFloat(previousOperand), parseFloat(currentOperand));
            updateDisplay(result);
            currentOperand = result;
            previousOperand = "";
            operator = "";
        }
    })
});


