mrClints = (operator,n,urutan) =>{
    result = 0
    digit = []
    for(i = 0; i < n; i++){
        digit.push(Math.floor(Math.random()*n))
    }
    for(item of urutan){
        if(operator == 'sum' || operator == 'SUM'){
            result += digit[item]
            console.log('indeks ke-'+item+' = ' +digit[item]) 
        }
    }
    if(operator == 'sub' || operator == 'SUB' || operator == 'div' || operator == 'DIV' || operator == 'mul' || operator == 'MUL'){
        result = digit[urutan[0]]
        console.log('indeks ke-'+urutan[0]+' = ' +result)
        for(i=1; i < urutan.length; i++){
         if(operator == 'sub' || operator == 'SUB'){
            result -= digit[urutan[i]]
            console.log('indeks ke-'+urutan[i]+' = ' +digit[urutan[i]])
         }else if(operator == 'div' || operator == 'DIV'){
            result /= digit[urutan[i]]
            console.log('indeks ke-'+urutan[i]+' = ' +digit[urutan[i]])
         }else if(operator == 'mul' || operator == 'MUL'){
            result *= digit[urutan[i]]
            console.log('indeks ke-'+urutan[i]+' = ' +digit[urutan[i]])
        }       
        }
    } 
    console.log('hasil dari operasi '+operator+' = '+ result);
}

mrClints('sub',50,[15,9,8,4,1,5])