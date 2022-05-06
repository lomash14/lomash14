// console.log('this is a coding challenge');
// let marksHeight=1.69;
// let marksMass=78;
// let johnMass=92;
// let johnHeight=1.95;
// let markBmi=(marksMass/(marksHeight*marksHeight));
// let johnBmi=(johnMass/(johnHeight*johnHeight));
// let higherBmi=(markBmi >johnBmi)
// console.log(`mark BMI is ${markBmi} & john bmi is ${johnBmi} in which higher BMI of john is ${higherBmi}`);
// // console.log("john mbi is:",johnBmi);


// let d1=200
// let d2=149
// let d3=113
// let AvgDolphins=(d1+d2+d3)/3;
// console.log("average score of dolphins are:",AvgDolphins);

// let k1=107
// let k2=103
// let k3=110
// let AvgKoalas=(k1+k2+k3)/3;
// // console.log("average score of Koalas are:",AvgKoalas);

// // if(AvgDolphins>AvgKoalas){
// //     console.log(`The dolphin are won with ${AvgDolphins} score`);
// // }
// // else if(AvgKoalas>AvgDolphins){
// // console.log(`The Koalas are won with ${AvgKoalas} score`)
// // }
// // else if(AvgDolphins == AvgKoalas){
// //     console.log("the match is been draw")
// // }


// console.log("average score of Koalas are:",AvgKoalas)
// let winMarginDol=AvgDolphins-AvgKoalas;
// let winMarginKoa=AvgKoalas-AvgDolphins;

// if(AvgDolphins>AvgKoalas && AvgDolphins>=100){
//     console.log(`The dolphin are won with ${winMarginDol} runs 🎉`);
// }
// else if(AvgKoalas>AvgDolphins && AvgKoalas>=100){
// console.log(`The Koalas are won with ${winMarginKoa} score 🎆`)
// }
// else if(AvgDolphins == AvgKoalas && AvgDolphins>=100 && AvgKoalas>=100){
//     console.log("the match is been draw")
// }
// else if(AvgDolphins<=100 && AvgKoalas<=100){
//     console.log("Sorry!! No one wins 🙁");
// }

// for(let Bil=50;Bil<=300;Bil++){
//    let totalBil=(15/100)*Bil;
//    let  totalConsumedBill=totalBil+Bil;
//    console.log("the bills of persons including tax are",totalConsumedBill);
   
// }

// let value=window.prompt("enteryour billing Amount");
// let tip=(15/100)*value;
// let tip2=(20/100)*value;
// let finalValue=Number(value)+(tip);
// let finalValue2=Number(value)+(tip2);
// let consumedValue= value<=300 &&  value>=50 ? 
// // console.log(`the bill was ${value} Rupees & the tip was${tip},and the total bill is :${finalValue}`):
// alert(`the bill was ${value} Rupees & the tip was ${tip},and the total bill is :${finalValue}`):
// alert(`the bill  was ${value} Rupees & the tip was ${tip2}, and the total bill is :${finalValue2}`);

// console.log(`the bill  was ${value} Rupees & the tip was ${tip2}, and the total bill is :${finalValue2}`);

// let totalBill= bill<=300 && bill>=50? console.log(bill+tax):console.log()


///functional program challenge ---

    // let d1=10;
    // let d2=20;
    // let d3=30;
    // let k1=10;
    // let k2=20;
    // let k3=40;
    // let Dolphin=(d1+d2+d3)/3;
    // let koalas=(k1+k2+k3)/3;


// const checkWinner=(avgDolphins,avgKoalas)=>{
//     avgDolphins=(d1+d2+d3)/3
//     avgKoalas=(k1+k2+k3)/3
//     if(avgDolphins>avgKoalas){
// console.log(`Dolphins wins by ${avgDolphins} over ${avgKoalas}`)
//     }
//     else{
//         console.log(`Koalas win by ${avgKoalas} over ${avgDolphins}`)
//     }
// }
// console.log(checkWinner(30,50));


// const calcAverage = (a,b,c)=>
//    (a + b + c) / 3;
// console.log(calcAverage(3,4,5));

// //test1;

// let scoreDolphins=calcAverage(250,253,751);
// let scorekoalas=calcAverage(65,54,49);
// console.log(scoreDolphins,scorekoalas);

// const checkWinner=function (avgDolphins,avgKoalas){
//     if(avgDolphins>=2*avgKoalas){
//         console.log(`Dolphin ${avgDolphins} lead by ${avgKoalas}`);
//     }
//     else if(avgKoalas >= 2*avgDolphins){
//         console.log(`Koalas ${avgKoalas} lead by ${avgDolphins}`)
//     }
//     else{
//         console.log("no one is winner");
//     }
// }
// checkWinner(scoreDolphins,scorekoalas);
// // checkWinner(576,111);

// //test 2//---==---
// scoreDolphins=calcAverage(85,54,41);
// scorekoalas=calcAverage(23,34,27);
// console.log(scoreDolphins,scorekoalas);
// checkWinner(scoreDolphins,scorekoalas);

// const calcBill=(bill)=>{
// return bill>=50 && bill<=300 ? 
// bill*0.15
// :
// bill*0.20
// }
// const bills=[125,555,44];
// const tips=[calcBill(bills[0]),calcBill(bills[1]),calcBill(bills[2])];
// console.log("total bills of values",bills,tips);
// const totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(totals);

////Objects Programming test----

// const mark={
//     fullName:"miller",
//     mass:78,
//     height:1.69,
//     calcBmi:function () {
//        return this.mass/(this.height*this.height)
//     }

// }
// const john={
//     fullName:"smith",
//     mass:92,
//     height:1.95,
//     calcBmi:function () {
//         return this.mass/(this.height*this.height)
//      }
// }
// console.log(john.calcBmi(),mark.calcBmi());
// if(mark.calcBmi() > john.calcBmi()){
//     console.log(`MARK whos's BMI ${mark.calcBmi()} has higher bmi than johns ${john.calcBmi()}`)
// }
// else if(john.calcBmi() > mark.calcBmi()){
//     console.log(`JOHN who's BMI ${john.calcBmi()} has higher bmi than marks ${mark.calcBmi()}`)
// }



///Arrays challenge---

// const calcTip=(bill)=>{
// return bill>=50 && bill<=300? bill * 0.15:bill * 0.20;
// }

// const bills=[22,295,176,440,37,105,10,1100,86,52];
// const tips=[]
// const totals=[]

// for(let i=0;i<bills.length;i++){
//     const tip=calcTip(bills[i]); //main operation perform  in this 
//     tips.push(tip);
//     totals.push(bills[i]+tip)
// }
// console.log(bills,tips,totals);

// const calcBil=(bill)=>{
//     return bill>=30 && bill<=300 ? bill*0.15 : bill*0.20
// }
// let bills=[22,295,176,440,37,105,10,1100,86,52];
// const tips=[]
// const totals=[]


// for(let i=0;i<bills.length;i++){
//     const tip=calcBil(bills[i]);
//      tips.push(tip);
//      totals.push(bills[i]+tip);
// }
// console.log(bills,tips,totals);

// const calAvg =(arr)=>{
//     let sum=0;
// for(let i=0;i<arr.length;i++){
//     // sum+= arr[i] // it assigned the additin iteration 
//     sum+=arr[i];
//   }
// return sum /(arr.length)// it displays the sum of the counts
// }
// calAvg([4,3,2]); // it calls the sum of the counts of an array

// console.log(calAvg(totals));
// console.log(calAvg(tips)); 


// const myReverse=(arr)=>{
//     let rev=0;
//     for(let i=0;i<arr.length;i++){
//      rev=rev[i];
//     }
// return rev.reverse()
// }
// myReverse([1,2,3]);
// console.log(myReverse(rev));


