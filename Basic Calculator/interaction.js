var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
function add() {
    var result = parseFloat(number1.value) + parseFloat(number2.value);
    document.getElementById('result').value = result;
}
function subtract() {
    var result = parseFloat(number1.value) - parseFloat(number2.value);
    document.getElementById('result').value = result;
}
function multiply() {
    var result = parseFloat(number1.value) * parseFloat(number2.value);
    document.getElementById('result').value = result;
}
function divide() {
    var result = parseFloat(number1.value) / parseFloat(number2.value);
    document.getElementById('result').value = result;
}
function clearFields() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').value = '';
}