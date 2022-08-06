import { expect } from 'chai';
import Rooms from "../src/rooms"
import Booking from "../src/booking"
import Customers from "../src/customers"
import Hotel from "../src/hotel"
import { customerSample, roomSample, bookingSample } from "../src/sample-data"

let room1;
let room2;
let customer1;
let customer2;
let booking1;
let booking2;
let hotel1;
let hotel2;

describe("Hotel", () => {

    beforeEach( () => {
        room1 = new Rooms(roomSample[0].number, roomSample[0].roomType, roomSample[0].bidet, roomSample[0].bedSize, roomSample[0].numBeds, roomSample[0].costPerNight);
        room2 = new Rooms(roomSample[1].number, roomSample[1].roomType, roomSample[1].bidet, roomSample[1].bedSize, roomSample[1].numBeds, roomSample[1].costPerNight);
        customer1 = new Customers(customerSample[0].id, customerSample[0].name)
        customer2 = new Customers(customerSample[1].id, customerSample[1].name)
        booking1 = new Booking(bookingSample[0].id, bookingSample[0].userID, bookingSample[0].date, bookingSample[0].roomNumber);
        booking2 = new Booking(bookingSample[1].id, bookingSample[1].userID, bookingSample[1].date, bookingSample[1].roomNumber)
        hotel1 = new Hotel(room1, booking1, customer1);
        hotel2 = new Hotel(room2, booking2, customer2);
    })

    it('should be an instance of Hotel', () => {
        expect(hotel1).to.be.an.instanceOf(Hotel);
        expect(hotel2).to.be.an.instanceOf(Hotel);
    });
})