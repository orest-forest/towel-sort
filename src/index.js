
// You should implement your task here.

module.exports = function towelSort (matrix) {
    module.exports = function towelSort(matrix) {

        if (matrix == undefined) {
            return []
        }

        let arr = matrix;
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
                for (let j = 0; j < arr[i].length; j++) {
                    newArr.push(arr[i][j])
                }
            } else {
                for (let j = arr[i].length - 1; j => 0; j--) {
                    newArr.push(arr[i][j])
                }
            }
        }


        return newArr

    };


}
