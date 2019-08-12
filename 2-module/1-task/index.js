/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
    let second = {};
    for (let key in obj) {
        second[key] = obj[key];
    }
    return second;
}
