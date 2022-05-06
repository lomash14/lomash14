console.log('this is a IIFC function exprssions');

//immidiate invoked function expression

//these functions are the private function expressions which 
// runs inside the running envrinment of its own parameters

(function () {
console.log("hello  how do you do???")
})(); // these are expressions of the iifc functions expressions

(()=> console.log("hello world"))() //  same output as in the arrow functions

//convert object to array practice
let obj1={
    name:"ravi teja",
    address:"palampur",
    mno:124455
}
let obj2={
    name:"gaurav taneja",
    address:"greater kailash",
    mno:124787
}

// let newData=obj1.name;
// console.log(obj1,...obj2.name);
let obj={obj1,obj2}
console.log(obj);
let newVal=Object.assign([],obj)
console.log(newVal);