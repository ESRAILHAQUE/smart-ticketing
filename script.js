let purchaseSeats = [];
let purchaseTicket = document.getElementById("purchaseTicket");
let totalAvailablesetsText = document.getElementById("totalAvailablesets");
let seatList = document.getElementById("seatList");
let seatType = document.getElementById("seatType");
let seatPrice = document.getElementById("seatPrice");
let totalPrice = document.getElementById("totalPrice");
let applyCoupoun = document.getElementById("applyCoupoun");
let discountPrice = document.getElementById("discountPrice");
let grandTotalPrice = document.getElementById("grandTotalPrice");
let discountPriceInitial = 0;


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
              liSeatType.textContent = "Economy";
              seatType.appendChild(liSeatType);
              let liseatPrice = document.createElement("li");
              liseatPrice.textContent = "550";
              seatPrice.appendChild(liseatPrice);
              totalPrice.textContent = 550 * purchaseSeats.length;
               applyCoupoun.disabled = false;
              grandTotalPrice.textContent = parseInt(totalPrice.textContent) - discountPriceInitial;
            

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
  function discount() {
      let coupounCode = document.getElementById("coupounCode").value;
      let copuponSection = document.getElementById("copuponSection");
      

    if (coupounCode === "NEW15"  ) {
        discountPrice.textContent = 0.15 * parseInt(totalPrice.textContent);
          grandTotalPrice.textContent =
            parseInt(totalPrice.textContent) - parseInt(discountPrice.textContent);
        copuponSection.classList.add("hidden");

      }
    else if (coupounCode === "Couple 20") {
        discountPrice.textContent = 0.2 * parseInt(totalPrice.textContent);
         grandTotalPrice.textContent =
           parseInt(totalPrice.textContent) -
           parseInt(discountPrice.textContent);
         copuponSection.disabled=true;
    }
    else if (coupounCode === '') {
         alert("Please Enter a coupoun code.")
        }
    else {
        alert("Invalid Coupoun.")
      }
  }
