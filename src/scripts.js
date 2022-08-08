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

// Global variables
let hotel;
let customer; 
let allRooms = [];
let booking;

// Fetch Calls
function initializeData() {
    Promise.all([customersAPIData, roomsAPIData, bookingsAPIData]).then(
      ([customersAPIData, roomsAPIData, bookingsAPIData]) => {
          hotel = new Hotel(roomsAPIData.rooms, bookingsAPIData.bookings, customersAPIData.customers);
          allRooms = new Rooms(roomsAPIData.rooms);
          let randomCustomer = customersAPIData.customers[Math.floor(Math.random() * customersAPIData.customers.length)];
          customer = new Customers(randomCustomer);
          console.log(randomCustomer)
      }
    );
  }

console.log("all rooms", hotel);


// Selectors
const allRoomsBtn = document.querySelector(".all-rooms-button")
const yourBookingsBtn = document.querySelector(".your-bookings-button")
const vacationTile = document.querySelector(".vacation-tile")
const bookedVacationTile = document.querySelector(".vacation-tile-booked")

// Event Listeners
window.addEventListener("load", initializeData, showAllRooms);
allRoomsBtn.addEventListener("click", showAllRooms);
yourBookingsBtn.addEventListener("click", showYourBookings);

//Code

function showAllRooms() {
    allRooms.forEach((room) => {
    vacationTile.innerHTML += `
    <img src="../src/images/hotel-room.jpeg" class="room-img"alt="clean hotel room with a big bed, and open door overlooking a lake"></img>
    <h3>${allRooms.roomType}</h3>
    <h3>${allRooms.bedType}</h3>
    <h4>${allRooms.costPerNight}</h4>
    `
    })
}

function showYourBookings() {
    if (!loggedIn) {
        return alert("Please log in to do that!")
    } else {
        customer.findBookings()
        let bookingsByDate = customer.allStays
        bookingsByDate.filter((a, b) => {
            b.date - a.date
        })
        bookedVacationTile.innerHTML += `
            <img src="../src/images/hotel-room.jpeg" class="room-img"alt="clean hotel room with a big bed, and open door overlooking a lake"></img>
            <h3>${allRooms.roomType}</h3>
            <h3>${allRooms.bedType}</h3>
            <h4>${allRooms.costPerNight}</h4>
        `
    }
}


function addBooking() {
    //still need to add book button when I add calendar
    const bookRoom = document.querySelectorAll(".book-room-btn");

    bookRoom.forEach((listing) => {
      bookRoom.addEventListener("click", pushBooking);
    });

}

function pushBooking(event) {
    //need to create object here to push into array.
    //{
    //     id:
    //     date: 
    //     roomNumber:
    // }
    //need to push tile
    // bookedVacationTile.innerHTML += `
    //         <img src="../src/images/hotel-room.jpeg" class="room-img"alt="clean hotel room with a big bed, and open door overlooking a lake"></img>
    //         <h3>${allRooms.roomType}</h3>
    //         <h3>${allRooms.bedType}</h3>
    //         <h4>${allRooms.costPerNight}</h4>
    //     `
    customer.bookRoom(addToBooking)
}

