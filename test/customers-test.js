import { expect } from 'chai';
import Customers from "../src/customers"
import Booking from '../src/booking';
import { customerSample, bookingSample, roomSample } from "../src/sample-data"

let customer1
let customer2
let hotel

describe("Customers", () => {

    beforeEach(() => {
        customer1 = new Customers(customerSample[0].id, customerSample[0].name)
        customer2 = new Customers(customerSample[1].id, customerSample[1].name)
        hotel = new Booking(bookingSample)
    })

    it('should be an instance of Customer', () => {
        expect(customer1).to.be.an.instanceOf(Customers);
        expect(customer2).to.be.an.instanceOf(Customers);
    })

    it('should have an id', () => {
        expect(customer1.id).to.equal(1);
        expect(customer2.id).to.equal(21)
    })

    it('should have a name', () => {
        expect(customer1.name).to.equal("Leatha Ullrich");
        expect(customer2.name).to.equal("Kelsie Rath");
    })

    it('should show bookings', () => {
        customer1.findBookings(bookingSample)
        expect(customer1.allStays).to.deep.equal([{
            "id": "5fwrgu4i7k55hl6t8",
            "userID": 1,
            "date": "2022/02/05",
            "roomNumber": 12,

        },
        {
            "id": "5fwrgu4i7k55hl727",
            "userID": 1,
            "date": "2022/11/06",
            "roomNumber": 22,
        
        }])
        customer2.findBookings(bookingSample)
        expect(customer2.allStays).to.deep.equal([
            {
                "id": "5fwrgu4i7k55hl72m",
                "userID": 21,
                "date": "2022/01/09",
                "roomNumber": 13,
            
            },
            {
                "id": "5fwrgu4i7k55hl73z",
                "userID": 21,
                "date": "2022/01/31",
                "roomNumber": 10,
            
            }
        ])
    })

    it('should have a total amount spent', () => {
        customer1.findBookings(bookingSample);
        customer1.findCustomerRooms(roomSample)
        customer1.totalAmountSpent()
        expect(customer1.totalSpent).to.equal(522.4)
    })
})