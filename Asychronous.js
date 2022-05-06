console.log('this is a as js');

fetch('https://api.covid19api.com/summary').then((apidata)=>{
    return apidata.json();
}).then( (actualdata)=>{
    console.log(actualdata);
    console.log(actualdata.Countries[101] ,actualdata.Countries[102] );
}).catch( (error)=>{
    console.log(`The Error:${error}`);
});