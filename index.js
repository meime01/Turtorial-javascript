window.onload = function() {
    document.getElementById("demo").innerText = "Hello World";
}

let display = "";

function appendNumber(num) {
    display += num;
    document.getElementById("calc-display").value = display;
}

function appendOperator(op) {
    if (display === "") return;
    const lastChar = display[display.length - 1];
    if ("+-*/".includes(lastChar)) {
        display = display.slice(0, -1) + op;
    } else {
        display += op;
    }
    document.getElementById("calc-display").value = display;
}

function appendDot() {
    // Prevent multiple dots in a number
    const parts = display.split(/[\+\-\*\/]/);
    if (!parts[parts.length - 1].includes(".")) {
        display += ".";
        document.getElementById("calc-display").value = display;
    }
}

function clearDisplay() {
    display = "";
    document.getElementById("calc-display").value = display;
}

function calculateResult() {
    try {
        // Evaluate the expression safely
        display = eval(display).toString();
    } catch {
        display = "Error";
    }
    document.getElementById("calc-display").value = display;
}
