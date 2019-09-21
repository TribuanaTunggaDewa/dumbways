hitungKembalian = (harga,uang)=>{
   var stok = [50000,20000,10000,5000,2000,500]
   var nilai = uang - harga
   for(item of stok){
       let kuantitas = Math.floor(nilai / item)
       nilai = nilai - (item * kuantitas)

       console.log(kuantitas +' X '+item)
   } 

}

hitungKembalian(110500,200000)