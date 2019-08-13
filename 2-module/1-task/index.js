/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj){
    let second = {};
    for (let key in obj) {
        if (obj[key] && typeof obj[key] === 'object') {
            second[key] = clone(obj[key]);
        } else {
            second[key] = obj[key];
        }
    }
    return second;
}