/* Mouse Events
 1.click
 2.mouseup
 3.mousedown
 4.mouseover => hover that element
 5.mouseout => hover out of that 
 */

 let btn = document.querySelector('.btn')
 let head = document.querySelector('.head')


//click
btn.addEventListener("click", () => console.log("click"));

// mouseup
btn.addEventListener("mouseup", () => console.log("mouseup"))


//mousedown
btn.addEventListener("mousedown", () => console.log("mousedown"));


// mouseover
head.addEventListener("mouseover", () => {
    head.className = "special"
    
})

//mouseout
h4.addEventListener("mouseout", () => {
    h4.classList.remove("special");
  });


