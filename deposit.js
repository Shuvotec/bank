// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
//step-2: get the deposit amount from the doposit input field
// For input field use .value to the the value inside the input field
const depositField = document.getElementById('deposit-field');
const NewDepositAmountString = depositField.value;
const NewDepositAmount = parseFloat(NewDepositAmountString);

//step-3 : get the currect deposit total
//for non-input(element other then input,textarea) use innerText toget the box
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);
//step-4: add numbers to set the eoeal deposit
const currentDepositTotal = previousDepositTotal + NewDepositAmount;
//Set the deposit total
depositTotalElement.innerText = currentDepositTotal;

//Step-5: get ballance currant total

 const blanceTotalElement = document.getElementById('blance-total');
 const previousBlanceTotalString = blanceTotalElement.innerText;
 const previousBlanceTotal = parseFloat(previousBlanceTotalString);
 //step-6: Calculate Current total balance
 const currentBlanceTotal = previousBlanceTotal + NewDepositAmount;
 // set the balance total
blanceTotalElement.innerText = currentBlanceTotal;

//Step-7: Clear the diposit field
depositField.value = '';


})