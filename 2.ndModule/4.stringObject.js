/*string objects
string has properties and methods which we call to do some specific action
*/ 

// string
let str0 = 'String';
console.log(str0);
 
let strObj = new String('Object String');
console.log(strObj , typeof strObj);


let str = 'I am a String';

str.length;
console.log("length :" , str.length)

str.toLowerCase();
console.log('toLowerCase :',str.toLowerCase())

str.toUpperCase();
console.log('toUperCase :',str.toUpperCase());

str.indexOf('s');
console.log('indexOf :',str.indexOf('s') );


str.charAt(0);
console.log('charAt :',str.charAt(0));

str.slice();
console.log('slice :',str.slice(0,8));

let arr = str.split('');
console.log(arr);

str.split('')
console.log('split :', str.split(' '));
/*if spaces is give split for each world
, if spaces is not given splits for each leter
,if 0 is given considers it as an array */


str.includes('')
console.log('includes :', str.includes('am'));

str.toString() , str.valueOf()
console.log(str.toString , str.valueOf)

let sub = str.substring(0,4)
console.log('subString :', sub);

console.log('substr :', str.substr(0,4))


str.concat('')
console.log("concat : ",str.concat(' finish '))
// the spaces given here will count

str.startsWith('') , str.endsWith('')
console.log('startsWith :',str.startsWith('I'), 'endsWith :', str.endsWith('h'))


console.log(str[0]);
// for accesing the 1st element 


// string Templates

let fn = 'chetan';
let ln = 'gowda';

console.log('fullName :',` ${fn},${ln}`)
// using special charecter we can use it  ` `.