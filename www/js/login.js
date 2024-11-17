// login.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email.includes("@empresa.com")) {
    window.location.href = "dashboard.html"; 
  } else {
    alert("Credenciales incorrectas.");
  }
});
