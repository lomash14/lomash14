console.log("this is a loop");
// let age=15;
// let bornAge= age>=18;
// if(age>=18){
//     console.log("the age is being { 😎 } for born age { 😁 }");  //windows+. for display emojis on your console screen
// }
// else{
//     console.log('the age is not true for the situation 😑');
// }

// let marks=prompt("Enter your marks ");
// if(marks<=33){
//     console.log("sorry  you have been failed,better luck 😫");
// }
// else if(marks<=60){
//     console.log("congrats!! you have been passed with second division 😏");
// }
// else if(marks>=60){
//     console.log("Congrats!! , You have been passed with first division 🤗")
// }

// let money=0;
// let money=100; //it have a true value
// if(money){
//     console.log("dont waste it");
// }
// else{
//     console.log("u got a job"); //return this because 0 is a falsy value
// }

// let height;
// let height=19;
// if(height){
//     console.log("height is defined");
// }
// else{
//     console.log('height is undefined');  //height is undefined
// }

let n = 4;

let string = "";
let k="*"
for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    string += "*";
  }

  string += "\n";
}

console.log(string);

// const day = "satuarday";
// // const day=0;;
// switch (day) {
//   case "monday": //case displays the flow of the data //day===value comparison it checks both data and the val
//     console.log("studying mongo db");
//     break;
//   case "tuesday":
//     break;
//   case "wednesday":
//     console.log("studing js examples");
//     break;
//   case "thursday":
//     console.log("studying express");
//     break;
//     case "satuarday": //it braks into  the this statement
//     case "sunday":
//       console.log("enjoy the weekend")
//       break;
//       default:
//         console.log("not today!!");
// }

// let day="wednsdays";
// if(day ==="monday"){
//   console.log("today is coding day")
// }
// else if(day==="tuesday"){
//   console.log("today is maths day")
// }
// else if(day==="wednsday"){
//   console.log("today is science day")
// }
// else if(day==="thursday"){
//   console.log("today is economics day")
// }
// else if(day==="friday"){
//   console.log("today is english day")
// }
// else{
//   console.log("weekend day for chilling");
// }

// const age=prompt("enter your age here");
// const age=18
// age>=18?console.log("you can drink beer 🍺"):console.log("you can drink pepsi 🥤"); //condition--true--
// let age=35;
// let drink = age>=18?'you can drink beer!!':'you can drink water';
// console.log(`i like to drink ${age>=18?'you can drink beer': 'you can drink pepsi'}`);