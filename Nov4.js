

const sorter = (str) => {
let small = ''
let med = ''
let large = ''

    for(i = 0; i < str.length; i++) {
        if(str[i] === 's' ){
            small += 's'
        } else if (str[i] === 'm'){
            med += 'm'
        } else {
            large += 'l'
        }
    }return small + med + large
}




console.log(sorter('lsmslsmslmsl'))