/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
    function getMinMax(str){

        let arr = str.split(' ').join(',').split(',');

        for(let i=0; i<arr.length; i++) {
            arr[i] = parseFloat(arr[i]);
        }
        let arr2 = arr.filter(function(v){return v === +v});

        function arrayMin(arr2) {
            let len = arr2.length, minimum = Infinity;
            while (len--) {
                if (Number(arr2[len]) < minimum) {
                    minimum = Number(arr2[len]);
                }
            }
            return minimum;
        }
        let minimum = arrayMin(arr2);

        function arrayMax(arr2) {
            let len = arr2.length, maximum = -Infinity;
            while (len--) {
                if (Number(arr2[len]) > maximum) {
                    maximum = Number(arr2[len]);
                }
            }
            return maximum;
        }
        let maximum = arrayMax(arr2);

        return result = {max: maximum, min: minimum};
    }
