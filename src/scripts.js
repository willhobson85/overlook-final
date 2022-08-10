// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { customersAPIData, roomsAPIData, bookingsAPIData, savedBooking } from "../src/apiCalls"
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
let allCustomers = [];
let userBookings = [];
let checked = [];




// Selectors
const allRoomsBtn = document.querySelector(".all-rooms-button")
const yourBookingsBtn = document.querySelector(".your-bookings-button")
const vacationTile = document.querySelector(".vacation-tile")
const vacationGrid = document.querySelector(".vacation-grid")
const bookedVacationTile = document.querySelector(".vacation-tile-booked")
const totalSpent = document.querySelector(".dollars-spent")

// Event Listeners
window.addEventListener("load", initializeData, showYourBookings);
yourBookingsBtn.addEventListener("click", showYourBookings);

//Code

function showYourBookings(frank) {
    frank.roomsUsed.forEach(stay => {
        vacationGrid.innerHTML += `
        <section class="vacation-tile">
        <img src="./images/hotel-room.png" class="room-img" alt="clean hotel room with a big bed, and open door overlooking a lake"></img>
        <h3>${stay.date}</h3>
        <h3>${stay.type}</h3>
        <h4>${stay.cost}</h4>
        </section>
        `
        }
    )
    totalSpent.innerHTML = `<h3>Total Spent: $${frank.totalSpent}<h3>`
}

//filter by room type
//take in id tags
//update vacationTiles with filter method

//search for and book room
//post?
//build date input box
// search by date day.js split - then join with .join("/")
//interpolate the vacation tiles with a button to book the room
//add event listener to the button to push it to booked room array
//error handling for button
//after info from user, submit post

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
          allBookings = data[2].bookings.map(booking => {
              let myBooking = new Booking(booking.id, booking.userID, booking.date, booking.roomNumber)
              return myBooking;
            })

            allRooms = data[1].rooms.map(room => {
                let myRoom = new Rooms(room.number, room.roomType, room.bidet, room.bedSize, room.numBeds, room.costPerNight)
                return myRoom;
            })

            allCustomers = data[0].customers.map(homie => {
                let myHomie = new Customers(homie.id, homie.name);
                myHomie.findBookings(allBookings);
                myHomie.findCustomerRooms(allRooms);
                myHomie.totalAmountSpent();
                return myHomie;
            })                      
            // hotel = new Hotel(allRooms, allBookings, allCustomers);
            let randomCustomer = allCustomers[Math.floor(Math.random() * allCustomers.length)];
            showYourBookings(randomCustomer);
      });
}

