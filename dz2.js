'use strict'

function padString(string,length,symbol,symbolPosition=true){
    let result='';
    if(string === undefined || string.trim() === ''){
        result = 'error with string';
        return result;
    }
    else if(isNaN(+length)|| length<1 ){
        result='error with length';
        return result;
    }
    else if(symbol === undefined || symbol.trim() === ''){
        result='error with symbol';
        return result;
    }
    else if(symbolPosition !==true && symbolPosition!==false){
        result='error with right or left position';
        return result;
    }
    else if(string.length>length){
        let str= string.length -(string.length-length);
        result=string.substr(0,str);
        return result;
    }
    else{
        for(let i=string.length;i<length;i++){
        result+=symbol;
    }
}
if(symbolPosition===true){
    result=string+result;
}
else if(symbolPosition===false){
    result=result+string;
}
    return result;}
console.log(padString('hello', 6, '*',false));