console.log('String data structures programs');

// const airlines="Indigo Airlines India";
// const planes="3BCFE";
// console.log(planes[0]); //3
// console.log(airlines.length); // 6
// console.log(planes.indexOf("F")) //3
// console.log(planes.lastIndexOf("F")) //3 // isme last character ki  position define karta hai
// console.log(airlines.slice(4)); // go // slice method display  the given  number of the strings
// console.log(airlines.slice(2,5)); // display  2 to  5 values // dig

// console.log(airlines.slice(0,airlines.indexOf(' '))) //indigo
// console.log(airlines.slice(airlines.lastIndexOf(' ') + 1)); // display  the ast index of space //India

// console.log(airlines.slice(1,-1));
// console.log(airlines.slice(-2)); // last twi elements of an string //ia

// const checkMiddleSeat=(seats)=>{
//     //check b and c are middle seats---
//    if(seats.lastIndexOf('B') && seats.lastIndexOf('C')){
//        console.log(`seats are the Middle seats`)
//    }
//    else{
//        console.log("they are not middle seats");
//    }

// }
// checkMiddleSeat('11B');
// checkMiddleSeat('31C');
// checkMiddleSeat('11E');
// checkMiddleSeat('11A');

// const checkMiddleSeat=(seats)=>{
//         //check b and c are middle seats---
//         const s=seats.slice(-1) //BCEA displayed
//         if(s==='B' || s==='C'){
//             console.log('you got middle seats')
//         }
//         else console.log('you got corner seats');
// }
//     checkMiddleSeat('11B');
//     checkMiddleSeat('31C');
//     checkMiddleSeat('11E');
//     checkMiddleSeat('11A');

// const airline="Turkish Airways";
// console.log(airline.toLocaleLowerCase());
// console.log(airline.toLocaleUpperCase());

// const passenger='joNaS';
// const lowerPassenger=passenger.toLocaleLowerCase();
// const newPass=lowerPassenger[0].toLocaleUpperCase() + lowerPassenger.slice(1); // jonas
// console.log(newPass);

// const lowpass="hariKiShaN";
// const highname=lowpass.toLocaleUpperCase();
// const lowname=lowpass[0].toLocaleLowerCase() + highname.slice(1);
// console.log(lowname); // hARIKISHAN

// //Comparison emails--

// const email='lomashsharma672gmail.com'
// const loginemail='lomashsharma672gmail.com'
// //replacing

// const currency="568$";
// const newcurr=currency.replace('$','%');
// console.log(newcurr); // it replaces the values  

// //split and Join

// const myStr="abhishek+raghu+anand";
// let newStr=myStr.split('+');
// console.log(newStr);  /// removes = from the given string

// console.log('hey harry!!'.split(' ')); // hey harry

// const [firstName,lastName]= 'john wick'.split(' ');
// // console.log(`hello  Mr. ${firstName.toLocaleUpperCase()} ${newLastName}`);

// const newName=['Mr.',firstName,lastName.toUpperCase()].join('');
// console.log(newName);  //john WICK //join method joins the arrays 

//capatilize number
const [firstName,lastName]='john wick'.split(' ');
const newName=['Mr',firstName,lastName.toUpperCase()].join(' ');
console.log(newName);

const capNumb=(name)=>{
 const names=name.split(' ');
 const nameUpper=[]
 for(const n of names){
   // nameUpper.push(n[0].toUpperCase() + n.slice(1)) // or
   nameUpper.push (n.replace(n[0],n[0].toUpperCase()))
 }
 console.log(nameUpper.join(' '));
}
capNumb("hey my name is john wick")
capNumb("how are you john??")


//Padding of string

let message="go to the gate no.3";
console.log(message.padStart(24,"*").padEnd(30,'+')) // total  string length is 24 from  beggining star
// console.log(message.padEnd(24,"*")) // total  length of string is 24 at end of the string print

const maskCreditCard=(number)=>{
const str = number + ' ';
const last=str.slice(-4);
return last.padStart(str.length,"*")

}
console.log(maskCreditCard('63848282847')); /// **847
console.log(maskCreditCard(76847583472843)); /// **843

//Repeat 

const myMessage="Bad weather...All departures delayed";
console.log(myMessage.repeat(3)); // it repeat thrice 

const myPlanes=(numb)=>{
    console.log(`there are ${numb} planes ${'✈'.repeat(numb)}`)
}
myPlanes(5)
myPlanes(3)
myPlanes(2)