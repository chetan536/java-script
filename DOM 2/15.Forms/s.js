/*Forms
 sumbit event listner
 prevent default
 hoe to add value
*/

let a = document.querySelector('#form')
let b = document.querySelector('#submit')

a.addEventListener("submit" , e => {
    e.preventDefault()

    let nme = document.querySelector('#name').value
    let pwd = document.querySelector('#password').value

    console.log(`your name is ${nme} and pwd is ${pwd}`);
    
})





