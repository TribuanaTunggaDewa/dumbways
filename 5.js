//1telur = 2500
//prima true && 12 telur += 2telur
//!prima && ganjil && 12 telur += 3 telur
//kelipatan 5 && if += telur = genap * 5.

BuyEgg = (tgl,uang) => {
if(tgl >= 1 && tgl <= 31){
    var telur = Math.floor(uang/2500)
    var lusin = Math.floor(telur/12)
    var bonus = 0
    if(prima(tgl) && lusin > 0){
       bonus = 2*lusin
    }else if(ganjil(tgl) && lusin > 0){
       bonus = 3*lusin
    }

    if(lipat5(tgl) && bonus > 0){
       if(ganjil(bonus)){
           
           bonus = bonus * 10
       }else{
        bonus *= 5
       }
    }
    telur += bonus
    
    console.log(telur)

}else{

console.log('nilai tanggal dalam rentang 1 sampai 31')
}

}

BuyEgg(13, 60000)





//fungsi pembantu
function prima(tgl){
    if(tgl == 2){
      return true
    }else{
        for(i = 2; i < tgl; i++){
            if(tgl % i == 0){
                return false
            }
        }
      return true
    }
  }
  
  function ganjil(tgl){
    if(tgl % 2 == 1){
        return true
    }
    return false
  }
    
  function lipat5(tgl){
      if(tgl % 5 == 0){
      return true
      }
      return false
  }