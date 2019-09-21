var datakey = ["dumb","ways","the","best"]
var word  = 'dumbways'

check = (param1, param2)=>{
   for(item of param1){
      let patt = new RegExp(item)
      console.log(item+' => '+patt.test(param2))       
   }
}

check(datakey,word)