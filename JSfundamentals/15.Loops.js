//  block of codes used to run repeatedly while certain conditions are true

//  While

let x = 5;

while(x > 0) {
    console.log("WHILE : the num is " + x);
    x--;
}

// *Do While => same as while but it executes code once before checking condition

let y = 5;

do{
   console.log("DO-While : the num is " + y);
   y--;
}while(y > 0);

// For 
// (initialization : condition : itteration)

for( let i = 1; i < 5; i++){
    console.log("For : the num is" + i);
}