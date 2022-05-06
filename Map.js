console.log('this is a map method');
   

// const heist=new Map(); //it creates a blank map
// heist.set('name','Professor Team'); // key and values
// heist.set('1','Professor Name');
// heist.set('2',' berlin');
// heist.set('3','denver');
// heist.set('4','tokyo');
// heist.set('5','auckland,buggeta');
// console.log(heist.set(6,'lisbon,potugaul')) //display keys values elements

// heist
// .set('categories',['pizza','pasta','vegetarian','organic'])
// .set('open',11)
// .set('closed',23)
// .set(true,'we are opened')
// .set(false,'we are closed..sorry')
// console.log(heist);

// console.log(heist.get('name')) // get fetches the keys of the sets 
// console.log(heist.get(true)); // we are opened

// let time=21;
// console.log(heist.get(time > heist.get('open') && time < heist.get('close')));

// const arr=[1,2];
// heist.set(arr,'test');
// console.log(heist);  //[1,2] iis key // test is the values

const question=new Map([
    ['Questions','What is the best programming language'],
    [1,'Java'],
    [2,'python'],
    [3,'Java Script'],
    ['correct',3],
    [true,'Correct'],
    [false,'incorrect']

]);

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

console.log(question);


//convert Objects to map

// console.log(Object.entries(restraunt.openingHours));
// const newMap=new Map(Object.entries(restraunt.openingHours));
// console.log(newMap);

//example

for(const [key,value] of question){
    if(typeof key === 'number')
    console.log(`Answer ${key}:${value}`)
}

const answers=Number(prompt("enter the answer"));
console.log(answers);
console.log(question.get(question.get('correct') === answers));
// console.log(question.get(question.get('correct') === answers));