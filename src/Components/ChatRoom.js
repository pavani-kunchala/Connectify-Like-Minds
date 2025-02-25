import React, { useState, useEffect } from 'react';
import './ChatRoomStyle.css'; // Import the CSS file
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', {
  transports: ['websocket', 'polling'], // Enforce WebSocket first, fallback to polling if necessary
});

const ChatRoom = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showUsernameModal, setShowUsernameModal] = useState(true);

  // Set the username
  const handleSetUsername = () => {
    if (username.trim()) {
      setShowUsernameModal(false);
    }
  };

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message && username) {
      socket.emit('chat message', { username, message });
      setMessage('');
    }
  };

  // Handle logging out
  const handleLogout = () => {
    setUsername('');
    setMessages([]);
    setShowUsernameModal(true); // Show the username modal again
  };

  // Listen for new chat messages
  useEffect(() => {
    socket.on('chat message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  return (
    <div className="chat-room-container">
      {showUsernameModal && (
        <div id="username-modal">
          <div>
            <h2>Enter Your Username</h2>
            <div className="username-inp">
              <input
                id="usernameInput"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your username"
              />
              <button onClick={handleSetUsername}>Set Username</button>
            </div>
          </div>
        </div>
      )}

      {/* Header containing h1 and logout button */}
      {!showUsernameModal && (
        <div className="header-container">
          <h1>Real-Time Chat App</h1>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}

      <div id="messages">
        {messages.map((msg, index) => {
          const isSent = msg.username === username;
          return (
            <div key={index} className={`message ${isSent ? 'sent' : 'received'}`}>
              {!isSent && <span className="username">{msg.username}</span>}
              <span className="content">{msg.message}</span>
              {isSent && <span className="sent-username">{msg.username}</span>} {/* Add username for sent messages */}
            </div>
          );
        })}
      </div>

      {!showUsernameModal && (
        <form id="form1" onSubmit={handleSendMessage}>
          <input
            type="text"
            id="input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            autoComplete="off" 
          />
          <button type="submit" id="send-button">Send</button>
        </form>
      )}
    </div>
  );
};

export default ChatRoom;
