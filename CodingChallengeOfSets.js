console.log("this a set methods");

const gameEvents=new Map([
    [17,"Goal"],
    [36,'Substitution'],
    [47,"Goal"],
    [51,"substitution"],
    [54,"Yellow card"],
    [66,"Goal"],
    [76,"Red card"],
    [82,"Goal"],
    [90,"substitution"]

])

// const events=[...new Set(gameEvents)];
// console.log(events);

//display  the unique values of the values of an array
// const events=[...new Set(gameEvents.values())]
// console.log(events);

//task 2--
// gameEvents.delete(76);
// console.log(gameEvents); // it deletes the red card entry 

//Task 3--

// console.log(`the events rises in an Average Every ${90/gameEvents.size} minutes`)

//Task 4--

// const time=[...gameEvents.keys()].pop()
// console.log(time);
// console.log(`The event is happening at every ${time/gameEvents.size} minutes`);

//Task 5--

for(const [main,event] of gameEvents){
    const half= main<=45 ? "FIRST" : "SECOND";
    console.log(`['${half}:HALF'] ${main} : ${event}`)
}