/*Higher order function
All js function are higher order function
A function which accepts another function as an argument or
returns a function is known as Higher Order Function
*/ 

/*Built-In Functions 
1. setTimeout(handler , time in milliseconds) => executes handler after specified time
2.setInterval(handler , time in milliseconds) => keeps executing handler for specifed time intervals
3.alert('')
4.prompt('')*/

setTimeout(function(){
    console.log("i am setTimeout");
    }, 3000);

setInterval( () => {
     console.log('i am setInterval');
     },2000 );


/*Filters() */
 
let num = [1,2,3,4,5,6,7,8,9];
let res = num.filter(function(singlenum){
    return singlenum % 2 === 0;
});
console.log(res);



