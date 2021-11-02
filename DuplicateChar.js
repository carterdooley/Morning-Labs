//Cide

const unique = (str) => {
    for(i=0; i < str.length; i++) {
        // let j = str.charCodeAt(i)
        for(x=1; x < str.length; x++){
            let k = str.charCodeAt(x)
            let j = str.charCodeAt(i)
            console.log(j)
            console.log(k)
            if (j === k && x !== i) {
                str = str.substr(x-1)
                console.log(str)
            }
        } 
    } 
}

unique('hello world')