const readline = require('readline')

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

interface.on('line', input => {
    let location = 1
    try{
        for(var ch of input){
            switch(ch){
                case 'A':
                    if(location === 1)
                        location = 2
                    else if(location === 2)
                        location = 1
                    break
                case 'B':
                    if(location === 2)
                        location = 3
                    else if(location === 3)
                        location = 2
                    break
                case 'C':
                    if(location === 1)
                        location = 3
                    else if(location === 3)
                        location = 1
                    break
                default:
            }
        }
        console.log(location)
        interface.close()
    }catch(e){
        console.log(e.message)
    }
})