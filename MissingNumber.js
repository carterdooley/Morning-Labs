
let missinNum = (numArr, maxNum) => {
    for (i = 1; i < maxNum; i++) {
        if ((numArr[i] + 1) !== numArr[i + 1]) {
            return numArr[i] + 1
        }
    }
}


console.log(missinNum([1, 2, 3, 4, 6, 7, 8, 9, 10], 10))