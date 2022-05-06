console.log("this is function");
//  function myFruits(fruit1,fruit2) {
//      console.log(fruit1,fruit2);
//      let fruits=`these are the ${fruit1} and  ${fruit2}`
//      console.log(fruits);
//      return fruits;
//  }
// myFruits("Apple","Orange");
// let fruitStore=myFruits("papaya","guava");
// console.log(fruitStore);


// function myFruits(fruit1,fruit2) {
//     // console.log(fruit1,fruit2);
//     let fruits=`This is a ${fruit1} and  ${fruit2} juice`
//     return fruits;
// }
// const fruitStore1=myFruits("papaya","guava");
// console.log(fruitStore1);
// const fruitStore2=myFruits("lichi","orange");
// console.log(fruitStore2);

// function calAge(birthYear) {
//     const age=2022-birthYear;
//     console.log(age);
//     // return age;
// }
// calAge(1997);

///function expression---

// function calAge1(birthYear) {
//     return 2022-birthYear;
// }
// let age1=calAge1(1997);

// const calAge2=function(birthYear){
//    return 2022-birthYear; // this is called function expressions
// }
// let age2=calAge2(1995);

// console.log(age1,age2)

//Arrow Functions---

// const myYear=(birthYear)=>{
// return 2022-birthYear;
// }
// console.log(myYear(1990))

// const myRetirement=(birthYear)=>{
//   const age=2035-birthYear;
//   const retirement=65-age;
//   return retirement;
// }
// console.log("Your retirement year is:",myRetirement(1997));
// console.log("your retirement years left are:",myRetirement(1990))

// const myYear=(birthYear)=>{
//     return 2022-birthYear;
//     }
//     console.log(myYear(1990))
    
    // const myRetirement=(birthYear,firstName)=>{ // arguments initiations procedures
    //   const age=2035-birthYear;
    //   const retirement=65-age;
    //   return `${firstName} retires in ${retirement} years`;
    // }
    // console.log(myRetirement(1990,"Jonas"))


    ///Function calling another Function---

    // function cutFruits(pieces) {
    //    return pieces*4;
    // }
    // function foodProcessor(Apples,Grapes) {
    //     const applePieces=cutFruits(Apples)
    //     const grapesPieces=cutFruits(Grapes)
    //     const fruits=`${applePieces} apples and ${grapesPieces} grapes mixed together juice`;
    //     return fruits;
    // }
    // console.log(foodProcessor(2,3));
    
function calcAge(birthYear) {
    return 2022 - birthYear;
}

const yearsUntilretirement =function (birthYear,firstName){
 const age=calcAge(birthYear)
 const retirement=65-age;
 if(retirement > 0){
    console.log(`${firstName} retires in ${retirement} year`)
     return retirement;
 }
 else{
    console.log(`${firstName} has alredy retired`);
     return -1;
 }
}
console.log(yearsUntilretirement(1991,"jonas"));
console.log(yearsUntilretirement(1950,"nick"));