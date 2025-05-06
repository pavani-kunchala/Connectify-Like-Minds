import React from 'react';
import { Link } from 'react-router-dom';
import './GroupsStyle.css'; // Optional: For styling

const Groups = () => {
  const chatRooms = ['general','c', 'java', 'nodejs','ai','cplusplus','devops','dsa','machinelearning','nlp','python','reactjs','springboot','webdevelopment'];

  return (
    <div className="groups-container">
      <h2>Select a Chatroom</h2>
      <ul>
        {chatRooms.map((room) => (
          <li key={room}>
            <Link to={`/chatrooms/${room}`}>{room.toUpperCase()} Chatroom</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Groups;
