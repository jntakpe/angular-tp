for (var i = 0; i < 10; i++) {
    (function (idx) {
        setTimeout(function () {
            console.log(idx);
        }, i * 1000);
    })(i);
}