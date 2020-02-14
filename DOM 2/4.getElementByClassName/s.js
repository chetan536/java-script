/*getElementByClassName ("Class")
Can select multiple elements by entering there class name 
It's a node list which is array like object
index based has length property but no array methods will be available */

let tittle = document.getElementsByClassName("tittle");
tittle[0].style.color = 'red';
tittle[1].style.background = 'green'

let list = document.getElementsByClassName("shel1");
list[1].style.background = 'black';


// Can use array properties after using spread operator

let betterlist = [...list];

betterlist.forEach(ele => {
    ele.style.color = 'blue'
});




