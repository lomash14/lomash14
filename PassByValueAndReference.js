console.log('this is pass by value and reference tutorial');

const flight="LH457";
const jonas={
    name:"john wick",
    passport:"LMV6463628"
}

const checkinn=(flightNum,passenger)=>{
  flightNum="GH4456",
  passenger.name='Mr.'+ passenger.name;

  if(passenger.passport === "LMV6463628"){
      alert("valid passport");
  }
  else{
      alert("invalid passport");
  }
}

checkinn(flight,jonas)
console.log(flight)
console.log(jonas)

// const flightNum=flight; // is the same as doing 
// const passenger=jonas; // it is the same as doing

const newPassport=(person)=>{
person.passport=Math.trunc(Math.random()* 10000)
}
newPassport(jonas)
checkinn(flight,jonas)
