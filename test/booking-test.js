import { expect } from 'chai';
import Booking from "../src/booking"
import { bookingSample } from "../src/sample-data"

let hotel1
let hotel2 

describe("Bookings", () => {

    beforeEach( () => {
        hotel1 = new Booking(bookingSample[0].id, bookingSample[0].userID, bookingSample[0].date, bookingSample[0].roomNumber);
        hotel2 = new Booking(bookingSample[1].id, bookingSample[1].userID, bookingSample[1].date, bookingSample[1].roomNumber)
    })

    it('should be an instancce of Bookings', () => {
        expect(hotel1).to.be.an.instanceOf(Booking)
        expect(hotel2).to.be.an.instanceOf(Booking)
    })

    it('should have an id', () => {
        expect(hotel1.id).to.equal('5fwrgu4i7k55hl6t8');
        expect(hotel2.id).to.equal('5fwrgu4i7k55hl727');
    })

    it('should have a userID', () => {
        expect(hotel1.userID).to.equal(1);
        expect(hotel2.userID).to.equal(1);
    })

    it('should have a date', () => {
        expect(hotel1.date).to.equal('2022/02/05');
        expect(hotel2.date).to.equal('2022/11/06');
    })

    it('should have a room number', () => {
        expect(hotel1.roomNumber).to.equal(12);
        expect(hotel2.roomNumber).to.equal(22);
    })
    
})