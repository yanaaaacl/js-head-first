let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let total = numbers.reduce(function(total, current){
    return total + current;
}, 0);
alert(total);