//  non prmimitive data types
 
// Array
/*Array can store multiple datatypes,
It's stores value in zero index manner
typeof is an "Object" */

let arr = new Array('hey', 123, null, true, undefined);

console.log(arr);
console.log(typeof arr);

let arr1 = ['hey', 123, null, true, undefined];

console.log(arr1);
console.log(typeof arr1);

// to acces specific array
console.log(arr1[3]);


/*7.Functions 
Block of codes which can be used repetedly when necessary
i.e {} => is reffered as code block
a.Declaration => syntax
b.Invoke => calling the function
c.Return => value which particular function returns
d.Parameter => input values which the functions will take
*/

function add(a,b){
    return  a + b;
}
console.log(add(1,3));

    
/*Function Expression
Assigning a variable to function, 
can skip the function name but it's not recomended
*/

let div = function(a,b){
    return a/b;
}
console.log(div(4,2));

/*8.Objects
datatype which has properties and methods
i.e Functions inside object is called as method
. => is dot notation or element access operator
*/

let obj = {
    firstname : "chetan",
    lastname : "gowda",
    age : 23,
    gender : true,

    fullname : function(){
    let x = `${obj.firstname} ${obj.lastname} is not batman`;
    return x;
  }
}

console.log(obj);
console.log(obj.fullname());

























