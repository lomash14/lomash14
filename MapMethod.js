console.log("map method of an array");
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const inrTousd=73.02;
const convert=movements.map((inr)=>{
   return inr*inrTousd
});
console.log("total currencies  in INR:",convert);

//example 2 

const movementsINR=[];
for(const mov of movements){
movementsINR.push(mov*73.02)
}
console.log(movementsINR); // results the same output usin for of loops

//example 3

// movements.map((mov,i,arr)=>{
//     if(mov>0){
//         console.log(`your ${i+1} is deposited ${mov} money`)
//     }
//     else{
//         console.log(`your ${i+1} is withdrawn ${Math.abs(mov)} money`)
//     }
// })

//using ternry operator

// const newMov=movements.map((mov,i,arr)=>
//     `movement ${i+1} : you ${mov>0 ? 'deposited' : 'withdrawn'} ${Math.abs(mov)}`
// )
// console.log(newMov); // the shorter way to display

//example

let user="rob Van dam";
const userName=user.toUpperCase().split(' ').map((name)=>{
    return name[0]; //displays index 0 of every elemnt of words after merge
}).join('');
console.log(userName); //RVD