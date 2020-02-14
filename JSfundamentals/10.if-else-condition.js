/*if-else
Condition statement checks weather the statement is true and then executes

1.>
2.<
3.>=
4.<=
5.==   implicit type conversion happens and datatypes won't matter
6.===  strict not equal to checks for datatype also
8.!==
*/

let a = 2;
let b = 4;

if(a > b){
    console.log("a > b");
} else {
    console.log("a < b");
}

let x = 1;
let y = "1";  //i,plicit type convertion

if (x === y){
    console.log("x === y")
}else if (x == y) {
    console.log("x == y")
}






