/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
    function getMinMax(str){

        let arr = str.split(' ');

        for(let i=0; i<arr.length; i++)
            arr[i] = parseFloat(arr[i]);

        arr2 = arr.filter(function(v){return v === +v});

        function arrayMin(arr2) {
            let len = arr2.length, min = Infinity;
            while (len--) {
                if (Number(arr2[len]) < min) {
                    min = Number(arr2[len]);
                }
            }
            return min;
        }
        let min = arrayMin(arr2);

        function arrayMax(arr2) {
            let len = arr2.length, max = -Infinity;
            while (len--) {
                if (Number(arr2[len]) > max) {
                    max = Number(arr2[len]);
                }
            }
            return max;
        }
        let max = arrayMax(arr2);

        return result = {maximum: max, minimum: min};
    }
