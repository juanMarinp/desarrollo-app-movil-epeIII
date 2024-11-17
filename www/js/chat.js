// chat.js
var socket = io.connect('http://localhost:3000'); 
function sendMessage() {
  var message = document.getElementById("message").value;
  socket.emit('message', message);
  document.getElementById("message").value = ""; 

  var chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += "<p><b>Yo:</b> " + message + "</p>";
  chatBox.scrollTop = chatBox.scrollHeight; 
}

socket.on('message', function(data) {
  var chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += "<p><b>Empleado:</b> " + data + "</p>";
  chatBox.scrollTop = chatBox.scrollHeight;  
});
