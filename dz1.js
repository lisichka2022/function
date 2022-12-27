'use strict'

let number=prompt('Input number');
let degree=prompt('Input degree');

function powNumber (number, degree = 1) {
  let result = null;
  if (isNaN(+number) || isNaN(+degree)) {
      result = 'some error';
  }
  else {
      result = Math.pow(number, degree);
  };
  return result;
  
}
let result = powNumber(number, degree);
alert (result);

