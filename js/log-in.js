document.getElementById('log-in-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('object');
    const inputPhonenumber = document.getElementById('input-phonenumber').value;
    const inputPassword = document.getElementById('input-password').value;
    if(inputPhonenumber === '555' && inputPassword === '1234'){
        console.log('you are in the homepage');
        window.location.href = '/home.html'
    }else{
        alert ('your username or password in incorrect')
    }
})