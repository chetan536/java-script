/* className
    classList
*/


let first = document.getElementById('first')
let second = document.querySelector('#second')
let third = document.querySelector('h3')

console.log(first.className);

first.className = 'text'; // replaces the previous class
console.log(first.className);


console.log(second.classList);

second.classList.add = ('colors' , 'text')
 

second.classList.remove('text')



third.className = 'colors';

console.log(third.className);
