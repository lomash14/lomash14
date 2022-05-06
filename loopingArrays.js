console.log("this is a looping arrays concept");
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

const menu=[...restraunt.starterMenu,...restraunt.mainMenu]

for(const item of menu)console.log(item); //here item work as a variable which display the properties
//menu

for(const item of menu.entries())console.log(item); // entries display the data in formof an array

console.log(menu.entries()); // array  iterator

for(const [i,el] of menu.entries()){
    console.log(`${i+1}:${el}`);
}