console.log('this is a optional chaining');
const  restraunt={
    name:"Classico AlPeno",
    location:["Noida","gurgaon","delhi","ghaziabad","faridababd"],
    category:["Chinese","Italian","Indian","french"],
    starterMenu:["Soup","drinks","salad","water"],
    mainMenu:["Noodles","Pizza","pasta","garlic bread","paner masala"],
    openingHours:{
        thursday:{
         open:12,
         close:22
        },
        friday:{
         open:11,
         close:23
        },
        satuarday:{
         open:0,
         close:24
        }
    },
    order:function (starterIndex,mainIndex) {
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
}

// if(restraunt.openingHours.fri)
console.log(restraunt.openingHours.fri)

// let days=['monday','tuesday','wednesday','thursday','friday','sataurday','sunday']
// for(const day of days){
// let openTime=restraunt.openingHours[day]?.open
// console.log(`on ${day} we Open at this time ${openTime}`);
// }


// let days=['monday','tuesday','wednesday','thursday','friday','satuarday','sunday']
// for(const day of days){
//   let open=  restraunt.openingHours[day]?.open ?? 'closed'  //coeciel nullish operator display 0
//   let close=  restraunt.openingHours[day]?.close ?? 'closed'

//   console.log(`restraunt opened ${day} at ${open} AM to ${close} PM`);
// }

// for(const day of days){
//   let openTime=  restraunt.openingHours[day]?.open??'closed'
//   let closedTime=  restraunt.openingHours[day]?.close??'closed'
// console.log(`restraun opents at ${openTime} till ${closedTime}`);
// }

/// Methods
console.log(restraunt.order?.(0,2) ?? 'method does not exist')
console.log(restraunt.oder?.(0,2) ?? 'method does not exist') // method does ot exists

//Arrays--

const users=[{
    name:'johnson',
    email:'@xyz',

}]

console.log(users[0]?.name??'user undefined') // johnson 
console.log(users[0]?.email??'email undefined')//@xyz

