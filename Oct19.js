//Code
let n = 0


function luckyNumbers (num){
    for (i = 0; i < num; i++) {
        return Math.floor(Math.random() * 9);
    } 
} 

console.log(luckyNumbers(4))