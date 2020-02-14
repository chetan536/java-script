/*Refernces 
Primitive datatypes (i.e string,number,boolean,null,undefined)
when assigned to another variable value will be stored, 
if we reassign the value in new variable it won't affect the source variable
Non-Primitive (i.e array, functions, objects)
when we assign to another variable reference will be stored instead of value,
Changes in new variable will affect the source variable
i.e Address of the value will be stored which is reference of source value
 */

//Primitive
let p1 = 'string';
let p2 = p1;

console.log(p1,p2);
p2 = 'not a string'; //reassigning
console.log(p1,p2);

//Non-Primitive
let obj = { name: "John", number: 145 };
let obj1 = obj;
obj1.name = "Bob"; //reassign changes source also
console.log("Source value :" + obj.name);
console.log("reference value : " + obj1.name);


