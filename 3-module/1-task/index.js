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
    let filteredData1 = getBy(data, age);

    return result = filteredData1.map(a => a.name + ', ' + a.balance)
        .join('\n');
}