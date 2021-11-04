const balan = (str) => {
    if(str.includes("(") | str.includes("")){
        return true
    } else {
        return false
    }
}

console.log(balan(")"))