console.log('this is a spread operator tute');
const  restraunt={
name:"Classico AlPeno",
location:["Noida","gurgaon","delhi","ghaziabad","faridababd"],
category:["Chinese","Italian","Indian","french"],
starterMenu:["Soup","drinks","salad","water"],
mainMenu:["Noodles","Pizza","pasta","garlic bread","paner masala"],
orderPasta:function (ing1,ing2,ing3) {
    console.log(`thee is you delicious pasta with ${ing1},${ing2} and ${ing3}`)
}
}
const newMenu=[...restraunt.mainMenu,"chaap"]
console.log(newMenu); //it adds chaap to main menu//

//copy array--
const mainMenuCopy=[...restraunt.mainMenu];
console.log(mainMenuCopy);

//Joining two arrays--
const joinArr=[...restraunt.mainMenu,...restraunt.starterMenu];
console.log(joinArr);

let jonas="myAddress"
let str=[...jonas,"x"];
console.log(str);

// const ingredients=[prompt(`'let\s' make a pasta using ingredient 1?`),prompt(` ingredient 2?`),prompt(` ingredient 3?`)]
// console.log(ingredients);

// restraunt.orderPasta(...ingredients); //it result the given ing1,2,3 displayed in the results


//using objects--

let newRestraunt={...restraunt,ceo:'mark wood',estabished:'1990'}
console.log(newRestraunt); //it adds the elements of onjects 

//for shallow copies
let copyRestraunt={...restraunt}
restraunt.name='Rosta Rico';
console.log(restraunt.name);  //rosta rico 
console.log(copyRestraunt.name);  //old name