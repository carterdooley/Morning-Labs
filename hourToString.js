const toString = (time) => {
    time.split('')
    theLog = ""
    if(time[0] === '0' && time[1] === '1'){
        theLog += "One "
    }
    else if(time[0] === '0' && time[1] === '2'){
        theLog += "Two"
    }
    else if(time[0] === '0' && time[1] === '3'){
        theLog += "Three"
    }
    else if(time[0] === '0' && time[1] === '4'){
        theLog += "Four"
    }
    else if(time[0] === '0' && time[1] === '5'){
        theLog += "Five"
    }
    else if(time[0] === '0' && time[1] === '6'){
        theLog += "Six"
    }
    else if(time[0] === '0' && time[1] === '7'){
        theLog += "Seven"
    }
    else if(time[0] === '0' && time[1] === '8'){
        theLog += "Eight"
    }
    else if(time[0] === '0' && time[1] === '9'){
        theLog += "Nine"
    }
    else if(time[0] === '1' && time[1] === '0'){
        theLog += "Ten"
    }
    else if(time[0] === '1' && time[1] === '1'){
        theLog += "Eleven"
    }
    else if(time[0] === '1' && time[1] === '2'){
        theLog += "Twelve"
    };
    return theLog
}




console.log(toString('11'))