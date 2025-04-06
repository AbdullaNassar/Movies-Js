// Login functionality
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    // Prevent form submission
    event.preventDefault();
    // declare the user and password vars
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // getting the data from locale storage
    const storedUsername = localStorage.getItem("userName");
    const storedPassword = localStorage.getItem("password");

    // Simulated login validation
    // location.assign("../HomePage/index.html");
    if (username === storedUsername && password === storedPassword) {
      location.assign("../HomePage/index.html");
    } else {
      errorMessage.textContent = "Invalid username or password!";
    }
  });

//  remember me functionality
// Load username from local storage if it exists
function remmeber() {
  const savedUser = localStorage.getItem("username");
  if (document.getElementById("rememberMe").checked == true) {
    document.getElementById("username").value = savedUser;
  }
}

// // create random opacity
// var myEvent = new Event("opacity");

// document.getElementById("imglo").addEventListener("opacity", function () {

//     var x = Math.random()
//     this.style.opacity = x
// });
// setInterval(function () {
//     document.getElementById("imglo").dispatchEvent(myEvent);
// }, 1000);

// login with facebook
document.getElementById("facebookLogin").addEventListener("click", function () {
  location.assign("home.html");
});
//  login with google
document.getElementById("googleLogin").addEventListener("click", function () {
  location.assign("home.html");
});

///
