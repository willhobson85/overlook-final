import { expect } from 'chai';
import Hotel from "../src/hotel"
import { hotelSample } from "../src/sample-data"

let hotel1
let hotel2 

describe("Bookings", () => {

    beforeEach( () => {
        hotel1 = new Hotel(hotelSample[0].id, hotelSample[0].userID, hotelSample[0].date, hotelSample[0].roomNumber);
        hotel2 = new Hotel(hotelSample[1].id, hotelSample[1].userID, hotelSample[1].date, hotelSample[1].roomNumber)
    })

    it('should be an instancce of Bookings', () => {
        expect(hotel1).to.be.an.instanceOf(Bookings)
        expect(hotel2).to.be.an.instanceOf(Bookings)
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