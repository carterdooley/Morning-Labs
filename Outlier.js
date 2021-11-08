const bigNum = [160, 3, 1719, 19, 11, 13, -21]  


const outlier = (arr) => {
    let evenNums = []
    let oddNums = []


    for(i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            evenNums.push(arr[i])
        } else {
            oddNums.push(arr[i])
        }
    }
     if (evenNums.length > oddNums.length){
         return oddNums
     } else {
         return evenNums
     }
    }  
 


console.log(outlier(bigNum))