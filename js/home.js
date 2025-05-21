// This is for the add money seciton 
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addedAmount = document.getElementById('added-amount').value ;
    const pinAddedAmount = document.getElementById('add-money-pin').value;
    if(pinAddedAmount === '1234'){
        const existingAmount = document.getElementById('existing-amount').innerText
        const updatedAmount = parseInt(addedAmount) + parseInt (existingAmount);
        document.getElementById('existing-amount').innerText = updatedAmount
        
    }else{
        alert ('Your Username or Pincode is wrong')
    }
})

// this is for the chased out section 

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault()
    const CashedOutAmount = document.getElementById('cash-out-amount').value;
    const CashedOutPin = document.getElementById('cash-out-pin').value;
    // console.log(CashedOutAmount, CashedOutPin);
    if(CashedOutPin === '1234'){
        console.log('You are successfull cahsed out');
        const existingAmount = document.getElementById('existing-amount').innerText
        const updatedAmount = parseInt(existingAmount) - parseInt(CashedOutAmount);
        document.getElementById('existing-amount').innerText = updatedAmount
    }else{
        alert ('Your UserName or Password is wrong')
    }

})


 /* make the add money form visible by clicking the add money button from up */

document.getElementById('add-money-main-btn').addEventListener('click', function(){

    /* remove the hidden class from the class list in add momey form */
    document.getElementById('add-money-form').classList.remove('hidden')
    /* add the hidden class from the class list in  cash out form */
    document.getElementById('cash-out-form').classList.add('hidden')
})

/* make the cash out form visible by clicking the cash out button from up */

document.getElementById('cash-out-main-btn').addEventListener('click', function(){

    /* remove the hidden class from the class list in cash out form */
    document.getElementById('cash-out-form').classList.remove('hidden')
    /* add the hidden class from the class list in add money form */
    document.getElementById('add-money-form').classList.add('hidden')
})
