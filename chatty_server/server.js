const express = require('express');
const SocketServer = require('ws').Server;
const WebSocket = require('ws');
var uuidv4 = require('uuid/v4');

const PORT = 3001

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`listening on ${PORT}`));

const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', function incoming(message) {
  let newMessage = JSON.parse(message);
  newMessage.key = uuidv4();
  

	// Setup a broadcast helper
	wss.broadcast = newMessage => {
	  wss.clients.forEach(client => {
	    // only send the message to clients which are OPEN
	    if (client.readyState === WebSocket.OPEN) {
	      client.send(JSON.stringify(newMessage));
	    }
	  });
	};
	// });
    // When we get a message from a client, re-broadcast it to all connected clients
    wss.broadcast(newMessage);
  });
  
  // wss.clients.forEach(function each(client) {
  // 	if (client.readyState === SocketServer.OPEN) {
  // 		client.send(JSON.stringify(newMessage))
  // 	}
  // })

  // Send an initial message to clients on connection.
  ws.send(JSON.stringify({ username: "WelcomeBot", message: "Welcome to the Chatty room :)" }));

//   ws.on('close', () => console.log('Client disconnected'));
});


// // Handle new clients connecting
// wss.on("connection", function connection(ws) {
//   ws.on("message", function incoming(message) {
//     console.log("received: %s", message);


//   // error handler for clients
//   ws.on("error", e => {
//     console.log("got an error", e);
//   });

//   // Send an initial message to clients on connection.
//   ws.send(JSON.stringify({ username: "Server", message: "something" }));
// });