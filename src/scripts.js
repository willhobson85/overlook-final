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
let bookingDate;




// Selectors
const allRoomsBtn = document.querySelector(".all-rooms-button")
const yourBookingsBtn = document.querySelector(".your-bookings-button")
const vacationTile = document.querySelector(".vacation-tile")
const vacationGrid = document.querySelector(".vacation-grid")
const bookedVacationTile = document.querySelector(".vacation-tile-booked")
const totalSpent = document.querySelector(".dollars-spent")
const dateSearch = document.querySelector(".filter-button")
const checkboxes = document.querySelectorAll(".checkbox")
const dateInputBox = document.querySelector(".date-search")

// Event Listeners
window.addEventListener("load", initializeData, showYourBookings);
yourBookingsBtn.addEventListener("click", showYourBookings);
dateSearch.addEventListener("click", findARoom);
checkboxes.forEach((box) => {
    box.checked = false;
    box.addEventListener("change", () => filterRoomType(hotel));
  });

//Code

function showYourBookings(frank) {
    console.log(frank)
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
//interpolate the vacation tiles with a button to book the room
//add event listener to the button to push it to booked room array
//error handling for button
//after info from user, submit post

function filterRoomType() {
 // This adds the id (suite, single, junior suite, etc) to an array to be used in find function.
    checked = [];
    checkboxes.forEach((checkedBox) => {
        if (checkedBox.checked) checked.push(checkedBox.id)
    });
    // console.log(checked)
    return checked
}

function findARoom(rooms) {
    let findDate = new Date();
    let year = String(findDate.getFullYear());
    let month = String(findDate.getMonth()+1).padStart(2,'0');
    let day = String(findDate.getDate()+1).padStart(2,'0');
    let bookSearch = [year.toString(), month, day]
    bookingDate = bookSearch.join("/")
    let freeRooms = []
    let availableRooms = hotel.findAvailableRooms();
    // console.log("99", availableRooms);
    // console.log("checked", checked)
    let checkedAvailable = availableRooms.forEach((style) => {
        // console.log("style.roomType", style.roomType)
        if (style.roomType === checked[0] || checked[1] || checked[2]) {
        freeRooms.push(style)
        // This is a spot where I am having trouble pushing to free rooms array
        } 
    })
    // console.log("freeRooms", freeRooms);
    // if ((checked.length === 0) && (bookingDate !== "2022/08/10")) {
    //    vacationGrid.innerHTML = `<section class="vacation-tile"><h1 class="centered">Please pick a date and try again</h1><br><button type="button" class="error-button">ShowYourBookings</button></section>`
    // } else if (freeRooms = []) {
        //"We are so sorry, there are no available rooms for the selected date"
    //  } else {
    //     vacationGrid.innerHTML += `
    //     <section class="vacation-tile">
    //     <img src="./images/hotel-room.png" class="room-img" alt="clean hotel room with a big bed, and open door overlooking a lake"></img>
    //     <h3>${rooms.date}</h3>
    //     <h3>${rooms.type}</h3>
    //     <h4>${rooms.cost}</h4>
    //     <button class="book-room">Book this room</button>
    //     </section>
    //     `
    //  const bookRoom = document.querySelectorAll(".book-room");
    //  bookRoom.forEach((listing) => {
        //bookRoom.addEventListener("click", pushBooking)
        //return newBook = new Booking(id, userID, date, roomNumber)
    //})
    // }
    // addBooking()
    return bookingDate
}

function pushBooking() {
    const bookRoom = document.querySelectorAll(".book-room-btn");
    bookRoom.forEach((listing) => {
      bookRoom.addEventListener("click", pushBooking);
    });
    randomCustomer.allStays.push(booking)
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
            hotel = new Hotel(allRooms, allBookings, allCustomers);
            let randomCustomer = allCustomers[Math.floor(Math.random() * allCustomers.length)];
            showYourBookings(randomCustomer);
      });
}

