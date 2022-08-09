// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { customersAPIData, roomsAPIData, bookingsAPIData } from "../src/apiCalls"
import Rooms from "../src/rooms"
import Booking from "../src/booking"
import Customers from "../src/customers"
import Hotel from "../src/hotel"
import './images/hotel-room.png'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/hotel-room.jpeg'

// Global variables
let hotel;
let currentCustomer; 
let room;
let allRooms = [];
let allBookings = [];
let userBookings = [];
let checked = [];




// Selectors
const allRoomsBtn = document.querySelector(".all-rooms-button")
const yourBookingsBtn = document.querySelector(".your-bookings-button")
const vacationTile = document.querySelector(".vacation-tile")
const vacationGrid = document.querySelector(".vacation-grid")
const bookedVacationTile = document.querySelector(".vacation-tile-booked")

// Event Listeners
window.addEventListener("load", initializeData, showAllRooms);
allRoomsBtn.addEventListener("click", showAllRooms);
yourBookingsBtn.addEventListener("click", showYourBookings);

//Code

function showAllRooms() {
    vacationGrid.innerHTML = ``;
    allRooms.forEach((room) => {
    vacationGrid.innerHTML += `
    <section class="vacation-tile">
    <img src="./images/hotel-room.png" class="room-img" alt="clean hotel room with a big bed, and open door overlooking a lake"></img>
    <h3>${room.roomType}</h3>
    <h3>${room.bedSize}</h3>
    <h4>${room.costPerNight}</h4>
    </section>
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
        <section class="vacation-tile">
        <img src="./images/hotel-room.png" class="room-img" alt="clean hotel room with a big bed, and open door overlooking a lake"></img>
        <h3>${room.roomType}</h3>
        <h3>${room.bedSize}</h3>
        <h4>${room.costPerNight}</h4>
        </section>
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



// Fetch Calls
function initializeData() {
    Promise.all([customersAPIData(), roomsAPIData(), bookingsAPIData()]).then(
      (data) => {
          hotel = new Hotel(data[1].rooms, data[2].bookings, data[0].customers);
          allBookings = new Booking(data[2].bookings)
          room = new Rooms(data[1].rooms[0]);
          allRooms = hotel.rooms;
          //   console.log("room", allRooms)
          showAllRooms()
          let randomCustomer = data[0].customers[Math.floor(Math.random() * data[0].customers.length)];
          currentCustomer = new Customers(randomCustomer.id, randomCustomer.name);
          console.log("customer", currentCustomer)
          console.log("all bookings", allBookings.id)
          console.log("customer bookings", currentCustomer.findBookings(allBookings))
        //   console.log("userBookings", userBookings);
      });
}

