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
      seat.classList.add("bg-primary-color", "hover:bg-primary-color");
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
      grandTotalPrice.textContent =
        parseInt(totalPrice.textContent) - discountPriceInitial;
    }

    purchaseTicket.textContent = purchaseSeats.length;
    totalAvailablesetsText.textContent = 40 - purchaseSeats.length;
  } else if (purchaseSeats.includes(seatTextContent)) {
    alert("Seat is selected");
  } else {
    alert("You can not purchase more than 4 tickets.");
  }
}
function discount() {
  let coupounCode = document.getElementById("coupounCode").value;
  let copuponSection = document.getElementById("copuponSection");
  let discountSection = document.getElementById("discountSection");

  if (coupounCode === "NEW15") {
    discountPrice.textContent = 0.15 * parseFloat(totalPrice.textContent);
    grandTotalPrice.textContent = parseFloat(
      parseFloat(totalPrice.textContent) - parseFloat(discountPrice.textContent)
    );
    copuponSection.classList.add("hidden");
    discountSection.classList.add("flex");
    discountSection.classList.remove("hidden");
  } else if (coupounCode === "Couple 20") {
    discountPrice.textContent = 0.2 * parseInt(totalPrice.textContent);
    grandTotalPrice.textContent =
      parseInt(totalPrice.textContent) - parseInt(discountPrice.textContent);
    copuponSection.classList.add("hidden");
    discountSection.classList.add("flex");
    discountSection.classList.remove("hidden");
  } else if (coupounCode === "") {
    alert("Please Enter a coupoun code.");
  } else {
    alert("Invalid Coupoun.");
  }
}

function submit() {
  let modal = document.getElementById("modalSection");
  let main = document.getElementById("main");
  main.classList.add("hidden");
  modal.classList.remove("hidden");

  console.log("main is hidden");
}

function backToWebsite() {
  let modal = document.getElementById("modalSection");
  let main = document.getElementById("main");

  modal.classList.add("hidden");
  main.classList.remove("hidden");
}
