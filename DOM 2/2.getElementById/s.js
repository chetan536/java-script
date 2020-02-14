/*getElementById ('id)
can select the element by passing the element which we want to select
id must be unique for each element
*/

let btn = document.getElementById('btn');
btn.style.color = 'blue'

let head = document.getElementById('head');
head.style.color = 'red'

// Without assigning to variable

document.getElementById('head').style.background = 'green';

// all style properties we can change

console.log(btn.style);


