//Extract the username from the URL
let urlParams = new URLSearchParams(window.location.search);
let name = urlParams.get('Name');
//document.write("<h1>Thank you, "+name+" for registering in our website</h1>");
window.addEventListener('DOMContentLoaded', function() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    const savedEmail = localStorage.getItem('email');
    
    document.write("<h1>Thank you, "+savedUsername+" for registering in our website</h1>");
    console.log(savedUsername);
    console.log(savedPassword);
    console.log(savedEmail);
  
  });