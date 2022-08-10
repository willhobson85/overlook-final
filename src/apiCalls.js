import bookings from "../../overlook-api/data/bookings";

const customersAPIData = () => {
  return fetch("http://localhost:3001/api/v1/customers")
  .then((response) => response.json())
  .catch((error) => console.log(error));
}

const roomsAPIData = () => {
    return fetch("http://localhost:3001/api/v1/rooms")
  .then((response) => response.json())
  .catch((error) => console.log(error));
}

const bookingsAPIData = () => {
    return fetch("http://localhost:3001/api/v1/bookings")
  .then((response) => response.json())
  .catch((error) => console.log(error));
}

const savedBooking = (newStay) => {
    let options = {
        method: 'POST', 
        headers: {
            "Content-Type" : "application/json"
        }, 
        body: JSON.stringify({
            "userID": newStay.id, 
            "date": newStay.date, 
            "roomNumber": newStay.roomNumber
        })
        
    }
    return fetch("http://localhost:3001/api/v1/bookings", options)
    .then(response => response.json())
    .catch(error => console.log('Error: ', error))
}


export { customersAPIData, roomsAPIData, bookingsAPIData, savedBooking};