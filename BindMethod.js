console.log('this is a call and apply and bind methods');

const luftansa={
 airline:'luftansa',
 bookingcode:'F',
 bookings:[],
 book:function(flightNum,name){
console.log(`${name} booked a seat on ${this.airline} flight ${this.bookingcode}${flightNum}`)
// this.bookings.push({ flight: `${this.bookingcode}${flightNum}`, name})
 }
}

luftansa.book(345,"Angel")
luftansa.book(432,"Sergio")
console.log(luftansa);


const vistara={
    airline:'vistara',
    bookingcode:'XE',
    booking:[],
}
// Call method
const book= luftansa.book;

book.call(vistara,34,'dean smith')
book.call(luftansa,34,'dean smith')
console.log(vistara);
console.log(luftansa)

const swiss={
    airline:'swissairways',
    bookingcode:"3R",
    booking:[]
}

book.call(swiss,456,"Roman");
console.log(swiss);

//APply Methods-----
const flightData=[587,'george washinton']; // its same like call main diff is that we passed the in the form of an array
book.apply(swiss,flightData);
console.log(swiss,...flightData);


//Bind method-----

const bookLF=book.bind(luftansa);
const bookVS=book.bind(vistara);
const bookSW=book.bind(swiss);

bookLF(23,'steve smith') // steve smith book a seat on flight F23

const bookXE23=book.bind(vistara,24); // here the data is feed in the flight vistara
bookXE23("jack swann");
bookXE23("rocky"); // is displays the data of same flight

//with event listeners---

// luftansa.planes=300;
// luftansa.buyPlanes=function () {
//     console.log(this);

//     this.planes++
//     console.log(this.planes);
// };
// document.querySelector('.buy').addEventListener('click',luftansa.buyPlanes.bind(luftansa))
 // it display the increment of the planes at the objects


//partial application ----

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //return  220
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100)); //returns 123
console.log(addVAT(23)); // returns 23+ 23% of 23 is 28 
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));



