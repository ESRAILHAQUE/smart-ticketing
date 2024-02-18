let purchaseSeats = [];
let purchaseTicket = document.getElementById("purchaseTicket");
let purchaseTicketNumber = parseInt(purchaseTicket.textContent);
let totalAvailablesetsText = document.getElementById("totalAvailablesets");
let availableSeats = parseInt(totalAvailablesetsText.textContent);
let seatList = document.getElementById("seatList");
let seatType = document.getElementById("seatType");
let seatPrice = document.getElementById("seatPrice");




function seatBooking(seat) {
  purchaseSeats.push(seat.textContent);

  if (purchaseSeats.length <= 4 && availableSeats > 0) {
    seat.classList.add("bg-primary-color", "hover:bg-primary-color");
    availableSeats--;
    purchaseTicketNumber++;
    totalAvailablesetsText.textContent = availableSeats;
      purchaseTicket.textContent = purchaseTicketNumber;
      let li = document.createElement('li');
      let seatListText = li.textContent(seat.textContent);
      seatList.appendChild(seatListText);
  } else {
    alert(
      "You can not purchase more than 4 tickets."
    );
  }
}

function getInputById(inputId) {
  inp;
}
