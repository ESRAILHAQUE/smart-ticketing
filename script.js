let purchaseTickets = 0;
let purchaseSeats = [];
function seatBooking(seat) {
    purchaseSeats.push(seat.textContent);
    console.log(purchaseSeats);
    if (purchaseSeats.length <= 4) {
        seat.classList.add("bg-primary-color", "hover:bg-primary-color");
    }
    else {
         
        alert('You can not purchase more than 4 tickets.');
    }
}