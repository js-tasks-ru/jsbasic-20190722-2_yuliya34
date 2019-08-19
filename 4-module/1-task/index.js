/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(arr) {
        const ul = document.createElement('ul');
        let name = arr.map(a => '<li>' + a.firstName + ' ' + a.lastName + '</li>');
        ul.innerHTML =  name.join('</li>');
        return ul;
}
