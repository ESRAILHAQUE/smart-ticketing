let purchaseSeats = [];
let purchaseTicket = document.getElementById("purchaseTicket");
let totalAvailablesetsText = document.getElementById("totalAvailablesets");
let seatList = document.getElementById("seatList");
let seatType = document.getElementById("seatType");
let seatPrice = document.getElementById("seatPrice");

function seatBooking(seat) {
    let seatTextContent = seat.textContent.trim();
    
    if (purchaseSeats.length < 4) {
          if (!purchaseSeats.includes(seatTextContent)) {
            purchaseSeats.push(seatTextContent);
            seat.classList.add("bg-primary-color","hover:bg-primary-color");
              console.log(purchaseSeats);
              let li = document.createElement("li");
              li.textContent = seat.textContent.trim();
              seatList.appendChild(li);
              let liSeatType = document.createElement("li");
              liSeatType.textContent = "Economics";
              seatType.appendChild(liSeatType);
              let liseatPrice = document.createElement("li");
              liseatPrice.textContent = "550";
              seatPrice.appendChild(liseatPrice);
        }
        
        purchaseTicket.textContent = purchaseSeats.length;
        totalAvailablesetsText.textContent = 40 - purchaseSeats.length;
        
    } else if (purchaseSeats.includes(seatTextContent)) {
        alert("Seat is selected");
    }
    else {
        alert("You can not purchase more than 4 tickets.");
    }
  

    

}
