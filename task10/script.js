function add(a,b) {
    console.log("Adding numbers:", a + b);
}
function subtract(a,b) {
    console.log("Subtracting numbers:", a - b);
}
function multiply(a,b) {
    console.log("Multiplying numbers:", a * b);
}
function divide(a,b) {
    if (a/b != 0) {
        console.log("Dividing numbers:", a / b);
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
}
function calculate(a, b, callback) {
    console.log(callback(a,b));
}
calculate(10, 5, add);
calculate(10, 5, subtract);
calculate(10, 5, multiply);
calculate(10, 5, divide);