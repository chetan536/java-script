let arr = [1,2,3,4,5,6];

/*
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
    
}
*/

arr.forEach((e,i,arr)=>{
    
    console.log(e);
    console.log(i);
    console.log(arr);
})

let fill = arr.filter((e)=>{

    return e % 2 == 0
})

console.log(fill);


let ma = arr.map(function(chetan,index){



    return chetan - 2;
})

console.log(ma);


let acc = arr.reduce(function(acc,curr){
console.log(acc,curr);

acc += curr

return acc

})

console.log(acc);





