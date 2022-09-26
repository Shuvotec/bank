// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
   //step-2: get the email address inside the email input field
   //always remember to use .value to get text from an input field
   const emailField = document.getElementById('user-emale');
   const email = emailField.value;
   //step 3 password add
   const passwordField = document.getElementById('password-text');
   const password = passwordField.value;
   if(email === 'shuvokh10@gmail.com' && password === 'Shuvokhbd'){
    console.log('valid User')
    window.location = 'bank.html'
   }
   else{
    alert('Invalied password Shuvo solved')
   }
})