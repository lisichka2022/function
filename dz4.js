'use strict'

function potatoBorch(potatoWeight=75,borchLitr=48,kiloPrice=13){
    const potatoLitr=(potatoWeight*4)/1000;
    let potatoes=borchLitr*potatoLitr;
   let  costOfPotatoes= Math.ceil(potatoes)*kiloPrice;
   return costOfPotatoes;
}
console.log(potatoBorch());

