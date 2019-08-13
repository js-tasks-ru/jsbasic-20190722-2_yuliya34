function clone(obj){
    let second = {};
    for (var key in obj) {
        second[key] = obj[key];
    }
    return second;
}