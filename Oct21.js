//code

// const isPalindrom = str => {
//     return str == str.split('').reverse().join('')
// }


// console.log(isPalindrom("hello"))


let forward = " "

const isPalindrom = str => {
 if (str == str.split('').reverse().join('')) {
     return true
 } else {
     return false
 }
}


console.log(isPalindrom("hello"))

