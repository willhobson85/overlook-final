import { expect } from 'chai';
import Customers from "../src/customers"
import { customerSample } from "../src/sample-data"

let customer1
let customer2

describe("Customers", () => {

    beforeEach(() => {
        customer1 = new Customers(customerSample[0].id, customerSample[0].name)
        customer2 = new Customers(customerSample[1].id, customerSample[1].name)
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

})