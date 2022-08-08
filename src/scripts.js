// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { customersAPIData, roomsAPIData, bookingsAPIData } from "../src/apiCalls"
import Rooms from "../src/rooms"
import Booking from "../src/booking"
import Customers from "../src/customers"
import Hotel from "../src/hotel"

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let hotel;
let customer; 
let rooms;
let booking;

// Fetch Calls
function initializeData() {
    Promise.all([customersAPIData, roomsAPIData, bookingsAPIData]).then(
      ([customersAPIData, roomsAPIData, bookingsAPIData]) => {
          hotel = new Hotel(roomsAPIData.rooms, bookingsAPIData.bookings, customersAPIData.customers);
          let randomCustomer = customersAPIData.customers[Math.floor(Math.random() * customersAPIData.customers.length)];
          customer = new Customers(randomCustomer);
          console.log(randomCustomer)
      }
    );
  }

//console.log(randomCustomer);

// Global variables

// Selectors

// Event Listeners
window.addEventListener("load", initializeData);

//Code