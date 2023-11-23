let deposit = document.getElementById("deposit-amount");
let withdraw = document.getElementById("withdraw-amount");
let total = document.getElementById("total-amount");

let depositValue = document.getElementById("deposit-value");
let withdrawValue = document.getElementById("withdraw-value");

//deposit
function deposited(event) {
    // null check
    if (depositValue.value == "") {
        alert("Please Enter Deposit Amount");
        return;
    }
    let depositedAmount =
        parseFloat(deposit.innerText) + parseFloat(depositValue.value);
    deposit.innerText = depositedAmount;
    depositValue.value = ""; //reset deposit input field

    totalAmount();
}

//withdraw
function withdrawn(event) {
    // null check
    if (withdrawValue.value == "") {
        alert("Please Enter Withdraw Amount");
        return;
    }
    let withdrawnAmount =
        parseFloat(withdraw.innerText) + parseFloat(withdrawValue.value);
    withdraw.innerText = withdrawnAmount;

    totalAmount();
}

// total
function totalAmount(event) {
    let totalAmount =
        parseFloat(deposit.innerText) - parseFloat(withdraw.innerText);
    // check if total amount is less than 0
    if (totalAmount < 0) {
        alert("You don't have enough money in your account.");
        withdraw.innerText =
            parseFloat(withdraw.innerText) - parseFloat(withdrawValue.value);
        withdrawValue.value = ""; //reset withdraw input field
        return;
    }
    withdrawValue.value = ""; //reset withdraw input field
    total.innerText = totalAmount;
}
