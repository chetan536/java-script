/*Key Events
1.keypress =>when key is pressed
2.keydown => when key is down
3.keyup => when key is released */


let txt = document.querySelector('#txt')


// keypress
txt.addEventListener("keypress" , () => console.log("keypress")
)


// keydown
txt.addEventListener('keydown' , () => console.log('keydown'))


// keyup
txt.addEventListener('keyup' , () => console.log(txt.value)
)













