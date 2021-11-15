
const createTower = (num) => {
    let tower = []
    let string = ''
    for(i = 1; i <= num; i++){
       for(j = 1; j <= num - 1; j++){
           string += " "
       }
       for(let k = 0; k < 2 * i - 1; k++){
            string += '*'
       }
       string += '\n'
      
    } console.log(string)
}


createTower(7)