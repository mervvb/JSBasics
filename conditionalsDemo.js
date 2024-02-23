var sayı1 = 291
var sayı2 = 30
var sayı3 = 3

// if (sayı1>sayı2){
//     console.log("en büyük sayı: "+sayı1)
// }else if(sayı2>sayı1){
//     console.log("en büyük sayı: "+sayı2)
// }else{
//     console.log("en büyük sayı: "+sayı3)
// }

var enBuyuk = sayı1

if (enBuyuk<sayı2){
    enBuyuk = sayı2
}else if (enBuyuk<sayı3){
    enBuyuk = sayı3
}
console.log(enBuyuk)