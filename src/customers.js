class Customers {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.totalSpent = 0;
        this.previousStays;
        console.log(this.previousStays);
    }

    findBookings(previousVisits) {
        this.previousStays = previousVisits;
    }

    totalAmountSpent() {
        this.totalSpent = this.previousStays.reduce((acc, stay) => {
        acc += stay.cost;
        return acc
        }, 0)
    }
}

export default Customers