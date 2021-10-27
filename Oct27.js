//code

let num = 0
let newArr = ''

const decoder = code => {
    for (i = 0; i < code.length; i++) {
        if (code[i].match(/^[0-9]*$/)) {
            num = code[i]
            i += num
            console.log(code[i])
        }
    }
}


decoder('dj2hfkgy')

