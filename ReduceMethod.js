console.log('this is a reduce method');
let arr1=[2,4,6,8];
let arr=arr1.reduce((acc,curr)=>{ 
    return acc+curr;
})
console.log(arr);
