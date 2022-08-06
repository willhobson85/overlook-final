import bookings from "../../overlook-api/data/bookings";

class Customers {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.totalSpent = 0;
        this.previousStays;
    }

    findBookings(previousVisits) {
        previousStays = bookingsArray.filter(customer.id === bookings.userID)
    }

    totalAmountSpent() {
        this.totalSpent = this.previousStays.reduce((acc, stay) => {
        acc += stay.cost;
        return acc
        }, 0)
    }
}

export default Customers