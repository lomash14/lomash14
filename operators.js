console.log('welcome to the operators tutorial');
// let value=100;
// let result1=value-50;
// let result2=value-20;
// console.log(result1+result2)

// let value=10;
// let value2=1;
// let result1=value*2-1;
// let result2=value*3-4;
// let result3=value*3+1;
// let result4=value*3+4;
    
// // let result2=value*3*value2-4;

// console.log(value,result1,result2,result3,result4);

//assignment operators--

// let a=10;
// a+=5;
// a++;
// a--;
// a++;
// console.log(a);

// comparison operators---

// let ageAman=26;
// let ageSara=32;
// console.log(ageAman<ageSara);  //<=,>=,
// console.log(ageSara>18);

//operstor precidence---
// let x,y;
// x=y=10-5-5;
// console.log(x,y) //it executed from right to left

// let ramAge=24;
// let amanAge=32;
// averageAge=(ramAge+amanAge)/2;
// console.log(averageAge);

//assignment operators---
// let age=18;
// if(age === 18) console.log("you just became a developer");

// let myNumber=Number(prompt("Enter the Number"));
// if(myNumber%2==0){
//     prompt(`The number ${myNumber} is an even Number`);
// }
// else{
//     prompt(`The number ${myNumber} is an odd Number`);
// }

// let myNumber=Number(prompt('Enter your Number'));
// if((myNumber%2)!==0 && (myNumber%3)!==0){
//     console.log("prime numbers",myNumber);
// }
// else{
//     console.log("they are not prime numbers",myNumber)
// }

//Boolean operators  ///&&,||,!

let myLicense=true; 
// let myvision=false; // agar true hota dono to  rult b true hota
let myvision=true; //is case me true hota
// console.log(myLicense && myvision ); //returns false //true false= false
// console.log(myLicense || myvision ); // return true// in or true flase= true
// console.log(!myLicense); //false
// console.log(!myvision); // true //ulta

// if(myLicense && myvision){
//     console.log("hurray...")
// }else
// console.log("huffff"); //it display because tf is equal //faalse in &&

// let tired=false;
// console.log(myLicense && myvision && tired); //if one false in and operator then  whole output is false
// console.log(myLicense && myvision || tired); ///if one is true then whole is true

let tired=false;
if(myLicense && myvision && !tired){
    console.log("she is passed ") //it will display
}
else{
    console.log("failed")
}