/* QuerrySelector ("css selector") */
/* querrySelectorAll ("css selector") 
can sselect any element just like we select in CSS
Gives NodeList but we can use array methods no need of spread operator
*/

let tag = document.querySelector('h3')
tag.style.backgroundColor = 'orange';

let cls = document.querySelector('.list');
cls.style.color = 'red';

let id = document.querySelector('#g');
id.style.backgroundColor = 'blue'

let child = document.querySelector('li:first-child');
child.style.color = 'white';

/* can use array opperator insted of spreadd opperator */

let list = document.querySelectorAll('.special');

list.forEach(ele => {
    ele.style.color = 'pink'
});

/*querrySelector => selects the 1st item it gets with matching reference
If we want to select multiple items we must use querrySelectorAll */
