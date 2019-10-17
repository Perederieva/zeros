module.exports = function zeros(expression) {
    var arr = expression.split('*');
    var two = 0;
    var five = 0;


    for (var i = 0; i < arr.length; i++) {
        var strInt = parseInt(arr[i]);
        var isEven = (strInt % 2) === 0;
        var isDouble = arr[i].includes('!!');
        getFactorial(strInt, isDouble, isEven);
    }

    if (two >= five)
        return five;

    return 0;

    function getFactorial(n, isDouble, isEven) {
        let i = isEven ? 2 : 1;
        let step = isDouble ? 2 : 1;
        for (; i <= n; (i += step)) {
            let num = i;
            while (num % 5 === 0) {
                num /= 5;
                five++;
            }

            while (num % 2 === 0) {
                num /= 2;
                two++;
            }
        }
    }
};


