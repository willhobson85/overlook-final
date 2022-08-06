import Rooms from "../src/rooms"
import Booking from "../src/booking"
import Customers from "../src/customers"

class Hotel {
    constructor(room, booking, customer) {
        this.room = room;
        this.booking = booking;
        this.customer = customer;
    }
}

export default Hotel