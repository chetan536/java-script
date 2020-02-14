/*localStorage => will be stored even if the window is closed 
SessionStorage => only present till images are up
Both work the same 
.setItem('key','value') to store the value 
.getItem('key') to retrive the value*/



localStorage.setItem("name","chetan");
localStorage.setItem('job','sed');
localStorage.setItem('place', 'banglore')


let get = localStorage.getItem('name')
console.log(get);



let arr = ['john', 'seena' , 'abd']


localStorage.setItem('shebly', JSON.stringify(arr))
 
let get1 = JSON.parse(localStorage.getItem('shebly'));
// document.write(get1)
console.log(get1);


