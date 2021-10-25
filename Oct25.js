//code

let vowels = 0
let consenants = 0

const hasMoreVowels = (word) => {
    word.toLowerCase()
    word.split()
    for (i = 0; i < word.length; i++) {
        if("aieou".includes(word[i])){
            vowels += 1
        } else {
            consenants += 1
        }
    } return vowels > consenants
}



console.log(hasMoreVowels('duck'))

// const hasMoreVowels1 = word => word.match(/aeiouAEIOU/)