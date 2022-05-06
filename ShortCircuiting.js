// console.log("this is sc");
// console.log('' || true); //true because '' is falsy value
// console.log(undefined || null) // null is falsy value
// console.log('0' || 'jonas'); //same liike that

const  restraunt={
    name:"Classico AlPeno",
    location:["Noida","gurgaon","delhi","ghaziabad","faridababd"],
    category:["Chinese","Italian","Indian","french"],
    starterMenu:["Soup","drinks","salad","water"],
    mainMenu:["Noodles","Pizza","pasta","garlic bread","paner masala"],
}

// restraunt.numGuest=24;
// const guest1=restraunt.numGuest?restraunt.numGuest:10
// console.log(guest1);

// const guest2=restraunt.guest || 10
// console.log(guest2);


//----------AND--------///



console.log(0 && true); // it retur  the falsy value
console.log(2 && "name"); // //if both r true then return  thr second value
console.log(1 && 0)

//----Nullish coeceling props--
// it contains null and undefined valyes

console.log(0 || 10); // that makes problem
//so to fixwd it we use
console.log(0 ?? 10); //is displays 0 

const guestList=restraunt.guest ?? 10; // here .guest is null value then it return default value
console.log(guestList);