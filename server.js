const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const db = require('./db'); // Import the MySQL connection

const app = express();
const server = http.createServer(app);
/*
const io = socketIo(server, {
  cors: {
    origin:  '*'  , // Allow frontend connection 'http://localhost:3000'  '*'
    methods: ['GET', 'POST'],
     
  },
});

app.use(cors());*/

const io = socketIo(server, {
  cors: {
    origin: "*",  // Allow all origins
    methods: ["GET", "POST"],
    credentials: true  // Allow cookies & headers
  },
});

app.use(cors({ origin: "*", credentials: true }));

app.use(express.json());

// Store messages in MySQL
const saveMessage = (username, message, room) => {
  const query = 'INSERT INTO messages (username, message, room, timestamp) VALUES (?, ?, ?, NOW())';
  db.query(query, [username, message, room], (err) => {
    if (err) {
      console.error('Error saving message:', err);
    }
  });
};

// Fetch messages from MySQL
app.get('/messages', (req, res) => {
  const { room } = req.query;
  const query = 'SELECT * FROM messages WHERE room = ? ORDER BY timestamp ASC';

  db.query(query, [room], (err, results) => {
    if (err) {
      console.error('Error fetching messages:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
});
 

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('join room', (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on('chat message', (data) => {
    const { username, message, room } = data;
    saveMessage(username, message, room); // Save to MySQL
    io.to(room).emit('chat message', data); // Send message to room
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

/*// Start server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); */

// Start server and listen on all network interfaces
const PORT = 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

 