/*String <=> Array Conversion
String can be converted to Array using .split()
and vice versa using .join()*/


let str = 'i am string';
console.log(".split() :", str.split(" "));

let str1 = [ 'hey' , null , undefined , 7 , true];
console.log(".joint() :", str1.join(" "));


//  reverse a string

function reverseString(str2){
    arr1 = str2
    .split(" ")
    .reverse()
    .join(" ")
console.log(arr1);
}
reverseString("what a instagram");


// find the longest word

function longestWord(str3){
    arr2 = str3.split(" ")
    console.log(arr2);

    let ans = " "
    for ( i = 0 ; i < arr2.length ; i++){
        if (arr2[i].length > ans.length){
            ans = arr2[i]
        }
    }
    console.log('longestWord :', ans);
    
}

longestWord(" what the instageram")