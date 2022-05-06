console.log('looping concept');

const  restraunt={
    name:"Classico AlPeno",
    location:["Noida","gurgaon","delhi","ghaziabad","faridababd"],
    category:["Chinese","Italian","Indian","french"],
    starterMenu:["Soup","drinks","salad","water"],
    mainMenu:["Noodles","Pizza","pasta","garlic bread","paner masala"],
    openingHours:{
        thu:{
         open:12,
         close:22
        },
        fri:{
         open:11,
         close:23
        },
        sat:{
         open:0,
         close:24
        }
    },
}



// let objProps=Object.keys(restraunt.openingHours);
// console.log(objProps); //display in the form of an array
// console.log(`we are opened on ${objProps.length} day `)

// for(const day of Object.keys(restraunt.openingHours)){ //day is a variable
//     console.log(day);  //display in the form of text/string
// }

// let properties=Object.keys(restraunt.openingHours);
// console.log(properties);

// let openStr=`we are open on  ${properties.length} days :`;

// for(const day of properties){
//     openStr+=` ${day}, `
// }
// console.log(openStr);


//Property values
// const values=Object.values(restraunt);
// console.log(values); // is display the value of objects into an array

// //entire objects:

const entries=Object.entries(restraunt.openingHours);
console.log(entries) // it  converted the objects into an arrays

for(const x of entries){
    console.log(x); // it displays the keys element of the element s of the arrays 
}

// key,value
for(const [key,{open,close}] of entries){ //here key is days
    console.log(`on ${key} we opened at ${open} and closed at ${close}`); // it displays the keys element of the element s of the arrays 
}