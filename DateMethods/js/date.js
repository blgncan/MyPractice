let tarih=new Date();

console.log(tarih);               //==> tarihi uzun formatıyla verir.
console.log(tarih.getDate());     //==> içinde bulunulan ayın gününü verir
console.log(tarih.getDay());      //==> haftanın gününü alıyor.2.gün,3.gün gibi
console.log(tarih.getTime());     //==> 
console.log(tarih.getFullYear()); //==> sadece yılı verir
console.log(tarih.getHours());    //==> tam saati verir.12.25 is 12 verir
console.log(tarih.getMinutes());  //==> dakika cinsinden verir
console.log(tarih.getMonth());    //==> ayın index numarasını verir. 0 dan başlar.yani Şubat 2.ay değil,1.aydır
console.log(tarih.toLocaleDateString()); //==> DD/mm/yyyy
console.log(tarih.toLocaleTimeString()); //==> dakika/saniye/salise
console.log(tarih.toLocaleString());     //==> DD/mm/yyyy/dakika/saniye/salise

console.log(".........................")
console.log(tarih.toLocaleDateString());
tarih.setDate(24);
console.log(tarih.toLocaleDateString());