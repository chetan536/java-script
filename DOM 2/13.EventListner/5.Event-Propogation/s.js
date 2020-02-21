/*Event Propogation
1.Event Bubling  => clicked element first then bubbles up i.e default 
2.Event Firing =>first at root and then fires until it reaches target */


let container = document.querySelector(".container");
let list = document.querySelector(".list");
let li = document.querySelectorAll(".ele");

/* Event bubbling
container.addEventListener("click", () => {
    console.log('you have clicke me');
    
})


list.addEventListener("click", () => {
    console.log("you clicked ul");
  });
  

li.forEach(e => {
    e.addEventListener('click', () => {
        console.log('you clicked li');
        
    })
})  
*/

container.addEventListener('click', () => {
     console.log('you clicked div');
     
},
true
)




list.addEventListener(
    "click",
    () => {
      console.log("you clicked ul");
    },
    true
  );
  


  
  li.forEach(e => {
    e.addEventListener("click", () => {
      console.log("you clicked li");
    });
  }, true);