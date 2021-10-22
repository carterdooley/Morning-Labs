//code\


const pigLatin = (str) => {
    str = str.split(' ')
    for (i = 0; i <str.length; i++) {
        if (str[i].startsWith('a','e','i' ,'o' ,'u')) {
            str[i] += 'yay'
            return str
        } else {
            newStr = str[i][0]
            str[i] = str[i].replace(str[i][0], '')
            str[i] += newStr
            return str[i] += 'ay'

        }
    }
}

console.log(pigLatin('hello apple'))