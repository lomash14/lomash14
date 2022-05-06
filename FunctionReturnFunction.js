console.log('this is a function return function');

const greet = (greeting)=>{ // first call greet function 
return function(name){ // then name parameter runs
    console.log(` ${greeting} ${name}`)
}
}

const greeterHey = greet('hey') // store the function inside a variable for display
greeterHey('jonas') // now the variable become the another function  which access the props of the closure function
greeterHey('how are you?')