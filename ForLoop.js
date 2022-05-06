console.log("this is a for loops");
// let jonasArray=[
//     "jonas",
//     "brock",
//     2022-1998,
//     "teacher",
//     ['michael','johnson','mark']
// ]
// const types=[]

// for(let i=0;i<jonasArray.length;i++){
// console.log(jonasArray[i],typeof[i]);
// types[i]=typeof jonasArray[i]; //khali type ki string me i ko implement kiya //
// }                              //and it display the type of variables inside the object reference
// console.log(types);



// const years=[1990,1998,2003,2002,1999];
// const ages=[];
// for(let i=0;i<=years.length;i++){
//     ages.push(2022-years[i]);
// }
// console.log(ages);

// console.log("---Only Strings---");
// for(let i=0; i<jonasArray.length; i++){
// if(typeof jonasArray[i] !== 'string') continue; //iterate loop
//     console.log(jonasArray[i],typeof jonasArray[i]);
// }

// console.log("---Break with Number---");
// for(let i=0; i<jonasArray.length; i++){
// if(typeof jonasArray[i] !== 'string') break; //number ki value start hote hi loop rukjaega
//     console.log(jonasArray[i],typeof jonasArray[i]);
// }

// let jonas=[
//     "jonas",  //0
//     "brock",   // 1
//     2022-1998,  // 2
//     "teacher",  //3
//     ['michael','johnson','mark'] // 4
// ]

// for(let i=jonas.length-1 ; i>=0;i--){ // 4 3 2 1
// //  console.log(i)
//  console.log(i,jonas[i]); // ulta output dega // 
// }

// for(let exercise=1;exercise<4;exercise++){
//     console.log(`starting exercise ${exercise}`);
// for(let rep=1;rep<6;rep++){
// console.log(`lifting weight will ${rep}`);
// }
// }

const salary=[30000,45000,55000]
let age=36;
if(age<30){
console.log(`youre having a salary of ${salary[0]}`)
}
else if(age>=30 && age<=45){
console.log(`yore having a salary of ${salary[1]}`)
}
else if(age>45 && age<=60){
console.log(`youre having a salary of ${salary[2]}`)
}
else{
    console.log(`Enjoy the retirement`)
}