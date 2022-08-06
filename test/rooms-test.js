import { expect } from 'chai';
import Rooms from "../src/rooms"
import { roomSample } from "../src/sample-data"

let room1;
let room2;

describe("Rooms", () => {
    
    beforeEach( () => {
        room1 = new Rooms(roomSample[0].number, roomSample[0].roomType, roomSample[0].bidet, roomSample[0].bedSize, roomSample[0].numBeds, roomSample[0].costPerNight);

        room2 = new Rooms(roomSample[1].number, roomSample[1].roomType, roomSample[1].bidet, roomSample[1].bedSize, roomSample[1].numBeds, roomSample[1].costPerNight);
    });

    it('should be an instance of Rooms', () => {
        expect(room1).to.be.an.instanceOf(Rooms);
        expect(room2).to.be.an.instanceOf(Rooms);
    });

    it('should have a number', () => {
        expect(room1.number).to.equal(1);
        expect(room2.number).to.equal(8);
    })

    it('should have a type', () => {
        expect(room1.roomType).to.equal("residential suite");
        expect(room2.roomType).to.equal("junior suite");
    })

    it('should indicate if it has a bidet', () => {
        expect(room1.bidet).to.equal(true);
        expect(room2.bidet).to.equal(false);
    })

    it('should indicate bed size', () => {
        expect(room1.bedSize).to.equal("queen");
        expect(room2.bedSize).to.equal("king");
    })

    it('should indicate number of beds', () => {
        expect(room1.numBeds).to.equal(1);
        expect(room2.numBeds).to.equal(1);
    })

    it('should have a cost per night', () => {
        expect(room1.costPerNight).to.equal(358.4);
        expect(room2.costPerNight).to.equal(261.26);
    })
});