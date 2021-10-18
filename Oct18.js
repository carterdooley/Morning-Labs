let myArray = [-3,-1,0,0,1,2,3]
let x = 0
let ifTrue = false
while (x < myArray.length) {
for (i = 0; i < myArray.length; i++){
    if (myArray[i] + myArray[x] === 0){
        ifTrue = true 
        break;

    } else {
        ifTrue = false
        
} if (ifTrue == true){
    break;
}
}x++
} console.log(ifTrue)
