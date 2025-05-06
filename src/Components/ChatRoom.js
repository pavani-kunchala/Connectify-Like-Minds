import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './ChatRoomStyle.css';
import { io } from 'socket.io-client';
import axios from 'axios';

// access on localhost - different tabs
/*const socket = io('http://localhost:5000', {
  transports: ['websocket', 'polling'],
  reconnection: true, // Enables automatic reconnection
}); */
 
// access on different devices - on same network
 
const socket = io(window.location.hostname + ':5000', {
  transports: ['websocket', 'polling'],
  reconnection: true, // Enables automatic reconnection
}); 

/*
// access on different devices - on different networks anywhere , but only 2 hrs
 
const backendURL = 'https://47a2-103-225-13-245.ngrok-free.app'; // Replace with actual ngrok backend URL

const socket = io(backendURL, { 
  transports: ['websocket', 'polling'],
  reconnection: true
}); */

const ChatRoom = () => {
  const { room } = useParams(); // Get room from URL
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showUsernameModal, setShowUsernameModal] = useState(true);
  const messagesEndRef = useRef(null); // Ref for auto-scrolling


    /*Fetch chat history from backend
    useEffect(() => {
      if (room) {
        socket.emit('join room', room);
        axios.get(`http://localhost:5000/messages?room=${room}`)
          .then((response) => setMessages(response.data))
          .catch((error) => console.error('Error fetching messages:', error));
      }
    }, [room]); */

     useEffect(() => {
      if (room) {
        socket.emit('join room', room);
        
        // Dynamically set the backend URL based on the current network
        const backendURL = `http://${window.location.hostname}:5000/messages?room=${room}`;
    
        axios.get(backendURL)
          .then((response) => setMessages(response.data))
          .catch((error) => console.error('Error fetching messages:', error));
      }
    }, [room]);  
     
 /*
  // Fetch chat history from backend
  useEffect(() => {
    if (room) {
      socket.emit("join room", room);
  
      axios
        .get(`${backendURL}/messages?room=${room}`)
        .then((response) => {
          setMessages(Array.isArray(response.data) ? response.data : []); // Ensure response is an array
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
          setMessages([]); // Prevent crashes if error occurs
        });
    }
  }, [room]);   */

 

  // Handle username submission
  const handleSetUsername = () => {
    if (username.trim()) {
      setShowUsernameModal(false);
      document.body.classList.add('chat-active');
    }
  };

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const msgData = { username, message, room, timestamp: new Date() };
      socket.emit('chat message', msgData);
      setMessage('');
    }
  };

  // Handle logging out
  const handleLogout = () => {
    setUsername('');
    setMessages([]);
    setShowUsernameModal(true);
  };

   // Listen for new chat messages
   useEffect(() => {
    socket.on('chat message', (data) => {
      if (data.room === room) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    });

    socket.on('disconnect', () => {
      console.warn('Disconnected! Trying to reconnect...');
    });

    return () => {
      socket.off('chat message');
      socket.off('disconnect');
    };
  }, [room]);

// Auto-scroll to the latest message when messages change or user enters chatroom
useEffect(() => {
  if (!showUsernameModal) {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
}, [messages, showUsernameModal]);

//console.log("Messages in render:", messages);
  return (
    <div className="chat-room-container">
      {showUsernameModal && (
        <div id="username-modal">
          <div>
            <h2>Enter Your Username</h2>
            <div className="username-inp" >
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

      {!showUsernameModal && (
        <>
          {/* Header */}
          <div className="header-container">
            <h1>{room.toUpperCase()} Chat Room</h1>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>

          {/* Chat messages */}
          <div id="messages">
            {messages.map((msg, index) => {
              const isSent = msg.username === username;
              return (
                <div key={index} className={`message ${isSent ? 'sent' : 'received'}`}>
                  {!isSent && <span className="username">{msg.username}</span>}

                  {/* Message content with formatted timestamp */}
                  <div className="message-content">
                    <span className="content">{msg.message}</span>
                    <span className="timestamp">
                    {new Date(msg.timestamp).toLocaleString()}
                    </span>
                  </div>

                  {isSent && <span className="sent-username">{msg.username}</span>}
                </div>
              );
            })}
            <div ref={messagesEndRef} /> {/* Auto-scroll anchor */}
          </div>

          {/* Message input */}
          <form id="form1" onSubmit={handleSendMessage}>
            <input
              type="text"
              id="input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              autoComplete="off"
            />
            <button type="submit" id="send-button" disabled={!message.trim()}>
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ChatRoom;
