console.log('this is a call and apply methods');

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
book.apply(swiss,flightData); // swiss is object and flight data is value of an object
console.log(swiss);