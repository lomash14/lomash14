console.log("this is a rest parameters tutorial");
// function myFun(...manyMoreArgs) {
//     return manyMoreArgs.reduce((a,b)=>{
//         return a+b;
//     }  )
  
//   }
  
// console.log( myFun(1,2,3,4,5));

//spread operator--

//destructuring

// let[a,b,...restValue]=[1,2,3,4,5,6,7]
// console.log(a,b,restValue); //result rest values

//Destructuring--
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
    orderPizza:function(mainInc,...otherInc) {
       console.log(`the main incredient are ${mainInc} and other are ${otherInc}`)
    }
    }

    const [Noodles, , pasta,...otherFood]=[...restraunt.mainMenu,...restraunt.starterMenu]
    console.log(Noodles,pasta,otherFood); // rest parameter collects all rest elements

    //in objects=--==>

    const {sat,...weekdays}=restraunt.openingHours;
    console.log(sat,weekdays);

    //PArt 2-- Funtions

    // function Rest(...restValues) { //it stores the rest values of the elements
    //     console.log(restValues);
        
    // }
    // Rest(1,2,3,4,5)
    // Rest(1,2,3)
    // Rest(1,2,3,4,5,6,7,8);


    restraunt.orderPizza('mushrrom','onion','olives','garlic') // it displays mushroom at first position  and rest at last 