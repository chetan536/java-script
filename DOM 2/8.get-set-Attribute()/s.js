/*.getAttribute() => to acess the attribute presemt in that element
.setAttribute() => to set attribute to particular element */


let list = document.querySelector('.list');
console.log(list);

let link = list.children[0].getAttribute('id')
console.log('getAttribute',link);

let ac = list.children[0].children[0].getAttribute('href')
console.log('getAttribute',ac);

let no = list.children[1].setAttribute('id', 'dynamic')  //id / class 
console.log('setAttribute', list.children[1]);









