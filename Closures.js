console.log("this is a closures concept");

//closure

const secureBooking= function () {
    let passengerCount=0;
    return function (){
        passengerCount++
        console.log(`${passengerCount} passengers`)
    }
}
const booker=secureBooking(); // it stores the function value
booker();  // 1
booker(); // 2
booker(); // 3

const OuterFunction=()=>{
    let passengerCount=0;
   return function(){
     passengerCount++
     console.log(`passengerCount:${passengerCount}`);
   }
}
let valueFunction=OuterFunction()
valueFunction(); // execution context 1 //pop up  from the stack
valueFunction(); //execution context 2 // pop
valueFunction(); // execution context 3 //pop

//Example ----

let f;

const g=()=>{
    const  a=10;
    f=function (){
        console.log(a*2); // lexical scope of the variables access the props od the outer function
}
    // f();
}

const h=function(){
    const b=20;
    f=function (){
        console.log(b*2); // lexical scope of the variables access the props od the outer function
}
}
g();
f();

//re-assign function
h();
f();

//Example 2

const boardPassengers= function(n,wait){
const perGroup=n/3;
setTimeout(function(){
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`The are three groups each with  ${perGroup} passengers`)

},wait * 1000);

console.log(`we will start boarding at ${wait} seconds`)
}

boardPassengers(180,3) //it display the set time out function after 3 seconds