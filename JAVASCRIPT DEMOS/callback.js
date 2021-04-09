let add = function(num1, num2) {
    return num1 + num2;
}
let multiply = function(num1, num2) {
    return num1 * num2;
}
let doWhatever = function(a, b) {
    console.log(`here are your number : ${a} and ${b}`)
}

var calc = function calculate(num1, num2, callback) {

    return callback(num1, num2);
}
console.log(calc(4, 4, doWhatever));