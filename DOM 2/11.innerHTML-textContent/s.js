/* .innerhtml
   .textContent 
*/
let ul = document.getElementsByClassName('list')
let div1 = document.querySelector('.first')
let div2 = document.querySelector('.second')

console.log('.innerHTML :', div1.innerHTML);
console.log('.textContent :', div1.textContent);


// innerHTML creating
let ul2 = document.createElement('ul')
ul2.innerHTML = '<li> dynamically added</li> <li> inner HTML </li> '
document.body.appendChild(ul2);



// textContent creating
let p = document.createElement('p')
p.textContent = 'I am TectContent'
div1.insertBefore(p , ul)
