// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Import the CORS package

// Initialize express and create an HTTP server
const app = express();
const server = http.createServer(app);

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000', // Allow only requests from localhost:3000
  methods: ['GET', 'POST'],        // Allowed HTTP methods
}));

// Initialize socket.io on the server
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',  // Allow connections from your frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  },
});



// Serve the frontend (you can replace this part with your React app if you want)
app.use(express.static('public'));

// Listen for new connections from clients
io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Listen for the 'chat message' event from the frontend
  socket.on('chat message', (data) => {
    console.log('Received message:', data);
    
    // Emit the message to all connected clients
    io.emit('chat message', data);
  });

  // Handle user disconnecting
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server on port 5000
server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
