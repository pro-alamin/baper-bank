//handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {

    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    //set deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    //update balance-total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = newDepositAmount + previousBalanceTotal;
    balanceTotal.innerText = newBalanceTotal;


    //clear the deposit input filed
    depositInput.value = '';
});

//handle withdraw button event
document.getElementById('withdraw-btn').addEventListener('click', function () {

    //get the ammount withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmmountText = withdrawInput.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountText);
    console.log(newWithdrawAmmount);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
    withdrawTotal.innerText = newWithdrawTotal;


    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousbalanceAmountText = balanceTotal.innerText;
    const previousbalanceAmount = parseFloat(previousbalanceAmountText);

    const NewBalanceTotal = previousbalanceAmount - newWithdrawAmmount;
    balanceTotal.innerText = NewBalanceTotal;

    //clear the withdraw input filed
    withdrawInput.value = '';
})
