var fact = function factoriel(n) {
    console.log(n);
    return n == 0 ? 1 : (n * this.factoriel(n - 1));
};

var r = fact(5);
console.log(r);