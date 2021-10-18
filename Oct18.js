let myArray = [-3,-1,0,0,1,2,3]
let x = 0
while (x < myArray.length) {
for (i = 0; i < myArray.length; i++){
    if (myArray[i] + myArray[x] === 0){
        console.log('True')
        i += 10
        x += 10
    } else {
        console.log('False')
} x++
}
}
