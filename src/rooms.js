class Rooms {
    constructor(number, type, bidet, bedSize, numBeds, costPerNight) {
        this.number = number;
        this.roomType = type;
        this.bidet = bidet;
        this.bedSize = bedSize;
        this.numBeds = numBeds;
        this.costPerNight = costPerNight
    }

    filterRoomByType(type) {
        let filteredRooms = []
        filteredRooms.push(roomArray.filter(Rooms.type === [type]))
    }

    

}

export default Rooms;