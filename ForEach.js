console.log('this is a for each method f an array');

const movements=[200,450,-400,3000,-650,-130,70,1300];

// for (const movement of movements){
    for (const movement of movements){
    if(movement > 0){
        console.log(`You deposit ${movement}`)
    }
    else{
  console.log(`you withdraw ${Math.abs(movement)}`);
    }
}

movements.forEach(function(movement){
    if(movement > 0){
        console.log(`You deposit ${movement}`)
    }
    else{
  console.log(`you withdraw ${Math.abs(movement)}`);
    }
}) // same result like for of loop


//Another Method---
for (const [i,movement] of movements.entries()){
    if(movement > 0){
        console.log(`Movement : ${i+1} : you deposited ${movement}`)
    }
    else{
  console.log(`you withdraw ${Math.abs(movement)}`);
    }
}

//while using for each array method---

movements.forEach(function(mov,i,arr){
    if(mov > 0){
        console.log(`Movement : ${i+1} : you deposited ${mov}`)
    }
    else{
  console.log(`you withdraw ${Math.abs(mov)}`);
    }
})


//Example 2--

const currencies=new Map([
['USD','us dollars'],
['EURO','euro pounds'],
['GBP','GBP poyn sterling']
])

currencies.forEach((keys,values,map)=>{
  console.log(`${keys}:${values}`);
})

//For sets
const currencies2=new Set([
  ['USD','us dollars'],
  ['EURO','euro pounds'],
  ['GBP','GBP poyn sterling'],
  ['EURO','euro pounds'],
  ])

  currencies2.forEach((values,_,map)=>{
  console.log(`${values} : ${map}`);
  })