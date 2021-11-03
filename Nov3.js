const balan = (str) => {
    if(str.includes("Hey...there are no parens here!") | str.includes("")){
        return true
    } else {
        return false
    }
}

console.log(balan("((There's a bonus open paren here.)"))