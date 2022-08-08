const customersAPIData = fetch("http://localhost:3001/api/v1/customers")
  .then((response) => response.json())
  .catch((error) => console.log(error));

const roomsAPIData = fetch("http://localhost:3001/api/v1/rooms")
  .then((response) => response.json())
  .catch((error) => console.log(error));

const bookingsAPIData = fetch("http://localhost:3001/api/v1/bookings")
  .then((response) => response.json())
  .catch((error) => console.log(error));

export { customersAPIData, roomsAPIData, bookingsAPIData };