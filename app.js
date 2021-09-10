const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#checkBtn");
const message = document.querySelector("#errorMessage");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
checkBtn.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Sir bartan vaha rkhe hai, haan udhr!");
    }
  } else {
    showMessage("Invalid bill amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (var i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage(msg) {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
