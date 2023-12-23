// define login function
function registerUser() {
  //retrieves 'username' & 'password' in html element with 'id' 
  // getelement method & stored 
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Store the username and password in local storage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // Display success message
  var successMessage = document.getElementById("successMessage");
  successMessage.innerHTML = "Registration successful!";

  // Clear input fields
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  // redirect to login pg 
  window.location.href = "login.html";

  // prevent default form submission 
  return false; 
}
