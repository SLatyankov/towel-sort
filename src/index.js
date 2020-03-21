// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }
    var arr = new Array;
    var i = 0;
    var x = 0;
    matrix.forEach(element => {
        x++;
        if (x % 2 === 0) {
            element.reverse()
        };
        element.forEach(el => {
            arr[i] = el;
            i++;
        })
    });
    return arr;
}
