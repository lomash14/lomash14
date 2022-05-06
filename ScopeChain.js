console.log("welcome to thr scope chain ")
let myName="lomash";

function first(){
    let age=34;
    if(age>=30){
        const decade=3;
        var millenial=true;
    }


function second() {
    const job='teacher';
    console.log(`${myName} is a ${age} year old ${job}`)
}
second();
}
first();