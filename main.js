function append(value) {
    calculator.display.value += value;
}

function clearInput() {
    calculator.display.value = '';
}

function calculate() {
    calculator.display.value = eval(calculator.display.value);
}