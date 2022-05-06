console.log('this is a sets');

const orderSet=new Set(['pasta','pizza','noodles','noodles','pizza'])
console.log(orderSet);

console.log(new Set('jack')); // seperate the string characters 
console.log(orderSet.size); //3
orderSet.add('garlic bread');
orderSet.delete('noodles');
orderSet.has('pizza');


console.log(orderSet); // pasta pizza garlic bread


for(const items of orderSet)
console.log(items); // display the data arrays into strings

//Real example--

const staff=['waiter','manager','waiter','cheff'];
console.log(new Set(staff)); // same result of staffUniq
// const staffUniq= [...new Set(staff)]; // display unique results
// console.log(staffUniq);
console.log(new Set('waiter').size) // 6