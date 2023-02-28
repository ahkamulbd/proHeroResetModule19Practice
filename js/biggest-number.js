/* The biggest number among three numbers */

var number1 = 20;
var number2 = 21;
var number3 = 12;

if (number1 > number2) {
    if (number1 > number3) {
        console.log(number1);
    }
    else {
        console.log(number3);
    }
}
else {
    if (number2 > number3) {
        console.log(number2);
    }
    else {
        console.log(number3);
    }
}