// define login function
function loginUser() {
  //retrieves 'username' & 'password' in html element with 'id' 
  // getelement method & stored 
  var enteredUsername = document.getElementById("username").value;
  var enteredPassword = document.getElementById("password").value;
  
  // Retrieve stored username and password from local storage
  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");

  // Check if entered username and password match the stored values
  if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
    
    // successful login
    var successMessage = document.getElementById("successMessage");
    successMessage.innerHTML = "Login successful!";
    // login redirect to game pg
	window.location.href = "game.html";
  } else {

    // error if unsuccessful login
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = "Invalid username or password.";
  }

  // Clear input fields
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
