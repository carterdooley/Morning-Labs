//code


function hasUniqueChars (str) {
    for (i = 0; i < str.length - 1; i++) {
        for (j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false 
                
            } 
            }
        }
        return true
    }



console.log(hasUniqueChars('yees'))
console.log('yes')