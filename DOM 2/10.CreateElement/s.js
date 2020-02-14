/* .createElement('tagName')
    .createTextNode('string')
    .appendChild('element')
 */


let did = document.querySelector('.div');

let tag = document.createElement('a');

let str1 = document.createTextNode('link');

tag.href = '#';

tag.appendChild(str1);

did.appendChild(tag);

// tag.classList.add('show')



let a = document.getElementById('h3');
let b = document.createElement('p');
let c = document.createTextNode('i am a para dynamically added')

b.appendChild(c)
a.appendChild(b)

b.classList.add('show');


/*.insertBefore() => appendChild() adds the element at the end of existing elements
If we want to dynamically add element before exisiting ones we can use this
Takes 2 parameters 1.what we want to insert 
                   2.Before Which element we want to insert */

let p1 = document.createElement('p')
let txt1 = document.createTextNode('i am insertBefore')
p1.appendChild(txt1);
did.insertBefore(p1,a);
p1.classList.add('insert');



/*replaceChild() => To replace an existing element with new element
2 parameters 1.What we want to add 
             2.WHich element to replace  */

             let h4 = document.querySelector(".h4");
             let replace = document.createElement("h4");
             let txt2 = document.createTextNode("I am replaceChild");
             replace.appendChild(txt2);
              
             
            //  h4.appendChild(replace)
             did.replaceChild(replace,h4)

