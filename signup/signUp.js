console.log("here");
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    const username = document.getElementById("name").value;
    const emailInput = document.getElementById("email");
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("password-again").value;
    let errorElement = document.getElementById("password-error");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|edu|org)/;
    const isValid = emailRegex.test(emailInput.value);
    errorElement = document.getElementById("email-error");
    if (!isValid) {
      errorElement.textContent =
        "Must be a valid .com, .net, .edu, or .org email";
      errorElement.style.display = "block";
      event.preventDefault();
      return;
    }
    errorElement.style.display = "none";
    console.log(emailInput.value);

    errorElement = document.getElementById("password-error");
    if (password.length < 8) {
      errorElement.textContent = "Password must be at least 8 characters long!";
      errorElement.style.display = "block";
      event.preventDefault();
      return; // Exit early if length fails
    }

    if (password !== repeatPassword) {
      errorElement.textContent = "Passwords do not match!";
      errorElement.style.display = "block"; // Show error message
      event.preventDefault(); // Stop form submission
    } else {
      errorElement.style.display = "none"; // Hide error if corrected
    }

    if (username && password && emailInput) {
      let [fname, lname] = username.split(" ");
      localStorage.setItem("fname", fname);
      localStorage.setItem("lname", lname);
      localStorage.setItem("password", password);
      localStorage.setItem("email", emailInput.value);
      localStorage.setItem(
        "favorites",
        JSON.stringify([
          {
            id: "69478",
            src: `https://image.tmdb.org/t/p/w500/zrZzCdDpBzVPKg88ftOuKQS1xO7.jpg`,
            name: "A Taste for Killing",
          },
        ])
      );
    }
  });
