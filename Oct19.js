//Code
let n = []


function luckyNumbers (num){
    for (i = 0; i < num; i++) {
        n.push(Math.floor(Math.random(num) * 10)+1);
        if (n[i] > 0){
            console.log(n)
        } 
    } 
} 

luckyNumbers(2)