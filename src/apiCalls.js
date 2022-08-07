const customersAPIData = fetch("http://localhost:3001/api/v1/users")
  .then((response) => response.json())
  .catch((error) => console.log(error));

const roomsAPIData = fetch("http://localhost:3001/api/v1/ingredients")
  .then((response) => response.json())
  .catch((error) => console.log(error));

const bookingsAPIData = fetch("http://localhost:3001/api/v1/recipes")
  .then((response) => response.json())
  .catch((error) => console.log(error));

export { customersAPIData, roomssAPIData, bookingsAPIData };