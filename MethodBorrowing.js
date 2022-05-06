console.log("method borrowing");
// is process me hum  ek object ki value ko dusre object ki value me copy krdete hai 

// const jonas={
//     year:1997,
//     calcAge:function () {
//         console.log(2022-this.year);
//     }
// }
// jonas.calcAge();

// const adam={
//     year:2001,
// }
// adam.calcAge=jonas.calcAge; //it duplicates  objexts to another copy
// adam.year=jonas.year //it copies the value of jonas to adam
// console.log(adam.year);
// adam.calcAge()


//probem 2--

const jonas={
    year:1997,
    firstName :'jackob',
    calcAge:function () {
        console.log(2022-this.year);
//solution 1--

//         const self=this;  //method 1 for resolving function inside function problem in object literals
// const jason=function(){
//     console.log(self.year>=1981 && self.year<=2001) // true
// }
// jason();

  //solution 2--

  //         const self=this;  //method 1 for resolving function inside function problem in object literals
// const jason=function(){
//     console.log(self.year>=1981 && self.year<=2001) // true
// }
// jason();

//solution 3---

const jason= () =>{
    console.log(this.year>=1981 && this.year<=2001) // true // we access arrow function inside a object functions
}
jason();
    },
    greet:()=>console.log(`Hey!${this.firstName}`), // hi undefined // that is the problem
}

jonas.greet();
jonas.calcAge();
console.log(this.firstName)



///same practice
const Id1={
    firstName:"Nick",
    lastName:"Jonas",
    age:1997,
    getFullData:function () {
        console.log(`my full name is ${this.firstName} ${this.lastName}`)
        console.log(this.age>=1990 && this.age<=1999)
        const mySum=()=>{
            console.log( mySum(`${this.age}`));
           
        }
    },
  
}
Id1.getFullData();
