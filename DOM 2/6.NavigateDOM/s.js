/*
childNode => treates with spaces as text
children
firstChild
lastChild
nextSibling
previousSibling
*/

let list = document.querySelector(".list");
console.log(list);

console.log('childNodes :', list.childNodes);

let childNodes = list.childNodes;
childNodes[1].style.background = 'red';  //white spaces are considered



let children = list.children;
console.log('chldren :', children); //white spaces are not considered

children[2].style.background = 'orange';


console.log('firstChld', list.firstChild)  
console.log('lastChild', list.lastChild); //white spaces are considered in first and last child


/*Siblings 
Next consecutive element is known as siblings
nextSibling
previousSibling
Whitespaces are considered 
If we give next or previous sibling after last child it will return null
*/



let li = document.querySelector('li');
console.log('1st li :', li);
let siblings = li.nextSibling.nextSibling;
console.log('nextSibling :', siblings );

console.log('previousSibling :', siblings.previousSibling.previousSibling);
