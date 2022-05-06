console.log('this is a object tutorial');
// let myId={
//     firstName:"Lomash",
//     lastName:"Sharma",
//     Address:"xyz",
//     birthYear:1997,
//     friends:['mike','clarke','smith','jonas'],
//     driverLicense:true,
//     calcAge: function() {
//     this.age= 2022-birthYear;
//     return this.age;
//     }
// }
// console.log(myId.Address)
// let nameKey='Name';
// console.log(myId['last'+ nameKey]); //sharma
// console.log(myId['first'+ nameKey]); //lomash
// const interestIn=prompt("What did u want to know about my id?")
// // console.log(myId[interestIn]); // print the key name and display  the 

// if(myId[interestIn]){
//     console.log(myId[interestIn]);
// }
// else{
//     console.log("you entered invalid data");
// }

// myId.location='spain';
// myId['facebook']='facebook@xy' // object and value // dynamically channge //we retrieve by doing this exorriment
// console.log(myId);

// console.log(`Lomash has ${myId.friends.length} friends and its best friend is ${myId.friends[2]}`)
// console.log(`${myId.firstName} is ${myId.calcAge()} old and has a driver license is also `)

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName());