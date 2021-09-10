const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#checkBtn");
const message = document.querySelector("#errorMessage");

checkBtn.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
    } else {
      showMessage("Sir bartan vaha rkhe hai, haan udhr!");
    }
  } else {
    showMessage("Invalid bill amount");
  }
});

function calculateChange() {}

function hideMessage(msg) {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
