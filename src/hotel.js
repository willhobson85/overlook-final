class Hotel {
    constructor(rooms, bookings, customers) {
        this.rooms = rooms;
        this.bookings = bookings;
        this.customers = customers;
    }

    findAvailableRooms(date) {
        let emptyRooms = this.rooms;
        let bookedRooms = this.bookings.filter(bookings => bookings.date === date) 
        this.rooms.forEach(room => {
            bookedRooms.forEach(booking => {
                if (room.number === booking.roomNumber) {
                    let foundIndex = emptyRooms.map(item => item.number).indexOf(room.number)
                    emptyRooms.splice(foundIndex, 1);
                }
                
            })
        })
        return emptyRooms
        // put this in scripts  
        //{
        //         return "I'm sorry, this room is booked for this date"
        //     } else {
        //         return "This room is available"
        //     }
        // })
    }


}
export default Hotel