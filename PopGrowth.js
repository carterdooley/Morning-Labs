numbers = [1500, 5, 100, 5000]



const pop = (p0, percent, aug, popSur) => {
    var p0 = parseInt(numbers[0]);
    var percent = parseInt(numbers[1]);
    var aug = parseInt(numbers[2]);
    var popSur = parseInt(numbers[3])
    for(nbYear = 0; p0 < popSur; nbYear++){
        p0 += ((p0 * (percent / 100)) + aug)
    }
    return nbYear + " years"
}


console.log(pop(numbers))