console.log('this is a arrays methods');

const currencies=new Map([
    ['USD','US dollars'],
    ['EUR','Europian pounds'],
    ['DHR','Arabian dhirams'],
]);

const movements= [200,450,-400,3000,,-650,-130,70,1300];


/////

const arr=['a','b','c','d','e'];
console.log(arr.slice(2)); // 2nd index c,d,e // it starts from the 2nd index of the element
console.log(arr.slice(2,4)); // it comes to last index -1
console.log(arr.slice(-1)); // it comes to last index
console.log(arr.slice(-2)); // it comes to second last index -1
console.log([...arr]); // for shallow copies

///Splice method
// this method is used for the mutsting of the array
// console.log(arr.splice(2)); // is display  the last index of the array element
// console.log(arr); // it displys a,b and deleted the cde

// arr.splice(1,2); //at position 1 deleted 2 elements // b,c been deleted
// console.log(arr);

// reverse methods

let arr2=[3,4,5,6,7];
const arr3=['a','e','i','o','u'];
console.log(arr2.reverse()); // reverse the number of the array

//CONCAT method of an array--

const letters=arr.concat(arr3);
console.log(letters) // display a-u for each elemetn of an array
console.log(...arr,...arr3); // display  in the form of an string from an array

//Join method

console.log(letters.join(' - ')); //joins at each elements with - characters