console.log("object assigned methods");


let empId1={
    name:"lomash",
    address:"xyz",
    contact:454623567,
    blood:"O+"
}
let empId2={
    name:"rohan",
    address:"ccd",
    contact:6767323569,
    blood:"z+"
}

let empIdCopy=Object.assign({},empId2);
empIdCopy.address="hawai";
console.log(empIdCopy);

