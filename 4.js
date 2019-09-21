drawline = (string) => {
    var wadah = string.split()
    for(i = 0; i < string.length; i++){
    res = ''
        for(item of wadah){
            for(j=0; j < i; j++){
                res += " "
            }
            res += item[i] 
        }
        console.log(res)
    }
    
}

drawline('DUMBWAYS')

drawline('DEV99')