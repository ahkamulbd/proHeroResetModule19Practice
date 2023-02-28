for (var i = 1; i <= 20; i++) {
    // console.log(i);
    if (i > 5) {
        break;
    }
}

var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'pen') {
        break;
    }
    // console.log(item);
}


var numbers = [45, 87, 89, 56, 32, 51, 25, 13, 45, 67, 104, 2, 23, 543, 87];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number >= 100) {
        break;
    }
    console.log(number);
}