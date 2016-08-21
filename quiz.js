var myObject = {
    length: 4,
    0: 'Apple',
    1: 'Oranges',
    2: 'Pork',
    3: 'Chicken'
};

var b = Array.prototype.slice.call(myObject, 0);
console.log(b);