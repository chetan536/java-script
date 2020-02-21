/* Function
create a block of code and execute the code 
whenever we need to change the behaviour of object (i.e Methods)
 */

 function nameOffunction(){
    //  code
 }
//  invoke
nameOffunction();

/* Method
The built in function ehich will be called to change the behaviour of the object
i.e objName.method()   =>   objName.toLowerCase() 
 */


// decleration calling function without assigning it to any variable


/*Function Expression
when a function is assigned to a variable 
There is no need to declare however it is a good practise

while invoking the function we write variableName()
*/

let expression = function(){
    // code
}
// invoke
expression();

/*Parameters and arguments 

parameters are the input to the function which will we used to later in function code block 

Arguments are the values of parameters given while invokeing the function
*/

/* Function paraArgu(FirstParameter,SecondParameter){
    // code
} 
   
paraArgu(arg1,arg2);
// if we dont pass anyone of the parameters it will show undefined
 */

/*Return Statement
Return a value from funtion */
let ret = function(){
    // code 
    return 'i will return'
    // code return bellow will not run
}
console.log(ret());

// the value of return can be store in the variable

let storedReturn = ret();
console.log(storedReturn);




