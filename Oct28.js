let b, result = 0

const printDigits = num => {
    while (num > 0) {
        b = num % 10
        result = (result * 10) + b
        num = Math.floor(num/10)
        console.log(b)
    } 
}



printDigits(539)