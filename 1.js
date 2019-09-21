function generateRandomString() {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    var serial = "" 
        for (var i = 0; i < 4; i++){
            text = ""
             for(var j = 0; j < 4;j++){
              text += possible.charAt(Math.floor(Math.random() * possible.length))
             }
             if(i == (4-1)){
                serial += text
             }else{
                serial += text + '-'
             }
            }
            return serial;
  }

  generateserial = (length)=>{
      for(i=1; i <= length; i++){
         console.log(generateRandomString())
      }
  }

  generateserial(7)
