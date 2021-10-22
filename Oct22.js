//code\


const pigLatin = (str) => {
    str = str.toLowerCase()
    str = str.trim()
    str = str.split(' ')
    for (i = 0; i < str.length; i++) {
        if (str[i].startsWith('a','e','i' ,'o' ,'u')) {
            str[i] += 'yay'
 
        } else {
            newStr = str[i][0]
            str[i] = str[i].replace(str[i][0], '')
            str[i] += newStr
            str[i] += 'ay'
        }
    } str = str.join(' ')
    return str
}

console.log(pigLatin('hello I am Carter'))