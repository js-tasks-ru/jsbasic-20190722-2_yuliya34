/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
    var result = m;

    for (var i = 1; i < n; i++) {
        result *= m;
    }

    return result;
}

var m = prompt("Укажите число m", '');
var n = prompt("Укажите степень n", '');

if (n <= 1) {
    alert('Некорректно указана степень, число n должно быть целым числом и больше 1'
    );
} else {
    alert( pow(m, n) );
}
