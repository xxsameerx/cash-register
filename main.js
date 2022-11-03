const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const errorMessage = document.querySelector("#error-msg");
const displayNoOfNotes = document.querySelectorAll(".no-of-notes");
const notesTable = document.querySelector(".notes-table");
const cashGivenLabel = document.querySelector("#cash-given-label");

const notes = [2000, 500, 100, 20, 10, 5, 1];

function validateBillAmountAndCashGiven() {
    errorMessage.style.display = "none";

    if (Number(billAmount.value) <= 0) {
        showErrorMessage("Invalid Bill Amount");
    } else if (Number(cashGiven.value) < Number(billAmount.value)) {

        cashGivenLabel.style.display = "block";
        cashGiven.style.display = "block";
        notesTable.style.display = "table";

        showErrorMessage("Cash given should be greater than the bill amount.");
    } else if(Number(cashGiven.value) === Number(billAmount.value)) {
        showErrorMessage("Bill has been paid.")
    } else {
        const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);

        calculateChange(amountToBeReturned);
    }

}

function showErrorMessage(errorMsg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = errorMsg

    for (let i = 0; i < notes.length; i++) {
        displayNoOfNotes[i].innerText = "";
    }
}

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < notes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / notes[i]);
        amountToBeReturned = amountToBeReturned % notes[i];

        displayNoOfNotes[i].innerText = numberOfNotes;
    }
}

checkBtn.addEventListener("click", validateBillAmountAndCashGiven);