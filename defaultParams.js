console.log("function default params concept");
'use-strict'

const bookings=[]
const createBookings= (flightNumber,
    numbpassengers=3,
    price=1999*numbpassengers)=>
     {

    const booking={
        flightNumber,
        numbpassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}
createBookings("ANF007");
createBookings("ANF007",undefined);