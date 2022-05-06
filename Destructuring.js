"use strict";
console.log("this is a destructing of arrays concept");
// const  restraunt={
// name:"Classico AlPeno",
// location:["Noida","gurgaon","delhi","ghaziabad","faridababd"],
// category:["Chinese","Italian","Indian","french"],
// starterMenu:["Soup","drinks","salad","water"],
// mainMenu:["Noodles","Pizza","pasta","garlic bread","paner masala"],
// order:function (starterIndex,mainIndex) {
//     return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
// }
// }

// const[first,second]=restraunt.category; //destructuring process
// const[first, ,second]=restraunt.category; //first,third //it skip second value
// console.log(first,second) //chineese italian

// let [main,secondary]=restraunt.category;
// console.log(main,secondary);

// const temp=main;
// main=secondary;
// secondary=temp;
// console.log(main,secondary); /// chinese italian and italian chinese 

// console.log(restraunt.order(2,2))  //display in the form of an array
// const[starter,main]=restraunt.order(2,4)
// console.log(starter,main); // it pop out from array  //display in the form of string

///nested array concept---
//array inside in an array is called nested array concept
// const nested=[2,4,[5,6]];
// const[i,j,k]=nested ;
// console.log(i,j,k);

//default values---
// let [p,q,r]=[3,4]
// console.log(p,q,r); // 3,4 and undefined //because we cannod define the value of the third vsrisble of an  arrayss

// let [a=1,b=1,c=1]=[3,4]
// console.log(a,b,c);


///Destructuring Of Objects--===-------->>>>>

const  restraunt={
    Rname:"Classico AlPeno",
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
   order:function (starterIndex,mainIndex) {
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
    orderDelivery:function ({starterIndex,mainIndex,time,address}) {
        console.log(`order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver from ${address} at ${time} `);
    } 
}

restraunt.orderDelivery({
    time:"22:30",
    address:"south ex",
    mainIndex:2,
    starterIndex:2  
})

const{Rname,openingHours,category}=restraunt;
console.log(Rname,openingHours,category)

///using third party variables--
const{Rname:monark,openingHours:hours,categories:row}=restraunt;
console.log(monark,hours,row);


//Mutating variables----
let a=8;
let b=9;
const obj={ a:1 ,b:2, c:3};
({a,b} = obj);
console.log(a,b)  //1,2

    