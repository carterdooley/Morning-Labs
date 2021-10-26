//code

let largest = 0
let smallest = 0

const best = numArr => {
    for (i = 1; i < numArr.length; i++) {
        if (numArr[i] > numArr[largest]) {
            largest = i
        }
    }
    newArr = numArr.slice(0,largest)

    let profit = (numArr[largest] - Math.min.apply(null, newArr))
    if (profit < 0) {
        profit = 0;
    } 


    return profit
}


   


console.log(best([2,4,7,8,1]))