import Rooms from "../src/rooms"
import Booking from "../src/booking"
import Customers from "../src/customers"

class Hotel {
    constructor(room, booking, customer) {
        this.room = room;
        this.booking = booking;
        this.customer = customer;
    }


    findCustomerInformation(customer.id) {
        let customer1 = new Customers();
        customerInfo = [];
        customerInfo.push(bookingsArray.filter(bookings => bookings.userID === customer.id));
    }

    findAvailableRooms() {
        let emptyRooms = []
        let bookedRooms = []
        bookingsArray.map(bookings => {
            if(bookings.date && bookings.userID) {
                return "I'm sorry, this room is booked for this date"
            } else {
                return "This room is available"
            }
        })
    }


}
export default Hotel