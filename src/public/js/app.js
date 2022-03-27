const socket = new WebSocket(`ws://${window.location.host}`);

function handleOpen() {
  console.log("Connected to Server ✅");
}

function handleClose() {
  console.log("Disconnected from Server❌");
}

socket.addEventListener("open", handleOpen);

socket.addEventListener("message", (message) => {
  console.log("New message :'", message.data);
});

socket.addEventListener("close", handleClose);

setTimeout(() => {
  socket.send("hello from the browser!");
}, 10000);
