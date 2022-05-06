console.log('higher order functions');

// const flight='ACT686';
// const john={
//     name:"john shwef",
//     passport:6486629946
// }

// const  checkInn=(flightNumber,passenger)=>{

// }
// checkInn()

const oneword=(str)=>{
return str.replace(/ /g,' ').toLowerCase()
}

const upperFirstWord=(str)=>{
 const[first,...others]=str.split('');
 return [first.toUpperCase(),...others].join(' ') 
}

//higher order function

const transformer=function(str,fn){
console.log(`original string : ${str}`) //it returns 1st parameter of  function value that is string
console.log(`transformed string:  ${fn(str)}`)// it returns the str parameter inside the function 
                                                    //where operation is been performed
console.log(`transformed by:  ${fn.name}`)


}

transformer('js is the best',upperFirstWord)
// transformer('js is the best',oneword)


// const twoWord=(str)=>{
//    const [first,...others]=str.split(' ');
//    return [first.toUpperCase(),...others].join(' ')
// }

// const HOF=(str,fn)=>{
// console.log(`HOF string: ${fn(str)}`)
// }
// HOF("java is cool",twoWord) // JS is cool return  the word with the capital
