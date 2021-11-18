numsArr = [23, 2, 3, 4, 5]

arrangedArr = []

const sortIndex = (numsArr) => {
    for(i = 0; i < numsArr.length; i++){
        pos = i + 1
       value = numsArr[i] * pos
       if(value > arrangedArr[arrangedArr.length -1]){
           let p = numsArr[i]
           arrangedArr.push(p)
       }else if(numsArr[i] === 0){
            let q = numsArr[i]
            arrangedArr.push(q)
       } else if(value < arrangedArr[0]){
            arrangedArr.unshift(numsArr[i])
       }else {
           for(x = 0; x < arrangedArr.length; x++){
               if(value < arrangedArr[x] && value > arrangedArr[x -1])
               arrangedArr.splice(x, 0, numsArr[i])
           }
       }
    }return arrangedArr  
}

console.log(sortIndex(numsArr))