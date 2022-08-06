import { expect } from 'chai';
import Booking from "../src/booking"
import { bookingSample } from "../src/sample-data"

let booking1
let booking2 

describe("Bookings", () => {

    beforeEach( () => {
        booking1 = new Booking(bookingSample[0].id, bookingSample[0].userID, bookingSample[0].date, bookingSample[0].roomNumber);
        booking2 = new Booking(bookingSample[1].id, bookingSample[1].userID, bookingSample[1].date, bookingSample[1].roomNumber)
    })

    it('should be an instancce of Bookings', () => {
        expect(booking1).to.be.an.instanceOf(Booking)
        expect(booking2).to.be.an.instanceOf(Booking)
    })

    it('should have an id', () => {
        expect(booking1.id).to.equal('5fwrgu4i7k55hl6t8');
        expect(booking2.id).to.equal('5fwrgu4i7k55hl727');
    })

    it('should have a userID', () => {
        expect(booking1.userID).to.equal(1);
        expect(booking2.userID).to.equal(1);
    })

    it('should have a date', () => {
        expect(booking1.date).to.equal('2022/02/05');
        expect(booking2.date).to.equal('2022/11/06');
    })

    it('should have a room number', () => {
        expect(booking1.roomNumber).to.equal(12);
        expect(booking2.roomNumber).to.equal(22);
    })
    
})