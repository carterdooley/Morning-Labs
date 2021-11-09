numbers =[3,3,7,3,7,1,6,0,1,6]



const phoneNum = (numArr) => {
    let res = ''
    numArr = numArr.map(String)
    res += `(${numArr[0]+numArr[1]+numArr[2]}) `
    res += `${numArr[3] + numArr[4] +numArr[5]}-`
    res += `${numArr[6] + numArr[7] + numArr[8] + numArr[9]}`
    return res
}


console.log(phoneNum(numbers))