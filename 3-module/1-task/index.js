/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    function getBy(data, age) {
        let filteredData = data.filter(function(data) {
            if(data.age <= age) {
                return data.age
            }
        });
        return filteredData;
    }
    let filteredData = getBy(data, age);

    return result = filteredData.map(a => a.name + ', ' + a.balance)
        .join(', ');
}