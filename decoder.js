//code 

let x = 0

const decoder = (str) => {
    let move = +str[0];
    let decoded = "";
    for (i = 1; i < str.length; i++) {
         decoded += String.fromCharCode(str.charCodeAt(i) + move)
    } return decoded
}


console.log(decoder('2wcq'))