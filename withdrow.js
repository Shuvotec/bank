/*
1. add event handler with teh withdrow button
2.get the wethdrow amount from the Widthdrow input field
2.5 also make sure to convert the input into a number by using parseFlote
3. get previous withdrow total
3.5.Calculate total withdrow amount
4.Set total withdrow amount
5.get the prevous balance total
6,5.set the new blance total
7.Clear the input field
*/
//Step-1
document.getElementById('btn-withdrow').addEventListener('click',function(){
    //Step-2
    const withdrowField = document.getElementById('withdrow-field');
    const newWithDrowAmountString = withdrowField.value;
    const newWithdrowAmount = parseFloat(newWithDrowAmountString);
    //Step3
    const withdrowtotalElement = document
    .getElementById('withdrow-total');
    const previousWithdrowTotalString = withdrowtotalElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);
    //Step-4
    const currentWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
    withdrowtotalElement.innerText = currentWithdrowTotal;
    //Step-5
    const blanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);
    //Step-6
    const newBlanceTotal = previousBlanceTotal - newWithdrowAmount;
    blanceTotalElement.innerText = newBlanceTotal;
   
    //step-7
    withdrowField.value ='';

})