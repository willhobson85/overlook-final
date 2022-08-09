class Customers {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.totalSpent = 0;
        this.allStays = [];
        this.roomsUsed = []
    }

    findBookings(bookingsArray) {
        this.allStays = bookingsArray.filter(bookings => this.id === bookings.userID)
    }

    bookRoom(availableRoom) {
        if (!this.allStays.includes(availableRoom)) {
            this.allStays.push(availableRoom);
        } else {
            return alert("You have already booked this room!")
        }
    }

    findCustomerRooms(roomsArray) {
        this.allStays.forEach(stay => {
            roomsArray.forEach(room => {
                if (stay.roomNumber === room.number) {
                    this.roomsUsed.push({
                        roomNumber: stay.roomNumber,
                        cost: room.costPerNight,
                        date: stay.date,
                        type: room.roomType
                    })
                }
            })
        })
    }


    totalAmountSpent() {
        this.totalSpent = this.roomsUsed.reduce((acc, stay) => {
        acc += stay.cost;
        return acc
        }, 0)
    }
}

export default Customers